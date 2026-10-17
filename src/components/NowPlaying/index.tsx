import { useNowPlaying } from "#/components/NowPlaying/useNowPlaying";

export function NowPlaying() {
	const { isPlaying, isLoading, data } = useNowPlaying();

	if (isLoading) {
		return (
			<div className="flex w-64 animate-pulse items-center gap-3 rounded-lg bg-surface-elevated/60 p-2">
				<div className="size-10 shrink-0 rounded-md bg-line" />
				<div className="flex-1 space-y-2">
					<div className="h-3 w-2/5 rounded-sm bg-line" />
					<div className="h-3 w-3/4 rounded-sm bg-line" />
				</div>
			</div>
		);
	}

	const track = isPlaying ? data?.attributes : undefined;

	return (
		<article className="flex w-64 animate-blur-in items-center gap-3 rounded-lg bg-surface-elevated/60 p-2 pr-3">
			<div className="flex size-10 shrink-0 items-center justify-center">
				{track ? (
					<img
						src={track.albumImage}
						width={40}
						height={40}
						className="block size-10 rounded-md"
						alt={`Spotify album cover for ${track.artists}`}
					/>
				) : (
					<img
						src="/static/images/spotify.png"
						width={24}
						height={24}
						alt="Spotify music logo"
					/>
				)}
			</div>
			<div className="min-w-0 flex-1 text-xs">
				{track ? (
					<a
						href={track.songUrl}
						target="_blank"
						rel="noreferrer"
						className="block truncate font-semibold text-fg-highlighted hover:underline"
					>
						{track.songName}
					</a>
				) : (
					<p className="font-semibold text-fg-highlighted">Spotify</p>
				)}
				<p className="mt-0.5 truncate text-fg-muted">
					{track ? track.artists : "Not currently playing"}
				</p>
			</div>
			{track && (
				<img
					src="/static/images/spotify.png"
					width={14}
					height={14}
					className="shrink-0 self-start"
					alt="Spotify music logo"
				/>
			)}
		</article>
	);
}
