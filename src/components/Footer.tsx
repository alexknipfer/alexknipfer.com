import EmailIcon from "#/assets/icons/email.svg?react";
import GithubIcon from "#/assets/icons/github.svg?react";
import InstagramIcon from "#/assets/icons/instagram.svg?react";
import LinkedInIcon from "#/assets/icons/linkedin.svg?react";
import TwitterIcon from "#/assets/icons/twitter.svg?react";
import { NowPlaying } from "#/components/NowPlaying";

const socialAccounts = [
	{
		link: "https://twitter.com/knipferalex",
		icon: TwitterIcon,
		label: "Alex Knipfer's Twitter profile",
	},
	{
		link: "https://github.com/alexknipfer",
		icon: GithubIcon,
		label: "Alex Knipfer's GitHub profile",
	},
	{
		link: "https://instagram.com/alexknipfer",
		icon: InstagramIcon,
		label: "Alex Knipfer's Instagram profile",
	},
	{
		link: "https://www.linkedin.com/in/alex-knipfer-4381a6115/",
		icon: LinkedInIcon,
		label: "Alex Knipfer's LinkedIn profile",
	},
	{
		link: "mailto:alexanderknipfer@gmail.com?subject=Reaching out from alexknipfer.com",
		icon: EmailIcon,
		label: "Send email to alexanderknipfer@gmail.com",
	},
];

export function Footer() {
	return (
		<footer className="-mx-4 flex flex-col items-center gap-4 border-t border-line px-4 py-8 sm:-mx-6 sm:px-6 lg:-mx-8 lg:flex-row lg:justify-between lg:px-8 lg:py-4">
			<NowPlaying />
			<div className="flex items-center gap-1">
				{socialAccounts.map(({ link, icon: Icon, label }) => (
					<a
						key={link}
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={label}
						className="rounded-md p-2 text-fg-muted transition-colors hover:bg-surface-elevated hover:text-fg-highlighted"
					>
						<Icon width={18} height={18} className="fill-current" />
					</a>
				))}
			</div>
		</footer>
	);
}
