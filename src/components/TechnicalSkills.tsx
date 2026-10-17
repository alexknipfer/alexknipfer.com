import AngularIcon from "#/assets/icons/angular.svg?react";
import GraphQLIcon from "#/assets/icons/graphql.svg?react";
import JavaScriptIcon from "#/assets/icons/javascript.svg?react";
import NextIcon from "#/assets/icons/nextjs.svg?react";
import NodeIcon from "#/assets/icons/nodejs.svg?react";
import ReactIcon from "#/assets/icons/react.svg?react";
import { DividerRow } from "#/components/DividerRow";
import { Reveal } from "#/components/Reveal";

const technicalSkills = [
	{ name: "TypeScript & JavaScript", icon: JavaScriptIcon },
	{ name: "React", icon: ReactIcon },
	{ name: "Angular", icon: AngularIcon },
	{ name: "NextJS", icon: NextIcon },
	{ name: "NodeJS", icon: NodeIcon },
	{ name: "GraphQL", icon: GraphQLIcon },
];

export function TechnicalSkills() {
	return (
		<ul className="flex flex-col gap-2">
			{technicalSkills.map(({ icon: Icon, name }, index) => (
				<li key={name} className="group">
					<Reveal delay={0.4 + 0.1 * index}>
						<DividerRow
							start={name}
							end={
								<Icon
									width={18}
									height={18}
									aria-hidden="true"
									className="fill-current text-fg-dimmed transition-colors group-hover:text-fg-highlighted"
								/>
							}
						/>
					</Reveal>
				</li>
			))}
		</ul>
	);
}
