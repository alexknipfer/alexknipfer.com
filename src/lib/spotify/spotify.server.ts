import { SpotifyAuth } from "#/lib/spotify-auth.server";
import type { SpotifyNowPlayingResponse } from "#/types/spotify";

const SPOTIFY_API = "https://api.spotify.com/v1";

export type SpotifyApiClient = Awaited<
	ReturnType<typeof createSpotifyApiClient>
>;

export interface NowPlaying {
	songName: string;
	artists: string;
	albumImage: string | undefined;
	songUrl: string;
}

export async function createSpotifyApiClient() {
	const { access_token } = await SpotifyAuth.getAccessToken();

	function spotifyFetch(path: string) {
		return fetch(`${SPOTIFY_API}/${path}`, {
			headers: { Authorization: `Bearer ${access_token}` },
		});
	}

	async function getCurrentlyPlaying(): Promise<NowPlaying | null> {
		const response = await spotifyFetch("me/player/currently-playing");

		// Spotify answers 204 (empty body) when nothing is playing.
		if (response.status === 204) {
			return null;
		}

		if (!response.ok) {
			console.error("NOW PLAYING ERROR RESPONSE: ", await response.text());
			throw new Error("Unable to fetch currently playing track.");
		}

		const { is_playing, item }: SpotifyNowPlayingResponse =
			await response.json();

		// Paused, or podcasts/ads, which have no track item.
		if (!is_playing || !item) {
			return null;
		}

		return {
			songName: item.name,
			artists: item.artists.map((artist) => artist.name).join(", "),
			albumImage: item.album.images[0]?.url,
			songUrl: item.external_urls.spotify,
		};
	}

	return {
		getCurrentlyPlaying,
	};
}
