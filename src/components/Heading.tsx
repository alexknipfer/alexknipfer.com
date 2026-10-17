import clsx from "clsx";

interface Props {
	level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	className?: string;
	children: React.ReactNode;
}

export function Heading({ level, children, className }: Props) {
	const Tag = level;

	return (
		<Tag
			className={clsx("text-pretty text-fg-highlighted", className, {
				"text-3xl font-bold sm:text-4xl lg:text-5xl": level === "h1",
				"text-xl font-medium tracking-tight lg:text-2xl": level === "h2",
				"text-lg font-semibold": level === "h3",
				"text-base font-semibold": level === "h4",
			})}
		>
			{children}
		</Tag>
	);
}
