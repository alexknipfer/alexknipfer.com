import { createServerFn } from "@tanstack/react-start";

import { spotifyClientMiddleware } from "#/lib/middleware";

export const getNowPlaying = createServerFn({ method: "GET" })
	.middleware([spotifyClientMiddleware])
	.handler(({ context }) => context.spotifyClient.getCurrentlyPlaying());
