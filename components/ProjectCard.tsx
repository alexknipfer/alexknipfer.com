import NextImage from 'next/image';
import classNames from 'classnames';

import useDisclosure from '@/lib/useDisclosure';

interface Props {
  name: string;
  link: string;
  img: string;
  gradient: string;
}

export default function ProjectCard({ name, link, img, gradient }: Props) {
  const { onClose, onOpen, isOpen } = useDisclosure();

  return (
    <div
      className={`relative rounded-md shadow-xl bg-gradient-to-r p-1 ${gradient}`}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <div
        className={classNames(
          'absolute top-0 left-0 z-10 w-full h-full flex flex-col justify-items-end transition-opacity duration-200 rounded-md bg-black bg-opacity-40',
          {
            'opacity-0': !isOpen,
            'opacity-100': isOpen,
          },
        )}
      >
        <div className="bg-black bg-opacity-70 mt-auto rounded-b-md flex items-center flex-col py-3 px-4 text-center">
          <div className="font-thin text-gray-300">{name}</div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 block w-full truncate"
            onFocus={onOpen}
            onBlur={onClose}
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
}
