import classNames from 'classnames';
import { useTheme } from 'next-themes';

interface AnchorProps {
  isExternal?: boolean;
  hasAnimation?: boolean;
}

type Props = AnchorProps & React.HTMLProps<HTMLAnchorElement>;

const Anchor: React.FC<Props> = ({
  children,
  isExternal = true,
  hasAnimation = true,
  ...anchorProps
}) => {
  const { theme } = useTheme();

  return (
    <a
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? 'noreferrer noopener' : ''}
      className={classNames('text-blue-700 dark:text-blue-400 relative', {
        'link-animation': hasAnimation,
      })}
      {...anchorProps}
    >
      {children}
      <style jsx>{`
        .link-animation:after {
          border-radius: 1px;
          border-top: 1px solid ${theme === 'dark' ? '#60A5FA' : '#1d4ed8'};
          content: '';
          position: absolute;
          right: 100%;
          bottom: 0em;
          left: 0;
          transition: right 0.8s cubic-bezier(0, 0.5, 0, 1);
        }

        .link-animation:hover:after {
          right: 0;
        }
      `}</style>
    </a>
  );
};

export default Anchor;
