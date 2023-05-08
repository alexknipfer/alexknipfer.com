'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

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
  const currentPathname = usePathname();

  return (
    <nav className="sticky top-0 z-20 max-w-screen-md mb-2 mx-auto px-6 py-2 md:p-6 backdrop-blur supports-backdrop-blur:bg-white/95 bg-white/75 dark:bg-zinc-900/75">
      <Menu isOpen={isOpen} />
      <div className="flex justify-between items-center w-full h-16">
        <button
          aria-label="Open navigation menu"
          className="relative z-40 md:hidden text-gray-900 dark:text-gray-300"
          onClick={onToggle}
        >
          <MenuIcon isOpen={isOpen} />
        </button>
        <div className="sm:hidden md:flex">
          {navItems.map(({ path, name }) => (
            <Link
              className={classNames(
                'hidden md:inline mr-8 text-base text-gray-700 dark:text-white',
                {
                  'underline underline-offset-8 decoration-1 decoration-dotted':
                    currentPathname === path,
                },
              )}
              key={path}
              href={path}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
