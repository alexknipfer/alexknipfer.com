import { useTrail, animated } from 'react-spring';
import Link from 'next/link';

import Overlay from '@/components/Overlay';
import { navItems } from '@/components/Nav';

interface Props {
  isOpen: boolean;
}

export default function Menu({ isOpen }: Props) {
  const navItemsTrail = useTrail(navItems.length, {
    opacity: isOpen ? 1 : 0,
    marginLeft: isOpen ? 20 : -100,
    transform: isOpen ? 'translate3d(0,0px,0)' : 'translate3d(0,-40px,0)',
    from: { marginLeft: -100, opacity: 0, transform: 'translate3d(0,-40px,0)' },
  });

  return (
    <Overlay isVisible={isOpen}>
      <div className="flex flex-col py-24 px-16">
        {navItemsTrail.map((props, index) => (
          <animated.div
            key={navItems[index].path}
            style={{ marginBottom: 27, ...props }}
          >
            <Link href={navItems[index].path}>
              <a className="text-3xl text-black dark:text-gray-200 uppercase border-l border-solid border-black dark:border-gray-200 pl-4">
                {navItems[index].name}
              </a>
            </Link>
          </animated.div>
        ))}
      </div>
    </Overlay>
  );
}
