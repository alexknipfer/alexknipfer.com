import clsx from "clsx";

interface Props {
	start: React.ReactNode;
	end?: React.ReactNode;
	className?: string;
}

export function DividerRow({ start, end, className }: Props) {
	return (
		<div
			className={clsx(
				"flex items-center gap-2 text-sm whitespace-nowrap text-fg-muted",
				className,
			)}
		>
			<div className="flex items-center gap-2">{start}</div>
			<div
				aria-hidden="true"
				className="h-px min-w-6 flex-1 bg-line transition-colors duration-300 group-hover:bg-primary"
			/>
			{end && <div className="flex min-w-0 items-center gap-1">{end}</div>}
		</div>
	);
}
