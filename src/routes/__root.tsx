import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import {
	createRootRouteWithContext,
	HeadContent,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { Analytics } from "@vercel/analytics/react";

import { Footer } from "#/components/Footer";
import { Nav } from "#/components/Nav";
import { THEME_INIT_SCRIPT, ThemeProvider } from "#/lib/theme";
import appCss from "../styles.css?url";

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient;
}>()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content:
					"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
			},
			{ name: "msapplication-TileColor", content: "#da532c" },
			{ name: "theme-color", content: "#18181b" },
		],
		links: [
			{ rel: "stylesheet", href: appCss },
			{ rel: "shortcut icon", href: "/static/favicons/favicon.ico" },
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/static/favicons/apple-touch-icon.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/static/favicons/favicon-32x32.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/static/favicons/favicon-16x16.png",
			},
			{ rel: "manifest", href: "/static/favicons/site.webmanifest" },
			{
				rel: "mask-icon",
				href: "/static/favicons/safari-pinned-tab.svg",
				color: "#5bbad5",
			},
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: static theme bootstrap script, avoids flash of incorrect theme */}
				<script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
				<HeadContent />
			</head>
			<body className="min-h-screen bg-surface font-sans text-fg antialiased">
				<noscript>
					<style>
						{"[data-reveal]{opacity:1!important;transform:none!important}"}
					</style>
				</noscript>
				<ThemeProvider>
					<Nav />
					<div className="isolate mx-auto flex min-h-screen w-full max-w-4xl flex-col border-line px-4 pt-14 sm:border-x sm:px-6 lg:px-8">
						<main className="flex-1 pb-16 sm:pb-24">{children}</main>
						<Footer />
					</div>
				</ThemeProvider>
				<Analytics />
				<TanStackDevtools
					config={{ position: "bottom-right" }}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
						{
							name: "Tanstack Query",
							render: <ReactQueryDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
