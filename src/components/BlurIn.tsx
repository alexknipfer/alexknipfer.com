import clsx from "clsx";

interface Props {
	delay?: number;
	className?: string;
	children: React.ReactNode;
}

export function BlurIn({ delay = 0, className, children }: Props) {
	return (
		<div
			className={clsx("animate-blur-in", className)}
			style={{ animationDelay: `${delay}s` }}
		>
			{children}
		</div>
	);
}
