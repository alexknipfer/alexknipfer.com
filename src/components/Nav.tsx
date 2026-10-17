import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import { useEffect, useState } from "react";

import { MenuIcon } from "#/components/MenuIcon";
import { ThemeSwitchButton } from "#/components/ThemeSwitchButton";
import { navItems } from "#/lib/site";
import { useDisclosure } from "#/lib/useDisclosure";

const SCROLL_THRESHOLD = 20;

function useScrollY() {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const onScroll = () => setScrollY(window.scrollY);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return scrollY;
}

function Logo() {
	return (
		<Link to="/" aria-label="Home" className="block shrink-0">
			<img
				src="/static/images/profile.jpeg"
				width={32}
				height={32}
				alt=""
				className="size-8 rounded-full ring ring-line"
			/>
		</Link>
	);
}

export function Nav() {
	const scrollY = useScrollY();
	const isScrolled = scrollY > SCROLL_THRESHOLD;
	const offset =
		scrollY >= SCROLL_THRESHOLD ? 0 : 8 * (1 - scrollY / SCROLL_THRESHOLD);

	return (
		<>
			<div
				className="fixed inset-x-0 top-0 z-50 hidden will-change-transform md:block"
				style={{ transform: `translateY(${offset}px)` }}
			>
				<nav
					aria-label="Main"
					className={clsx("relative", isScrolled ? "p-0" : "px-2 py-4")}
				>
					<div
						className={clsx(
							"relative mx-auto border border-line transition-all duration-500 backface-hidden",
							isScrolled
								? "max-w-4xl rounded-b-xl bg-neutral-50/60 px-4 py-3 shadow-xl backdrop-blur-sm dark:bg-neutral-900/60"
								: "max-w-xl rounded-xl px-2 py-2",
						)}
					>
						<div className="flex items-center justify-between">
							<Logo />
							<ul className="flex items-center">
								{navItems.map(({ path, name }) => (
									<li key={path}>
										<Link
											to={path}
											activeOptions={{ exact: true }}
											className="block px-2.5 py-1.5 text-sm font-medium text-fg-muted transition-colors duration-300 hover:text-fg-highlighted hover:underline data-[status=active]:text-fg-highlighted"
										>
											{name}
										</Link>
									</li>
								))}
							</ul>
							<ThemeSwitchButton />
						</div>
					</div>
				</nav>
			</div>
			<MobileNav />
		</>
	);
}

function MobileNav() {
	const { onToggle, onClose, isOpen } = useDisclosure();

	return (
		<div className="fixed inset-x-0 top-0 z-50 border-b border-line bg-surface/80 backdrop-blur-sm md:hidden">
			<nav aria-label="Main" className="px-4">
				<div className="flex h-14 items-center justify-between">
					<Logo />
					<div className="flex items-center gap-1">
						<ThemeSwitchButton />
						<button
							type="button"
							aria-label={
								isOpen ? "Close navigation menu" : "Open navigation menu"
							}
							aria-expanded={isOpen}
							aria-controls="mobile-menu"
							onClick={onToggle}
							className="rounded-full p-1.5 text-fg transition-colors hover:bg-surface-elevated"
						>
							<MenuIcon isOpen={isOpen} />
						</button>
					</div>
				</div>
				<ul
					id="mobile-menu"
					inert={!isOpen}
					className={clsx(
						"overflow-hidden transition-[max-height] duration-300 ease-in-out",
						isOpen ? "max-h-75" : "max-h-0",
					)}
				>
					{navItems.map(({ path, name }, index) => (
						<li
							key={path}
							className={clsx(
								"transition duration-300 ease-out",
								isOpen
									? "translate-y-0 opacity-100"
									: "-translate-y-2.5 opacity-0",
							)}
							style={{ transitionDelay: isOpen ? `${index * 0.05}s` : "0s" }}
						>
							<Link
								to={path}
								onClick={onClose}
								activeOptions={{ exact: true }}
								className="block py-2.5 text-sm font-medium text-fg-muted transition-colors hover:text-fg-highlighted data-[status=active]:text-fg-highlighted"
							>
								{name}
							</Link>
						</li>
					))}
					<li aria-hidden="true" className="h-2" />
				</ul>
			</nav>
		</div>
	);
}
