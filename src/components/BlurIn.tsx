import clsx from "clsx";

interface Props {
	delay?: number;
	className?: string;
	children: React.ReactNode;
}

/** Fades in from blurred + slightly scaled up on mount (CSS only, SSR-safe). */
export default function BlurIn({ delay = 0, className, children }: Props) {
	return (
		<div
			className={clsx("animate-blur-in", className)}
			style={{ animationDelay: `${delay}s` }}
		>
			{children}
		</div>
	);
}
