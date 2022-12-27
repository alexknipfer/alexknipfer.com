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
    <div className="fixed w-full h-screen top-0 left-0 bg-white bg-opacity-95 dark:bg-gray-900 dark:bg-opacity-95 z-30">
      {children}
    </div>
  );
}
