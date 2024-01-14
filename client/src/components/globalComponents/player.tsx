import {
  LoopIcon,
  PauseIcon,
  PlayIcon,
  ShuffleIcon,
  SpeakerLoudIcon,
  SpeakerOffIcon,
  TrackNextIcon,
  TrackPreviousIcon,
} from "@radix-ui/react-icons";
import {
  Section,
  Container,
  Text,
  Avatar,
  Heading,
  Dialog,
} from "@radix-ui/themes";
import PlayerExpand from "./playerExpand";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { currentSong, currentTime, currentsongurl, durationTime, playorpause, progressWidth, songArtist, songName } from "@/store/song";
import { useEffect } from "react";

export const MainPlayer = () => {
    // const [song,setSong] = useAtom(currentSong)

    const songurl = useAtomValue(currentsongurl)
    const song = useAtomValue(currentSong)
    const setSong = useSetAtom(currentSong)
    const setTime = useSetAtom(currentTime)
    const setDuration = useSetAtom(durationTime)
    const setWidth = useSetAtom(progressWidth)
    const setPlayPause = useSetAtom(playorpause);
    const currentSongName = useAtomValue(songName)
    const currentSongArtist = useAtomValue(songArtist)
    // const pauseplay = useAtomValue(playorpause)
    const setPausePlay = useSetAtom(playorpause)

    function getTimeCodeFromNum(num:number){
      let seconds:number = parseInt(String(num));
      let minutes:number = parseInt(String(seconds/60));
      seconds -= minutes * 60
      const hours = parseInt(String(minutes/60))
      minutes -= hours*60;

      if(hours===0) return `${minutes}:${String(seconds%60).padStart(2,"0")}`;
      return `${String(hours).padStart(2,"0")}:${minutes}:${String(seconds%60).padStart(2,"0")}`
    }

    useEffect(()=>{
      const audio:HTMLAudioElement = document.getElementById("player") as HTMLAudioElement
      audio.src = songurl
      audio.addEventListener("loadeddata",()=>{     
        setDuration(getTimeCodeFromNum(audio.duration))
        audio.play()
      })
      setSong(audio)
      setPlayPause(true);
      // setDuration(getTimeCodeFromNum(audio.duration))
    })

    // function songSet(){
    //     console.log("clicked");
    //     const audio = new Audio("/song.mp3");
    //     setSong(audio);

    //   setInterval(()=>{
    //     setWidth((audio.currentTime/audio.duration)*100)
    //     setTime(getTimeCodeFromNum(audio.currentTime))
    // },500)
    // }

    function togglepauseplay(){
      const play = document.getElementById("playbtn")
      const Pause = document.getElementById("pausebtn")
      play?.classList.toggle("hidden")
      Pause?.classList.toggle("hidden")
    }
    

  return (
    <>
      <Container
        className="sticky bottom-5 bg-sand8 rounded-full"
        p={"3"}
        px={"5"}
        size={"4"}
      >
        <audio id="player" src="" preload="auto"></audio>
        <div className="flex justify-between items-center">
          <Dialog.Root>
            <Dialog.Trigger>
              <div className="flex gap-3 cursor-pointer">
                <Avatar fallback={"I"} size={"3"} src="/song.jpg" />
                <div>
                  <Heading size={"2"} className="text-sand1">
                    {currentSongName}
                  </Heading>
                  <Text size={"2"} className="text-sand1">
                    {currentSongArtist}
                  </Text>
                </div>
              </div>
            </Dialog.Trigger>
            <Dialog.Content>
                <PlayerExpand/>
            </Dialog.Content>
          </Dialog.Root>

          <div className="flex gap-2">
            <TrackPreviousIcon
              className="text-sand1"
              height={"20"}
              width={"20"}
            />
            <div onClick={()=>togglepauseplay()} className=" cursor-pointer">
              <PauseIcon id="pausebtn" onClick={()=>{song.pause();setPausePlay(false)}} className="text-sand1" height={'20'} width={'20'}/>
              <PlayIcon id="playbtn" onClick={()=>{song.play();setPausePlay(true)}} className="text-sand1 hidden" height={"20"} width={"20"} />
            </div>
            <TrackNextIcon className="text-sand1" height={"20"} width={"20"} />
          </div>
          <div className="flex gap-2">
            <SpeakerOffIcon className="text-sand1" height={"20"} width={"20"} onClick={()=>{song.volume=0}} />
            <SpeakerLoudIcon className="text-sand1" height={'20'} width={'20'} onClick={()=>{song.volume=1}}/>
            <ShuffleIcon className="text-sand1" height={"20"} width={"20"} />
            <LoopIcon className="text-sand1" height={"20"} width={"20"} />
          </div>
        </div>
      </Container>
    </>
  );
};

export const MobilePlayer = () => {
  return (
    <>
      <Container
        className="sticky bottom-0 bg-sand8"
        p={"3"}
        px={"5"}
        size={"4"}
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <Avatar fallback={"I"} size={"3"} src="/img.jpg" />
            <div>
              <Heading size={"2"} className="text-sand1 max-w-40">
                Why this Kolaveri Di? (The Soup of Love)
              </Heading>
              <Text size={"2"} className="text-sand1">
                Anirudh Ravichander
              </Text>
            </div>
          </div>
          <div className="flex gap-2">
            <TrackPreviousIcon
              className="text-sand1"
              height={"20"}
              width={"20"}
            />
            {/* <PauseIcon className="text-sand1" height={'20'} width={'20'}/> */}
            <PlayIcon className="text-sand1" height={"20"} width={"20"} />
            <TrackNextIcon className="text-sand1" height={"20"} width={"20"} />
          </div>
        </div>
      </Container>
    </>
  );
};
