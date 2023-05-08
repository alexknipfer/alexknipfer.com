'use client';

import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [isDarkMode, setDarkMode] = useState(false);

  const handleChange = (e: MediaQueryListEvent) => {
    setDarkMode(!!e.matches);
  };

  useEffect(() => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');

    setDarkMode(matchMedia.matches);
    matchMedia.addEventListener('change', handleChange);

    return () => matchMedia.removeEventListener('change', handleChange);
  }, []);

  return isDarkMode;
}
