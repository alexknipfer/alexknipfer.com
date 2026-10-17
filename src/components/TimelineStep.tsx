import { Reveal } from "#/components/Reveal";

interface Props {
	name: string;
	description: string;
	index?: number;
}

export function TimelineStep({ name, description, index = 0 }: Props) {
	return (
		<li>
			<Reveal
				delay={0.1 + 0.1 * index}
				className="relative border-l border-line pl-5"
			>
				<span
					aria-hidden="true"
					className="absolute top-1.5 -left-[4.5px] size-2 rounded-full bg-primary ring-4 ring-surface"
				/>
				<h3 className="text-base font-semibold text-fg-highlighted">{name}</h3>
				<p className="mt-1 text-sm leading-relaxed text-fg-muted">
					{description}
				</p>
			</Reveal>
		</li>
	);
}
