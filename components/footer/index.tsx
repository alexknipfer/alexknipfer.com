import NowPlaying from '../now-playing';
import LinkedInIcon from '../../public/static/icons/linkedin.svg';
import TwitterIcon from '../../public/static/icons/twitter.svg';
import GithubIcon from '../../public/static/icons/github.svg';
import InstagramIcon from '../../public/static/icons/instagram.svg';
import EmailIcon from '../../public/static/icons/email.svg';

const socialAccounts = [
  {
    link: 'https://twitter.com/knipferalex',
    icon: TwitterIcon,
  },
  {
    link: 'https://github.com/alexknipfer',
    icon: GithubIcon,
  },
  {
    link: 'https://instagram.com/alexknipfer',
    icon: InstagramIcon,
  },
  {
    link: 'https://www.linkedin.com/in/alex-knipfer-4381a6115/',
    icon: LinkedInIcon,
  },
  {
    link:
      'mailto:alexanderknipfer@gmail.com?subject=Reaching out from alexknipfer.com',
    icon: EmailIcon,
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center py-6">
      <NowPlaying />
      <div className="flex justify-around mt-4 w-64">
        {socialAccounts.map(({ link, icon }) => {
          const Icon = icon;

          return (
            <a
              key={link}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gray-100 dark:hover:bg-gray-800 p-3 rounded transition duration-300 text-gray-700 dark:text-gray-200"
            >
              <Icon width={20} height={20} className="fill-current" />
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
