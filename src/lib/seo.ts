import { SITE_URL } from "#/lib/site";

interface SeoOptions {
	path: string;
	title?: string;
	description?: string;
	image?: string;
	type?: string;
}

export function seo({
	path,
	title = "Alex Knipfer - Full Stack Developer from Cincinnati.",
	description = "Full stack developer, chess player, and disc golfer.",
	image = `${SITE_URL}/static/images/banner.jpg`,
	type = "website",
}: SeoOptions) {
	const url = `${SITE_URL}${path}`;

	return {
		meta: [
			{ title },
			{ name: "description", content: description },
			{ name: "og:title", content: title },
			{ property: "og:url", content: url },
			{ property: "og:type", content: type },
			{ property: "og:site_name", content: "Alex Knipfer" },
			{ property: "og:description", content: description },
			{ property: "og:title", content: title },
			{ property: "og:image", content: image },
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:site", content: "@knipferalex" },
			{ name: "twitter:title", content: title },
			{ name: "twitter:description", content: description },
			{ name: "twitter:image", content: image },
		],
		links: [{ rel: "canonical", href: url }],
	};
}
