export interface NowPlayingResponse {
	id: string;
	type: "spotify";
	attributes: {
		isPlaying: boolean;
		songName: string;
		artists: string;
		album: string;
		albumImage: string;
		songUrl: string;
	};
}
