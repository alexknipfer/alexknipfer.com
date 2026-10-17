import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";

import { fetchNowPlaying } from "#/server/nowPlaying.functions";
import type { NowPlayingResponse } from "#/server/nowPlaying.types";

/**
 * Client-side fetch (like the legacy SWR hook) so SSR never waits on Spotify
 * and the skeleton renders first. Revalidates on window focus like SWR did.
 */
export default function useNowPlaying() {
	const getNowPlaying = useServerFn(fetchNowPlaying);
	const [data, setData] = useState<NowPlayingResponse>();
	const [error, setError] = useState<unknown>();

	useEffect(() => {
		let cancelled = false;

		const load = () => {
			getNowPlaying()
				.then((result) => {
					if (cancelled) return;
					setData(result);
					setError(undefined);
				})
				.catch((err: unknown) => {
					if (!cancelled) setError(err);
				});
		};

		load();
		window.addEventListener("focus", load);
		return () => {
			cancelled = true;
			window.removeEventListener("focus", load);
		};
	}, [getNowPlaying]);

	const isLoading = !data && !error;
	const isPlaying = Boolean(data?.attributes.isPlaying);

	return { data, isLoading, isPlaying };
}
