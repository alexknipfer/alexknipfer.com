import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import MoonIcon from '../public/static/icons/moon.svg';
import SunIcon from '../public/static/icons/sun.svg';

export default function ThemeSwitchButton() {
  const { setTheme, resolvedTheme } = useTheme();
  const [isMounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDarkTheme = resolvedTheme === 'dark';
  const DarkModeSwitchIcon = isDarkTheme ? SunIcon : MoonIcon;

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDarkTheme ? 'light' : 'dark')}
      className="p-2 dark:text-gray-300 text-gray-700 bg-gray-200 dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
    >
      {isMounted && <DarkModeSwitchIcon className="fill-current" />}
    </button>
  );
}
