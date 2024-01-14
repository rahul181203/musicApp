"use client"
import { Container, Flex, Heading, ScrollArea, Slider, Text } from "@radix-ui/themes";
import { LoopIcon, PauseIcon, PlayIcon, ReloadIcon, ShuffleIcon, SpeakerLoudIcon, SpeakerOffIcon, TrackNextIcon, TrackPreviousIcon } from "@radix-ui/react-icons"
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { currentSong, currentTime, durationTime, isPlaying, isreplay, playorpause, progressWidth, songArtist, songName } from "@/store/song";

export default function PlayerExpand(){

    const time = useAtomValue(currentTime)
    const setTime = useSetAtom(currentTime)
    const duration = useAtomValue(durationTime)
    const setDuration = useSetAtom(durationTime)
    const width = useAtomValue(progressWidth)
    const setWidth = useSetAtom(progressWidth)
    const pauseplay = useAtomValue(playorpause)
    const setPausePlay = useSetAtom(playorpause)
    const replay = useAtomValue(isreplay)
    const song = useAtomValue(currentSong)
    const currentSongName = useAtomValue(songName)
    const currentsongartist = useAtomValue(songArtist)

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
        
        const playbtn = document.getElementById("playbtn")
        const pausebtn = document.getElementById("pausebtn")
        const timeline = document.getElementById("timeline")


        timeline?.addEventListener("click",async (e)=>{
            console.log(e);            
            const timeWidth = window.getComputedStyle(timeline).width;
            console.log(timeWidth);
            const timetoseek = e.offsetX / parseInt(timeWidth) * song.duration;
            console.log(timetoseek);   
            song.currentTime = timetoseek;
            if(song.paused){
                playbtn?.classList.remove("hidden")
                pausebtn?.classList.add("hidden")
            }
        })
    },[])


    setInterval(()=>{
        setWidth((song.currentTime/song.duration)*100)
        setTime(getTimeCodeFromNum(song.currentTime))
    },500)


    return (
        <>
        <ScrollArea>
        <Flex align={'center'} justify={'center'} className="min-h-[80vh] min-w-screen">
            
            <Container size={'4'} p={'5'}>
                <Flex direction={'column'} gap={'4'} align={'center'} justify={'center'}>
                    <Image src={'/song.jpg'} alt="vasudhara" layout="fit" height={0} width={300}/>
                    <Heading size={'7'}>{currentSongName}</Heading>
                    <Text>{currentsongartist}</Text>
                    <audio preload="auto">
                        <source id="file1" src="/song.mp3" type="audio/mpeg" />
                    </audio>
                    <div className="flex gap-3 w-full items-center justify-center">
                        <Text id="currTime">{time}</Text>
                        {/* <Slider max={duration} onValueChange={(e)=>{setCurrentTime(e[0])}} value={[currentTime]}  id="progress" variant={'soft'} className="w-[75%]" color={'brown'} /> */}
                        {/* <progress id="progress"  max={duration}></progress> */}
                        {/* <input id="progress" type="range" max={duration} className="w-[75%]" /> */}
                        <div id="timeline" className="w-full h-2 bg-white relative cursor-pointer rounded">
                            <div id="progress" className="h-full bg-sand9 rounded" style={{"width":`${width}%`}}></div>
                        </div>
                        <Text id="length">{duration}</Text>
                    </div>
                    <Flex gap={'3'} align={'center'} justify={'center'}>
                        <TrackPreviousIcon id="prev" className="text-sand12 cursor-pointer" height={'32'} width={'32'}/>
                        <div id="playPauseSection" className="bg-sand12 text-sand1 rounded-full p-2 cursor-pointer">
                            {(!pauseplay)?<PlayIcon id="playbtn" onClick={()=>{song.play();setPausePlay(true)}} height={'32'} width={'32'}/>
                            :<PauseIcon id="pausebtn" onClick={()=>{song.pause();setPausePlay(false)}} height={'32'} width={'32'}/>}            
                        </div>
                        <div id="reloadsection" className="bg-sand12 hidden text-sand1 rounded-full p-2 cursor-pointer">
                            <ReloadIcon id="reloadbtn" height={'32'} width={'32'} />                                                        
                        </div>
                        <TrackNextIcon id="next" className="text-sand12 cursor-pointer" height={'32'} width={'32'}/>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
        </ScrollArea>
        </>
    )
}