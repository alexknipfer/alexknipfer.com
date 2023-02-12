const loadEnvironmentVariable = (key: string): string => {
  const isOnServer = typeof window === 'undefined';
  const envVariable = process.env[key];

  if (!envVariable && isOnServer) {
    throw new Error(`Must configure ${key} environment variable.`);
  }

  return envVariable;
};

export const appConfig = {
  spotify: {
    clientId: loadEnvironmentVariable('SPOTIFY_CLIENT_ID'),
    clientSecret: loadEnvironmentVariable('SPOTIFY_CLIENT_SECRET'),
    refreshToken: loadEnvironmentVariable('SPOTIFY_REFRESH_TOKEN'),
  },
};
