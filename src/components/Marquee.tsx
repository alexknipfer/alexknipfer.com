import clsx from "clsx";

interface Props {
	/** Rendered `repeat` times; copies after the first are hidden from assistive tech. */
	children: (copyIndex: number) => React.ReactNode;
	repeat?: number;
	className?: string;
}

/** Infinite horizontal scroller with faded edges; pauses on hover. */
export default function Marquee({ children, repeat = 4, className }: Props) {
	return (
		<div
			className={clsx(
				"group relative flex overflow-hidden [--gap:--spacing(16)]",
				"gap-(--gap) before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-1/3 before:bg-linear-to-r before:from-surface before:to-transparent",
				"after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-1/3 after:bg-linear-to-l after:from-surface after:to-transparent",
				className,
			)}
		>
			{Array.from({ length: repeat }, (_, copyIndex) => (
				<div
					// biome-ignore lint/suspicious/noArrayIndexKey: copies are static and never reorder
					key={copyIndex}
					aria-hidden={copyIndex > 0 || undefined}
					className="flex w-full min-w-max shrink-0 animate-marquee items-center justify-around gap-(--gap) backface-hidden group-hover:[animation-play-state:paused]"
				>
					{children(copyIndex)}
				</div>
			))}
		</div>
	);
}
