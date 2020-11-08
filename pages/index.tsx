import { GetStaticProps } from 'next';
import { gql } from '@apollo/client';

import DefaultLayout from '../components/default-layout';
import Meta from '../components/meta';
import { initializeApollo } from '../lib/apolloClient';
import Heading from '../components/heading';
import ProjectCard from '../components/project-card';
import GitHubIcon from '../public/static/icons/github.svg';

const HOMEPAGE_QUERY = gql`
  query {
    homepage(uid: "homepage", lang: "en-us") {
      profile_image
    }
  }
`;

const projects = [
  {
    name: 'Botsai',
    link: 'https://botsai.com',
    img: '/static/images/projects/botsai_project.png',
  },
  {
    name: 'Ascendum',
    link: 'https://ascendum.com',
    img: '/static/images/projects/ascendum_project.png',
  },
  {
    name: 'NPM Slackbot',
    link: 'https://github.com/alexknipfer/npm-bot',
    img: '/static/images/projects/npm_bot_project.png',
  },
  {
    name: 'Wanna see more?',
    link: 'https://github.com/alexknipfer',
    img: '/static/images/projects/github_project.png',
  },
];

const Home = () => {
  return (
    <DefaultLayout>
      <Meta
        title="Alex Knipfer - Full Stack Developer from Cincinnati"
        description="Alex Knipfer - Specializes in building web applications using tools such as React, Redux, Angular, GraphQL, MongoDB, and more. When I am not working, you will find me working and contributing to multiple open source projects (GitHub: github.com/alexknipfer) or getting some late night chess games in on Chess.com!"
        url="https://alexknipfer.com"
      />
      <section className="mb-10">
        <Heading level="h1">Hello, I&apos;m Alex Knipfer</Heading>
        <p className="text-copy-body">
          I&apos;m a developer, chess player, and a disc golfer. I am located in
          Cincinnati and currently work for Ascendum Solutions as a Full Stack
          Engineer.
        </p>
      </section>
      <section>
        <Heading level="h2">Projects</Heading>
        <div className="grid grid-cols-2 auto-rows-auto gap-5 mb-5">
          {projects.map((project) => (
            <ProjectCard key={project.link} {...project} />
          ))}
        </div>
        <a
          href="https://github.com/alexknipfer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border-card-border border rounded p-5 flex items-center text-sm hover:shadow-card-shadow transition-shadow duration-150">
            <GitHubIcon width={30} height={30} className="mr-5" />
            Interested in seeing more? I&apos;m always tinkering with something,
            check out my GitHub!
          </div>
        </a>
      </section>
    </DefaultLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: HOMEPAGE_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};

export default Home;
