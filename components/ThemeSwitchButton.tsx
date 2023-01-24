import { useTheme } from 'next-themes';
import { useCallback, useEffect, useState } from 'react';

import MoonIcon from '../public/static/icons/moon.svg';
import SunIcon from '../public/static/icons/sun.svg';

export default function ThemeSwitchButton() {
  const { setTheme, resolvedTheme } = useTheme();
  const [isMounted, setMounted] = useState(false);

  const isDarkTheme = resolvedTheme === 'dark';
  const DarkModeSwitchIcon = isDarkTheme ? SunIcon : MoonIcon;

  const setThemeContentMeta = useCallback((color: string) => {
    document
      .querySelector("meta[name='theme-color']")
      .setAttribute('content', color);
  }, []);

  useEffect(() => {
    setMounted(true);
    // setThemeContentMeta(isDarkTheme ? '#18181b' : '#ffffff');
  }, [setThemeContentMeta, isDarkTheme]);

  // useEffect(() => {
  //   document
  //     .querySelector("meta[name='theme-color']")
  //     .setAttribute('content', isDarkTheme ? '#18181b' : '#ffffff');
  // }, []);

  const handleThemeChange = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
    setThemeContentMeta(isDarkTheme ? '#ffffff' : '#18181b');
  };

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={handleThemeChange}
      className="p-2 dark:text-gray-300 text-gray-700 bg-gray-200 dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
    >
      {isMounted && <DarkModeSwitchIcon className="fill-current" />}
    </button>
  );
}
