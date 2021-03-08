import NextImage from 'next/image';
import { useState } from 'react';
import classNames from 'classnames';

interface Props {
  name: string;
  link: string;
  img: string;
}

const ProjectCard: React.FC<Props> = ({ name, link, img }) => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  return (
    <div
      className="relative rounded-md shadow-xl"
      onMouseEnter={() => setOverlayVisible(true)}
      onMouseLeave={() => setOverlayVisible(false)}
    >
      <div
        className={classNames(
          'absolute top-0 left-0 z-10 w-full h-full flex flex-col justify-items-end transition-opacity duration-200 rounded-md bg-black bg-opacity-40',
          {
            'opacity-0': !isOverlayVisible,
            'opacity-100': isOverlayVisible,
          },
        )}
      >
        <div className="bg-black bg-opacity-70 mt-auto rounded-b-md flex items-center flex-col py-3 px-4 text-center">
          <div className="font-thin text-gray-200">{name}</div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 block w-full truncate"
          >
            {link}
          </a>
        </div>
      </div>
      <NextImage
        src={img}
        alt={`${name} Project`}
        width={400}
        height={234}
        className="rounded-md"
        priority
      />
    </div>
  );
};

export default ProjectCard;
