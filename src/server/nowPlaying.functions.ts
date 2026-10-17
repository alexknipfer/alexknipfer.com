import { createServerFn } from "@tanstack/react-start";

import { getNowPlaying } from "#/server/spotify.server";

export const fetchNowPlaying = createServerFn({ method: "GET" }).handler(() =>
	getNowPlaying(),
);
