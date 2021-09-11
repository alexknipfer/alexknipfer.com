import { NextPage } from 'next';

import DefaultLayout from '@/components/DefaultLayout';
import Meta from '@/components/Meta';
import Heading from '@/components/Heading';
import TimelineStep from '@/components/TimelineStep';

interface TimelineList {
  year: number;
  timelineItems: TimelineItem[];
}

interface TimelineItem {
  name: string;
  description: string;
}

const timelineListItems: TimelineList[] = [
  {
    year: 2020,
    timelineItems: [
      {
        name: 'Quarantined 🔒',
        description:
          "What is there to say, 2020 was a year full of joy, had a blast living the quarantined life! I was able to spend the summer focusing on my disc golf game, it's a great social distancing sport!",
      },
    ],
  },
  {
    year: 2019,
    timelineItems: [
      {
        name: 'Moved to Cincinnati, OH 📦',
        description:
          'I grew up in the Northern Kentucky greater Cincinnati area, I decided to move back to be closer to my family. The company I work for is already headquarted in Cincinnati, so everything just fell into place!',
      },
    ],
  },
  {
    year: 2018,
    timelineItems: [
      {
        name: 'Joined Ascendum Solutions 𝌣',
        description:
          "I'm excited to work on a team that get's to work on a diverse set of projects with bleeding edge technologies!",
      },
    ],
  },
  {
    year: 2017,
    timelineItems: [
      {
        name: 'Graduated College',
        description:
          'I graduated from Lindenwood University with a degree in computer science. This was a major accomplishment, I worked hard for this degree and did very well in school!',
      },
      {
        name: 'Started at Hoperator',
        description:
          'Began my first full time position as a Full Stack Developer at a small startup. I wore many hats and worked heavily with React, NodeJS, and Socket IO building a real time chat platform!',
      },
    ],
  },
  {
    year: 2015,
    timelineItems: [
      {
        name: 'Started part time tutoring for Chegg.com',
        description:
          'I was an online math and computer science tutor and had the opportunity to teach students around the world in a virtual environment.',
      },
    ],
  },
  {
    year: 2014,
    timelineItems: [
      {
        name: 'Joined the St. Louis Chess Club ♛',
        description:
          'I really started enjoying the game of chess so I decided to join one of the best chess clubs in the US',
      },
      {
        name: 'Worked at Cedar Point for the summer 🎢',
        description:
          'I had to fulfill my love for roller coasters while I had the chance, I moved to Sandusky, OH and worked at the best amusement park in the world. It was one of the best summers of my life!',
      },
    ],
  },
  {
    year: 2012,
    timelineItems: [
      {
        name: 'Started at Target 🎯',
        description:
          'I worked at Target for 6 years, it was a great job to have during college and I even continued working there on the weekends after beginning my career after college.',
      },
    ],
  },
  {
    year: 2011,
    timelineItems: [
      {
        name: 'Graduated High School 🎓',
        description:
          'I graduated from Fort Zumwalt West High School, a large public school just outside of St. Louis.',
      },
      {
        name: 'Began attending college at a local community college 🏫',
        description:
          "When I graduated high school I wasn't sure what I wanted to study so I opted to begin my first two years at a local community college. I always had the passion for roller coasters and computers, so I knew I either wanted to study computer science or architectural engineering.",
      },
      {
        name: 'Started my first job at Chick-Fil-A 🐓',
        description: "Not too much to say here, who doesn't like Chick-Fil-A?",
      },
      {
        name: 'Launched my first website 🚀',
        description:
          'I launched my first website and forum called GamerFreaks. I built an awesome and fun gaming community with over 1500 members!',
      },
    ],
  },
  {
    year: 2008,
    timelineItems: [
      {
        name: 'Moved to Tokyo 🇯🇵',
        description:
          'My family relocated to Tokyo for one year where I attended "The American School in Japan" (I know, a very original name) for my sophomore year of high school. But, it was a great school with a very challenging curriculum and an experience I\'ll never forget.',
      },
    ],
  },
  {
    year: 2005,
    timelineItems: [
      {
        name: 'Moved to St. Louis 📦',
        description:
          "I moved to O'Fallon, MO, a small city located thirty miles west of St. Louis. This is when I officially became a Cardinals fan. Go Cardinals! ⚾️",
      },
    ],
  },
  {
    year: 1993,
    timelineItems: [
      {
        name: 'Landed on Planet Earth 🌎',
        description:
          'Born as Alexander Knipfer in the great state of Kentucky.',
      },
    ],
  },
];

const Timeline: NextPage = () => {
  return (
    <DefaultLayout>
      <Meta />
      <section>
        <Heading level="h1">Timeline</Heading>
        {timelineListItems.map(({ year, timelineItems }) => (
          <div
            key={year}
            className="border-b border-gray-200 dark:border-gray-600 last:border-0 mb-6 pb-10"
          >
            <Heading level="h2" className="mb-4">
              {year}
            </Heading>
            <ul className="list-none">
              {timelineItems.map((item) => (
                <TimelineStep key={item.name} {...item} />
              ))}
            </ul>
          </div>
        ))}
      </section>
    </DefaultLayout>
  );
};

export default Timeline;
