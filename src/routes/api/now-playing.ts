import { createFileRoute } from "@tanstack/react-router";

import { getNowPlaying } from "#/server/spotify.server";

// Preserves the legacy public HTTP contract of pages/api/now-playing.ts.
export const Route = createFileRoute("/api/now-playing")({
	server: {
		handlers: {
			GET: async () => {
				try {
					return Response.json(await getNowPlaying());
				} catch (error) {
					const detail =
						error instanceof Error
							? error.message
							: "An unknown error has occured";
					console.error("API ERROR RESPONSE: ", detail);
					return Response.json(
						{
							status: 400,
							errors: [{ title: "Bad Request.", detail }],
						},
						{ status: 400 },
					);
				}
			},
		},
	},
});
