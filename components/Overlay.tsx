import { PropsWithChildren } from 'react';

interface Props {
  isVisible: boolean;
}

export default function Overlay({
  children,
  isVisible,
}: PropsWithChildren<Props>) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-white/75 dark:bg-zinc-900/75 backdrop-blur z-30">
      {children}
    </div>
  );
}
