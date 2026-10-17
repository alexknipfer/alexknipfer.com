// Read per request (never at module scope) so secrets stay server-side and
// work on runtimes that inject env at request time.
export function getSpotifyEnv() {
	const clientId = process.env.SPOTIFY_CLIENT_ID;
	const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
	const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

	if (!clientId || !clientSecret || !refreshToken) {
		throw new Error(
			"Must configure SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET and SPOTIFY_REFRESH_TOKEN environment variables.",
		);
	}

	return { clientId, clientSecret, refreshToken };
}
