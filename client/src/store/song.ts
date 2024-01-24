import { atom} from "jotai"

interface SongTypes{
    id:string,
    name:string,
    img:string,
    length:string,
    file:string,
    albumId:string,
    language:string,
    likes:number,
    share:number,
    artists:Array<any>
}

export const currentTime = atom("00:00")
export const durationTime = atom("00:00")
export const progressWidth = atom(0)
export const isPlaying = atom(false)
export const isreplay = atom(false)
export const playorpause = atom(true);
export const currentSongAudioFile = atom<any>({})
export const index = atom(0);
export const songData = atom<SongTypes[]>([])