import { createMiddleware } from "@tanstack/react-start";

import { createSpotifyApiClient } from "#/lib/spotify/spotify.server";

export const spotifyClientMiddleware = createMiddleware({
	type: "function",
}).server(async ({ next }) => {
	const spotifyClient = await createSpotifyApiClient();

	return next({
		context: {
			spotifyClient,
		},
	});
});
