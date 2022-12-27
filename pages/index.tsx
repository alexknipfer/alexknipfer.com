import { NextPage } from 'next';
import Image from 'next/image';

import GitHubIcon from '../public/static/icons/github.svg';

import DefaultLayout from '@/components/DefaultLayout';
import Meta from '@/components/Meta';
import Heading from '@/components/Heading';
import ProjectCard from '@/components/ProjectCard';
import TechnicalSkills from '@/components/TechnicalSkills';

const projects = [
  {
    name: 'Spotify Dashboard',
    link: 'https://spotify-dashboard-alexknipfer.vercel.app',
    img: '/static/images/projects/spotify_project.jpg',
  },
  {
    name: 'Botsai',
    link: 'https://botsai.com',
    img: '/static/images/projects/botsai_project.jpg',
  },
  {
    name: 'Ascendum',
    link: 'https://ascendum.com',
    img: '/static/images/projects/ascendum_project.jpg',
  },
  {
    name: 'NPM Slackbot',
    link: 'https://github.com/alexknipfer/npm-bot',
    img: '/static/images/projects/npm_bot_project.jpg',
  },
];

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Meta />
      <section className="mb-10 flex flex-col-reverse md:flex-row md:justify-between md:items-center">
        <div>
          <h1 className="font-bold text-black dark:text-white text-3xl md:text-4xl mb-1">
            Alexander Knipfer
          </h1>
          <h2 className=" text-black dark:text-white text-base md:text-lg">
            Full Stack Engineer at{' '}
            <span className="font-semibold">Ascendum Solutions</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-4 mr-0 md:mr-10">
            I&apos;m a developer, chess player, and a disc golfer. I am located
            in Cincinnati and currently work for Ascendum Solutions as a Full
            Stack Engineer.
          </p>
        </div>
        <div className="w-[80px] md:w-[250px] mb-4 md:mb-0">
          <Image
            src="/static/images/profile.jpeg"
            width={250}
            height={250}
            alt="Avatar image of Alex"
            className="rounded-full"
            priority
          />
        </div>
      </section>
      <section className="mb-10">
        <Heading level="h3">Projects</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-5 mb-5 mt-4">
          {projects.map((project) => (
            <ProjectCard key={project.link} {...project} />
          ))}
        </div>
        <a
          href="https://github.com/alexknipfer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 border-card-border border rounded p-5 flex items-center text-sm hover:shadow transition-shadow duration-150"
        >
          <GitHubIcon width={30} height={30} className="mr-5 fill-current" />
          Interested in seeing more? I&apos;m always tinkering with something,
          check out my GitHub!
        </a>
      </section>
      <section>
        <Heading level="h3">Technical Skills</Heading>
        <p className="text-gray-700 mb-5 dark:text-gray-300 mt-4">
          I am always expanding my technical skills, the following is a list of
          the tech I&apos;m <i>actively</i> working with!
        </p>
        <TechnicalSkills />
      </section>
    </DefaultLayout>
  );
};

export default Home;
