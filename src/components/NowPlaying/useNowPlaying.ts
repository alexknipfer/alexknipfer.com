import { queryOptions, useQuery } from "@tanstack/react-query";

import { fetchNowPlaying } from "#/server/nowPlaying.functions";

export const nowPlayingQueryOptions = queryOptions({
	queryKey: ["now-playing"],
	queryFn: () => fetchNowPlaying(),
	retry: false,
});

export function useNowPlaying() {
	const { data, isPending } = useQuery(nowPlayingQueryOptions);

	const isPlaying = Boolean(data?.attributes.isPlaying);

	return { data, isLoading: isPending, isPlaying };
}
