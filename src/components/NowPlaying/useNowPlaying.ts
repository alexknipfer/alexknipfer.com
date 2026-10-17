import { queryOptions, useQuery } from "@tanstack/react-query";

import { getNowPlaying } from "#/lib/spotify/spotify.functions";

export const nowPlayingQueryOptions = queryOptions({
	queryKey: ["now-playing"],
	queryFn: () => getNowPlaying(),
	retry: false,
});

export function useNowPlaying() {
	const { data, isPending } = useQuery(nowPlayingQueryOptions);

	return { track: data ?? null, isLoading: isPending };
}
