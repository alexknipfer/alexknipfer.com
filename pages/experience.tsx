import DefaultLayout from '@/components/default-layout';
import Heading from '@/components/heading';
import { NextPage } from 'next';
import Meta from '@/components/meta';
import ExperienceDetails from '@/components/experience-details';

const jobItems = [
  {
    organizationName: 'Ascendum',
    timeframe: 'May 2018 - Present',
    websiteUrl: 'https://ascendum.com',
    title: 'Full Stack Engineer',
    listItems: [
      'Write performant and maintainable code for multiple internal products and a large diverse set of clients.',
      'Work with a variety of technogies and content management systems including, but not limited to, React, Angular, TypeScript, JavaScript, Prismic, and Fastify.',
      'Daily communication with teams of engineers, designers, product owners, and clients.',
      'Provide mentoring to new software engineers.',
    ],
  },
  {
    organizationName: 'Hoperator',
    timeframe: 'June 2017 - May 2018',
    websiteUrl: 'https://hoperator.com',
    title: 'Full Stack Engineer',
    listItems: [
      'Developed live chat and messaging software for hotels and hostels.',
      'Object-oriented and MVC design patterns with JavaScript.',
      'Developed RESTful backend services in NodeJS and Express.',
      'Built a scalable realtime chat platform leveraging Socket.IO.',
    ],
  },
];

const educationDetails = {
  organizationName: 'Lindenwood University',
  timeframe: 'Class of 2017',
  websiteUrl: 'https://lindenwood.edu',
  title: 'Computer Science',
  listItems: [
    'GPA: 3.6',
    'Awards / Achievements: Deans List',
    'My curriculum comprised of courses like Assembly Language Programming, Database Systems, Data Structures and Algorithms, Computer Architecture, Algorithms in Compiler Construction, and UI Design.',
  ],
};

const Experience: NextPage = () => {
  return (
    <DefaultLayout>
      <Meta />
      <Heading level="h1">Experience</Heading>
      <p className="text-gray-700 dark:text-gray-200 mb-10">
        Curious to hear more about my experience? You&apos;re in the right
        place! I graduated with a degree in Computer Science in 2017, I&apos;ve
        had the opportunity to work at some awesome places since then!
      </p>
      <section className="mb-10">
        <Heading level="h2" className="mb-4">
          Where I&apos;ve Worked
        </Heading>
        {jobItems.map((jobItem, index) => (
          <ExperienceDetails
            key={`${jobItem.organizationName}-${index}`}
            {...jobItem}
          />
        ))}
      </section>
      <section>
        <Heading level="h2" className="mb-4">
          Education
        </Heading>
        <ExperienceDetails {...educationDetails} />
      </section>
    </DefaultLayout>
  );
};

export default Experience;
