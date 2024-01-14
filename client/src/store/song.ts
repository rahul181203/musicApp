import { atom} from "jotai"

export const currentTime = atom("00:00")
currentTime.debugLabel = "current time"
export const durationTime = atom("00:00")
durationTime.debugLabel = "duration time"
export const progressWidth = atom(0)
progressWidth.debugLabel = "progress width"
export const isPlaying = atom(false)
isPlaying.debugLabel = "isPlaying"
export const isreplay = atom(false)
isreplay.debugLabel = "replay"
export const playorpause = atom(true);
playorpause.debugLabel = "playpause"
export const currentSong = atom<any>(undefined)
currentSong.debugLabel = "current song"
export const currentsongurl = atom("")
currentsongurl.debugLabel = "current song url"
export const songName = atom("")
songName.debugLabel = "song name"
export const songArtist = atom("")
songArtist.debugLabel = "artist"