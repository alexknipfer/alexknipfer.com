import clsx from "clsx";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	isExternal?: boolean;
	hasAnimation?: boolean;
}

export function Anchor({
	children,
	isExternal = true,
	hasAnimation = true,
	className,
	...anchorProps
}: Props) {
	return (
		<a
			target={isExternal ? "_blank" : "_self"}
			rel={isExternal ? "noreferrer noopener" : undefined}
			className={clsx(
				"text-fg-highlighted",
				{ "link-animation": hasAnimation },
				className,
			)}
			{...anchorProps}
		>
			{children}
		</a>
	);
}
