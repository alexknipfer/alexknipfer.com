import { Heading } from "#/components/Heading";

interface Props {
	title: string;
	description?: React.ReactNode;
}

export function SectionHeader({ title, description }: Props) {
	return (
		<div>
			<Heading level="h2">{title}</Heading>
			{description && (
				<p className="mt-2 text-sm text-balance text-fg-muted">{description}</p>
			)}
		</div>
	);
}
