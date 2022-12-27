import classNames from 'classnames';
import { PropsWithChildren } from 'react';

interface Props {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

export default function Header({
  level,
  children,
  className,
}: PropsWithChildren<Props>) {
  const Tag = level;

  return (
    <Tag
      className={classNames(
        `font-bold text-black dark:text-white ${className}`,
        {
          'text-3xl md:text-4xl mb-4': level === 'h1',
          'text-2xl md:text-3xl': level === 'h2',
          'text-lg md:text-xl': level === 'h3',
          'text-md md:text-lg': level === 'h4',
        },
      )}
    >
      {children}
    </Tag>
  );
}
