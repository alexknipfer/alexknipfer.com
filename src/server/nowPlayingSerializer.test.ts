import { describe, expect, test } from "vitest";

import { serialize } from "#/server/nowPlayingSerializer";
import type { SpotifyNowPlayingResponse } from "#/server/spotify.types";

const artist = (name: string) => ({
	external_urls: { spotify: "" },
	href: "",
	id: name,
	name,
	type: "artist",
	uri: "",
});

const spotifyResponse = {
	is_playing: true,
	item: {
		id: "track-1",
		name: "Song Name",
		artists: [artist("Artist One"), artist("Artist Two")],
		album: {
			name: "Album Name",
			images: [
				{ url: "https://i.scdn.co/large.jpg", width: 640, height: 640 },
				{ url: "https://i.scdn.co/small.jpg", width: 64, height: 64 },
			],
		},
		external_urls: { spotify: "https://open.spotify.com/track/1" },
	},
} as unknown as SpotifyNowPlayingResponse;

describe("nowPlayingSerializer", () => {
	test("serializes a spotify now playing response", () => {
		expect(serialize(spotifyResponse)).toEqual({
			id: "track-1",
			type: "spotify",
			attributes: {
				isPlaying: true,
				songName: "Song Name",
				artists: "Artist One, Artist Two",
				album: "Album Name",
				albumImage: "https://i.scdn.co/large.jpg",
				songUrl: "https://open.spotify.com/track/1",
			},
		});
	});
});
