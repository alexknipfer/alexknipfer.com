import clsx from "clsx";

interface Props {
	isOpen: boolean;
}

const bar =
	"absolute left-0 block h-[1.5px] w-full rounded-full bg-current transition-all duration-300 ease-out";

/** Two-bar hamburger that rotates into an X. */
export default function MenuIcon({ isOpen }: Props) {
	return (
		<span aria-hidden="true" className="relative block size-4">
			<span
				className={clsx(
					bar,
					isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-1",
				)}
			/>
			<span
				className={clsx(
					bar,
					isOpen
						? "top-1/2 -translate-y-1/2 -rotate-45"
						: "top-[calc(100%-0.25rem-1.5px)]",
				)}
			/>
		</span>
	);
}
