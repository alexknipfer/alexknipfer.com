import { createFileRoute } from "@tanstack/react-router";

import { navItems, SITE_URL } from "#/lib/site";

// Replaces legacy scripts/generate-sitemap.mjs (postbuild static file).
export const Route = createFileRoute("/sitemap.xml")({
	server: {
		handlers: {
			GET: () => {
				const urls = navItems
					.map(
						({ path }) =>
							`  <url>\n    <loc>${SITE_URL}${path === "/" ? "" : path}</loc>\n  </url>`,
					)
					.join("\n");

				return new Response(
					`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
					{
						headers: {
							"Content-Type": "application/xml",
							"Cache-Control": "public, max-age=3600",
						},
					},
				);
			},
		},
	},
});
