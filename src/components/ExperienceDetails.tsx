import Anchor from "#/components/Anchor";
import Heading from "#/components/Heading";
import List from "#/components/List";
import Reveal from "#/components/Reveal";

export interface ExperienceDetailsProps {
	organizationName: string;
	timeframe: string;
	websiteUrl: string;
	title: string;
	listItems: string[];
}

export default function ExperienceDetails({
	organizationName,
	timeframe,
	websiteUrl,
	title,
	listItems,
}: ExperienceDetailsProps) {
	return (
		<Reveal className="rounded-lg bg-surface-elevated/60 p-5 sm:p-6">
			<p className="text-xs text-fg-muted">{timeframe}</p>
			<Heading level="h3" className="mt-2 mb-4">
				{title}&nbsp;@&nbsp;
				<Anchor href={websiteUrl}>{organizationName}</Anchor>
			</Heading>
			<List listItems={listItems} />
		</Reveal>
	);
}
