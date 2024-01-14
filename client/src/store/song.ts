import { atom} from "jotai"

export const currentTime = atom("00:00")
export const durationTime = atom("00:00")
export const progressWidth = atom(0)
export const isPlaying = atom(false)
export const isreplay = atom(false)
export const playorpause = atom(true);
export const currentSong = atom<any>(undefined)
export const currentsongurl = atom("")
export const songName = atom("")
export const songArtist = atom("")