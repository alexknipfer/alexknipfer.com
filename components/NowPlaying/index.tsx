import Image from 'next/image';

import useNowPlaying from '@/lib/useNowPlaying';

const NowPlaying: React.FC = () => {
  const { isPlaying, isLoading, data } = useNowPlaying();

  if (isLoading) {
    return (
      <div className="relative animate-pulse border border-card-border rounded-md flex items-center w-64 p-3 shadow">
        <div className="bg-gray-200 dark:bg-gray-600 h-14 w-14 rounded mr-4"></div>
        <div className="bg-gray-200 dark:bg-gray-600 absolute top-2 right-2 h-3.5 w-3.5 rounded-full"></div>
        <div className="w-3/4">
          <div className="h-4 w-2/5 bg-gray-200 dark:bg-gray-600 mb-2"></div>
          <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-600"></div>
        </div>
      </div>
    );
  }

  return (
    <article className="relative border border-card-border rounded-md flex items-center w-64 p-3 shadow">
      <div className="flex justify-center items-center h-14">
        {isPlaying ? (
          <Image
            src={data.attributes.albumImage}
            width={55}
            height={55}
            className="rounded block"
            alt={`Spotify album cover for ${data.attributes.artists}`}
          />
        ) : (
          <Image
            src="/static/images/spotify.png"
            width={30}
            height={30}
            alt="Spotify music logo"
          />
        )}
      </div>
      {isPlaying && (
        <img
          src="/static/images/spotify.png"
          width={15}
          height={15}
          className="absolute top-2 right-2"
          alt="Spotify music logo"
        />
      )}
      <div className="w-3/4 pl-4 text-gray-700 dark:text-gray-400">
        {isPlaying ? (
          <a
            href={data.attributes.songUrl}
            target="_blank"
            rel="noreferrer"
            className="font-bold truncate block hover:underline text-sm"
          >
            {data.attributes.songName}
          </a>
        ) : (
          'Spotify'
        )}
        <div className="truncate text-gray-700 dark:text-gray-400">
          {isPlaying ? data.attributes.artists : 'Not currently playing'}
        </div>
      </div>
    </article>
  );
};

export default NowPlaying;
