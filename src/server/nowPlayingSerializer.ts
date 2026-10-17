import type { NowPlayingResponse } from "#/server/nowPlaying.types";
import type { SpotifyNowPlayingResponse } from "#/server/spotify.types";

export function serialize(
	spotifyNowPlayingResponse: SpotifyNowPlayingResponse,
): NowPlayingResponse {
	const { id, name, artists, album, external_urls } =
		spotifyNowPlayingResponse.item;

	return {
		id,
		type: "spotify",
		attributes: {
			isPlaying: spotifyNowPlayingResponse.is_playing,
			songName: name,
			artists: artists.map((artist) => artist.name).join(", "),
			album: album.name,
			albumImage: album.images[0]?.url,
			songUrl: external_urls.spotify,
		},
	};
}
