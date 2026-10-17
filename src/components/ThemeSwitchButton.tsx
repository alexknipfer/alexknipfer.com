import { useHydrated } from "@tanstack/react-router";

import MoonIcon from "#/assets/icons/moon.svg?react";
import SunIcon from "#/assets/icons/sun.svg?react";
import { useTheme } from "#/lib/theme";

export function ThemeSwitchButton() {
	const { setTheme, resolvedTheme } = useTheme();
	const isHydrated = useHydrated();

	const isDarkTheme = resolvedTheme === "dark";
	const DarkModeSwitchIcon = isDarkTheme ? SunIcon : MoonIcon;

	return (
		<button
			type="button"
			aria-label="Toggle dark mode"
			onClick={() => setTheme(isDarkTheme ? "light" : "dark")}
			className="rounded-full p-1.5 text-fg transition-colors hover:bg-surface-elevated focus-visible:bg-surface-elevated focus-visible:outline-hidden"
		>
			{isHydrated && resolvedTheme ? (
				<DarkModeSwitchIcon
					key={resolvedTheme}
					className="size-4 animate-blur-in fill-current"
				/>
			) : (
				<span className="block size-4" />
			)}
		</button>
	);
}
