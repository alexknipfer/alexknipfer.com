import Link from 'next/link';

type NavItemType = 'internal' | 'external';

type NavItem = {
  name: string;
  type: NavItemType;
  href: string;
};

const navItems: Array<NavItem> = [
  {
    name: 'Home',
    type: 'internal',
    href: '/',
  },
  {
    name: 'GitHub',
    type: 'external',
    href: 'https://github.com/alexknipfer',
  },
];

export function Nav() {
  return (
    <nav className="fixed top-0 flex w-full gap-1 p-3">
      {navItems.map(({ name, type, href }) =>
        type === 'internal' ? (
          <Link
            key={name}
            href={'/'}
            className="bg-gray-300/40 px-2 py-1 font-geist-mono text-xs font-light uppercase backdrop-blur-md hover:bg-sky-400"
          >
            {name}
          </Link>
        ) : (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-300/40 px-2 py-1 font-geist-mono text-xs font-light uppercase backdrop-blur-md hover:bg-sky-400"
          >
            {name}
          </a>
        ),
      )}
    </nav>
  );
}
