import type { NowPlayingResponse } from "#/server/nowPlaying.types";
import { serialize } from "#/server/nowPlayingSerializer";
import type {
	SpotifyNowPlayingResponse,
	SpotifyTokenResponse,
} from "#/server/spotify.types";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT =
	"https://api.spotify.com/v1/me/player/currently-playing";

export class SpotifyError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "SpotifyError";
	}
}

// Read per request (never at module scope) so secrets stay server-side and
// work on runtimes that inject env at request time.
function getSpotifyConfig() {
	const clientId = process.env.SPOTIFY_CLIENT_ID;
	const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
	const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

	if (!clientId || !clientSecret || !refreshToken) {
		throw new SpotifyError(
			"Must configure SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET and SPOTIFY_REFRESH_TOKEN environment variables.",
		);
	}

	return { clientId, clientSecret, refreshToken };
}

async function getAccessToken() {
	const { clientId, clientSecret, refreshToken } = getSpotifyConfig();

	const response = await fetch(TOKEN_ENDPOINT, {
		method: "POST",
		headers: {
			Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: new URLSearchParams({
			grant_type: "refresh_token",
			refresh_token: refreshToken,
		}),
	});

	const json: SpotifyTokenResponse = await response.json();
	return json.access_token;
}

const NOT_PLAYING: NowPlayingResponse = {
	id: "",
	type: "spotify",
	attributes: {
		isPlaying: false,
		songName: "",
		artists: "",
		album: "",
		albumImage: "",
		songUrl: "",
	},
};

export async function getNowPlaying(): Promise<NowPlayingResponse> {
	const accessToken = await getAccessToken();

	const response = await fetch(NOW_PLAYING_ENDPOINT, {
		headers: { Authorization: `Bearer ${accessToken}` },
	});

	// Spotify answers 204 (empty body) when nothing is playing.
	if (response.status === 204) {
		return NOT_PLAYING;
	}

	if (!response.ok) {
		console.error("NOW PLAYING ERROR RESPONSE: ", await response.text());
		throw new SpotifyError("Unable to fetch currently playing track.");
	}

	const nowPlaying: SpotifyNowPlayingResponse = await response.json();

	// Podcasts/ads have no track item.
	if (!nowPlaying.item) {
		return NOT_PLAYING;
	}

	return serialize(nowPlaying);
}
