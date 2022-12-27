import Link from 'next/link';

import ThemeSwitchButton from '@/components/ThemeSwitchButton';
import useDisclosure from '@/lib/useDisclosure';
import MenuIcon from '@/components/MenuIcon';
import Menu from '@/components/MobileMenu';

export const navItems = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/timeline',
    name: 'Timeline',
  },
  {
    path: '/experience',
    name: 'Experience',
  },
];

export default function Nav() {
  const { onToggle, isOpen } = useDisclosure();

  return (
    <nav className="sticky top-0 z-20 max-w-screen-md mb-2 mx-auto px-6 py-2 md:p-6 bg-white dark:bg-gray-900 bg-opacity-60 nav-backdrop">
      <Menu isOpen={isOpen} />
      <div className="flex justify-between items-center w-full h-16">
        <button
          aria-label="Open navigation menu"
          className="relative z-40 md:hidden text-gray-900 dark:text-gray-200"
          onClick={onToggle}
        >
          <MenuIcon isOpen={isOpen} />
        </button>
        <div className="sm:hidden md:block">
          {navItems.map(({ path, name }) => (
            <Link key={path} href={path}>
              <a className="hidden md:inline p-4 text-base text-gray-700 dark:text-white">
                {name}
              </a>
            </Link>
          ))}
        </div>
        <ThemeSwitchButton />
      </div>
      <style jsx>{`
        .nav-backdrop {
          backdrop-filter: saturate(180%) blur(20px);
        }
      `}</style>
    </nav>
  );
}
