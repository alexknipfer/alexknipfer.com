import { createFileRoute } from "@tanstack/react-router";

import {
	ExperienceDetails,
	type ExperienceDetailsProps,
} from "#/components/ExperienceDetails";
import { PageHeader } from "#/components/PageHeader";
import { SectionHeader } from "#/components/SectionHeader";
import { seo } from "#/lib/seo";

export const Route = createFileRoute("/experience")({
	head: () => seo({ path: "/experience" }),
	component: Experience,
});

const jobItems: ExperienceDetailsProps[] = [
	{
		organizationName: "Ascendum",
		timeframe: "May 2018 - Present",
		websiteUrl: "https://ascendum.com",
		title: "Full Stack Engineer",
		listItems: [
			"Write performant and maintainable code for multiple internal products and a diverse set of clients.",
			"Work with a variety of technogies and content management systems including, but not limited to, React, Angular, TypeScript, JavaScript, Prismic, and Fastify.",
			"Daily communication with teams of engineers, designers, product owners, and clients.",
			"Provide mentoring to new software engineers.",
		],
	},
	{
		organizationName: "Hoperator",
		timeframe: "June 2017 - May 2018",
		websiteUrl: "https://hoperator.com",
		title: "Full Stack Engineer",
		listItems: [
			"Developed live chat and messaging software for hotels and hostels.",
			"Object-oriented and MVC design patterns with JavaScript.",
			"Developed RESTful backend services in NodeJS and Express.",
			"Built a scalable realtime chat platform leveraging Socket.IO.",
		],
	},
];

const educationDetails: ExperienceDetailsProps = {
	organizationName: "Lindenwood University",
	timeframe: "Class of 2017",
	websiteUrl: "https://lindenwood.edu",
	title: "Computer Science",
	listItems: [
		"GPA: 3.6",
		"Awards / Achievements: Deans List",
		"My curriculum comprised of courses like Assembly Language Programming, Database Systems, Data Structures and Algorithms, Computer Architecture, Algorithms in Compiler Construction, and UI Design.",
	],
};

function Experience() {
	return (
		<>
			<PageHeader
				title="Experience"
				description={
					<>
						Curious to hear more about my experience? You&apos;re in the right
						place! I graduated with a degree in Computer Science in 2017,
						I&apos;ve had the opportunity to work at some awesome places since
						then!
					</>
				}
			/>
			<section className="mb-16 flex flex-col gap-4">
				<SectionHeader title="Where I've Worked" />
				{jobItems.map((jobItem) => (
					<ExperienceDetails key={jobItem.organizationName} {...jobItem} />
				))}
			</section>
			<section className="flex flex-col gap-4">
				<SectionHeader title="Education" />
				<ExperienceDetails {...educationDetails} />
			</section>
		</>
	);
}
