import { createFileRoute } from "@tanstack/react-router";
import clsx from "clsx";

import GitHubIcon from "#/assets/icons/github.svg?react";
import { BlurIn } from "#/components/BlurIn";
import { DividerRow } from "#/components/DividerRow";
import { Marquee } from "#/components/Marquee";
import { Reveal } from "#/components/Reveal";
import { SectionHeader } from "#/components/SectionHeader";
import { TechnicalSkills } from "#/components/TechnicalSkills";
import { seo } from "#/lib/seo";

export const Route = createFileRoute("/")({
	head: () => seo({ path: "/" }),
	component: Home,
});

interface Project {
	name: string;
	link: string;
	img: string;
}

const projects: Project[] = [
	{
		name: "Spotify Dashboard",
		link: "https://spotify-dashboard-alexknipfer.vercel.app",
		img: "/static/images/projects/spotify_project.jpg",
	},
	{
		name: "Botsai",
		link: "https://botsai.com",
		img: "/static/images/projects/botsai_project.jpg",
	},
	{
		name: "Ascendum",
		link: "https://ascendum.com",
		img: "/static/images/projects/ascendum_project.jpg",
	},
	{
		name: "NPM Slackbot",
		link: "https://github.com/alexknipfer/npm-bot",
		img: "/static/images/projects/npm_bot_project.jpg",
	},
];

const displayUrl = (link: string) => link.replace(/^https?:\/\//, "");

function Home() {
	return (
		<>
			<section className="flex flex-col gap-16 py-18 sm:gap-y-24 sm:py-24 lg:py-32">
				<div className="text-center">
					<BlurIn delay={0.1} className="mb-4 flex justify-center">
						<img
							src="/static/images/profile.jpeg"
							width={72}
							height={72}
							alt="Avatar of Alex"
							className="size-18 rounded-full object-cover ring ring-line ring-offset-3 ring-offset-surface"
							fetchPriority="high"
						/>
					</BlurIn>
					<BlurIn delay={0.1}>
						<h1 className="mx-auto max-w-lg text-3xl font-bold text-pretty text-fg-highlighted text-shadow-md sm:text-4xl lg:text-5xl">
							Alexander Knipfer
						</h1>
					</BlurIn>
					<BlurIn delay={0.2}>
						<h2 className="mt-4 font-sans text-base text-fg md:text-lg">
							Full Stack Engineer at{" "}
							<span className="font-semibold text-fg-highlighted">
								Ascendum Solutions
							</span>
						</h2>
					</BlurIn>
					<BlurIn delay={0.3}>
						<p className="mx-auto mt-6 max-w-xl text-balance text-fg-muted">
							I&apos;m a developer, chess player, and a disc golfer. I am
							located in Cincinnati and currently work for Ascendum Solutions as
							a Full Stack Engineer.
						</p>
					</BlurIn>
				</div>

				<Marquee className="-mx-4 py-2 sm:-mx-6 lg:-mx-8">
					{(copyIndex) =>
						projects.map(({ name, link, img }, index) => (
							<BlurIn key={link} delay={index * 0.1}>
								<a
									href={link}
									target="_blank"
									rel="noopener noreferrer"
									tabIndex={copyIndex > 0 ? -1 : undefined}
									className={clsx(
										"group/project relative block overflow-hidden rounded-lg ring ring-line transition-transform duration-300 hover:rotate-0 hover:scale-105",
										index % 2 === 0 ? "-rotate-2" : "rotate-2",
									)}
								>
									<img
										src={img}
										alt={`${name} Project`}
										width={400}
										height={234}
										className="h-36 w-auto object-cover sm:h-44"
									/>
									<span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent px-3 pt-8 pb-2 text-left text-xs text-white opacity-0 transition-opacity duration-300 group-hover/project:opacity-100 group-focus-visible/project:opacity-100">
										<span className="block font-semibold">{name}</span>
										<span className="block truncate text-white/70">
											{displayUrl(link)}
										</span>
									</span>
								</a>
							</BlurIn>
						))
					}
				</Marquee>
			</section>

			<section className="grid gap-16 lg:grid-cols-2 lg:gap-8">
				<div className="flex min-w-0 flex-col gap-4">
					<SectionHeader title="Projects" />
					<ul className="flex flex-col gap-2">
						{projects.map(({ name, link }, index) => (
							<li key={link}>
								<Reveal delay={0.2 + 0.1 * index}>
									<a
										href={link}
										target="_blank"
										rel="noopener noreferrer"
										className="group block"
									>
										<DividerRow
											start={
												<span className="transition-colors group-hover:text-fg-highlighted">
													{name}
												</span>
											}
											end={
												<span className="truncate text-fg-dimmed transition-colors group-hover:text-fg">
													{displayUrl(link)}
												</span>
											}
										/>
									</a>
								</Reveal>
							</li>
						))}
					</ul>
					<Reveal delay={0.2 + 0.1 * projects.length}>
						<a
							href="https://github.com/alexknipfer"
							target="_blank"
							rel="noopener noreferrer"
							className="group mt-2 flex items-center gap-4 rounded-lg bg-surface-elevated/60 px-4 py-3.5 text-sm text-fg transition-colors hover:bg-surface-elevated"
						>
							<GitHubIcon
								width={24}
								height={24}
								className="shrink-0 fill-current text-fg-highlighted"
							/>
							<span className="flex-1">
								Interested in seeing more? I&apos;m always tinkering with
								something, check out my GitHub!
							</span>
							<span
								aria-hidden="true"
								className="text-primary opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
							>
								→
							</span>
						</a>
					</Reveal>
				</div>

				<div className="flex min-w-0 flex-col gap-4">
					<SectionHeader
						title="Technical Skills"
						description={
							<>
								I am always expanding my technical skills, the following is a
								list of the tech I&apos;m <i>actively</i> working with!
							</>
						}
					/>
					<TechnicalSkills />
				</div>
			</section>
		</>
	);
}
