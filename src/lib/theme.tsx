import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";

/*
 * Minimal replacement for `next-themes` (`<ThemeProvider attribute="class">`).
 * Same storage key ("theme") and values, so returning visitors keep their
 * preference. `system` is the default and follows `prefers-color-scheme`.
 */
export type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

const STORAGE_KEY = "theme";
const MEDIA = "(prefers-color-scheme: dark)";

// Runs before hydration (inlined in <head>) to avoid a flash of the wrong theme.
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('${STORAGE_KEY}');var d=document.documentElement;var r=(t==='light'||t==='dark')?t:(window.matchMedia('${MEDIA}').matches?'dark':'light');d.classList.remove('light','dark');d.classList.add(r);d.style.colorScheme=r;}catch(e){}})();`;

function readStoredTheme(): Theme {
	try {
		const stored = window.localStorage.getItem(STORAGE_KEY);
		if (stored === "light" || stored === "dark") return stored;
	} catch {}
	return "system";
}

function resolve(theme: Theme): ResolvedTheme {
	if (theme !== "system") return theme;
	return window.matchMedia(MEDIA).matches ? "dark" : "light";
}

function apply(resolved: ResolvedTheme) {
	const root = document.documentElement;
	root.classList.remove("light", "dark");
	root.classList.add(resolved);
	root.style.colorScheme = resolved;
}

interface ThemeContextValue {
	theme: Theme;
	resolvedTheme: ResolvedTheme | undefined;
	setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setThemeState] = useState<Theme>("system");
	// Unknown during SSR; set after mount (mirrors next-themes' behaviour).
	const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>();

	useEffect(() => {
		const initial = readStoredTheme();
		setThemeState(initial);
		setResolvedTheme(resolve(initial));
	}, []);

	useEffect(() => {
		if (theme !== "system") return;
		const media = window.matchMedia(MEDIA);
		const onChange = () => {
			const next = resolve("system");
			apply(next);
			setResolvedTheme(next);
		};
		media.addEventListener("change", onChange);
		return () => media.removeEventListener("change", onChange);
	}, [theme]);

	const setTheme = useCallback((next: Theme) => {
		try {
			window.localStorage.setItem(STORAGE_KEY, next);
		} catch {}
		const resolved = resolve(next);
		apply(resolved);
		setThemeState(next);
		setResolvedTheme(resolved);
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) throw new Error("useTheme must be used within ThemeProvider");
	return context;
}
