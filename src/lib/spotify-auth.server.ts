import { env } from "#/env/env.server";
import type { SpotifyTokenResponse } from "#/types/spotify";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

async function getAccessToken() {
	const response = await fetch(TOKEN_ENDPOINT, {
		method: "POST",
		headers: {
			Authorization: `Basic ${Buffer.from(`${env.SPOTIFY_CLIENT_ID}:${env.SPOTIFY_CLIENT_SECRET}`).toString("base64")}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: new URLSearchParams({
			grant_type: "refresh_token",
			refresh_token: env.SPOTIFY_REFRESH_TOKEN,
		}),
	});

	if (!response.ok) {
		console.error("SPOTIFY TOKEN ERROR RESPONSE: ", await response.text());
		throw new Error("Unable to refresh Spotify access token.");
	}

	return response.json() as Promise<SpotifyTokenResponse>;
}

export const SpotifyAuth = {
	getAccessToken,
};
