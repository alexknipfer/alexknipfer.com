import useSWR from 'swr';

import { NowPlayingResponse } from '../pages/api/now-playing';

export const useNowPlaying = () => {
  const { data, error } = useSWR<NowPlayingResponse>('/api/now-playing');

  const isLoading = !data && !error;
  const isPlaying = data && data.attributes;

  return { data, isLoading, isPlaying };
};
