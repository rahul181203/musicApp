"use client"
import { Container, Flex, Heading, Slider, Text } from "@radix-ui/themes";
import { LoopIcon, PauseIcon, PlayIcon, ReloadIcon, ShuffleIcon, SpeakerLoudIcon, SpeakerOffIcon, TrackNextIcon, TrackPreviousIcon } from "@radix-ui/react-icons"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Player(){


    function getTimeCodeFromNum(num:number){
        let seconds:number = parseInt(String(num));
        let minutes:number = parseInt(String(seconds/60));
        seconds -= minutes * 60
        const hours = parseInt(String(minutes/60))
        minutes -= hours*60;

        if(hours===0) return `${minutes}:${String(seconds%60).padStart(2,"0")}`;
        return `${String(hours).padStart(2,"0")}:${minutes}:${String(seconds%60).padStart(2,"0")}`
    }

    function toggleClasses(){
        const playbtn = document.getElementById("playbtn")
        const pausebtn = document.getElementById("pausebtn")

        
        pausebtn?.classList.toggle("hidden")
        playbtn?.classList.toggle("hidden")
        
    }


    useEffect(()=>{
        const length:any = document.getElementById("length")
        const currTime:any = document.getElementById("currTime")
        const audio = new Audio("/song.mp3")
        const playbtn = document.getElementById("playbtn")
        const pausebtn = document.getElementById("pausebtn")
        const prev = document.getElementById("prev")
        const next = document.getElementById("next")
        const timeline = document.getElementById("timeline")
        const progress = document.getElementById("progress")
        const playPauseSection = document.getElementById("playPauseSection")
        const reloadsection = document.getElementById("reloadsection")
        const reloadbtn = document.getElementById("reloadbtn")

        audio.addEventListener("loadeddata",()=>{
            length.textContent = getTimeCodeFromNum(audio.duration);
        })

        playbtn?.addEventListener("click",()=>{
            audio.play()
        })
        pausebtn?.addEventListener("click",()=>{
            audio.pause()
        })
        prev?.addEventListener("click",async ()=>{
            audio.currentTime = 0
            await audio.play()
        })

        // progress?.addEventListener("seeking",(e)=>{
        //     console.log(e);
            
        // })
        
        
        // progress?.addEventListener("change",(e)=>{
        //     console.log("change");
        //     audio.currentTime = e.target?.value;
        //     progress?.removeAttribute("value")
        // })

        timeline?.addEventListener("click",async (e)=>{
            const timeWidth = window.getComputedStyle(timeline).width;
            const timetoseek = e.offsetX / parseInt(timeWidth) * audio.duration;
            audio.currentTime = timetoseek;
            if(audio.paused){             
                playbtn?.classList.remove("hidden")
                pausebtn?.classList.add("hidden")
            }    
        })
        
        setInterval(()=>{
            // progress?.getAttribute("value") === audio.duration.toString().split(".")[0] && reloadsection?.classList.toggle("hidden");
            // progress?.getAttribute("value") === audio.duration.toString().split(".")[0] && playPauseSection?.classList.toggle("hidden");
            // progress?.setAttribute("value",String(audio.currentTime).split(".")[0])
            if(progress !== null){
                progress.style.width = `${(audio.currentTime/audio.duration)*100}%`
            }
            if(progress?.style.width === "100%"){
               playPauseSection?.classList.add("hidden");
               reloadsection?.classList.remove("hidden")
            }else{
                playPauseSection?.classList.remove("hidden");
                reloadsection?.classList.add("hidden")
            }
            currTime.textContent = getTimeCodeFromNum(audio.currentTime)
        },500)
    },[])


    
    
    return (
        <>
            <Container size={'4'} p={'5'}>
                <Flex direction={'column'} gap={'4'} align={'center'} justify={'center'}>
                    <Image src={'/song.jpg'} alt="vasudhara" layout="fit" height={0} width={300}/>
                    <Heading size={'7'}>Vasudhara</Heading>
                    <Text>M. M. Keeravani and Shweta Pandit</Text>
                    <audio preload="auto">
                        <source id="file1" src="/song.mp3" type="audio/mpeg" />
                    </audio>
                    <div className="flex gap-3 w-full items-center justify-center">
                        <Text id="currTime">00:00</Text>
                        {/* <Slider max={duration} onValueChange={(e)=>{setCurrentTime(e[0])}} value={[currentTime]}  id="progress" variant={'soft'} className="w-[75%]" color={'brown'} /> */}
                        {/* <progress id="progress"  max={duration}></progress> */}
                        {/* <input id="progress" type="range" max={duration} className="w-[75%]" /> */}
                        <div id="timeline" className="w-full h-2 bg-white relative cursor-pointer rounded">
                            <div id="progress" className="h-full bg-sand9 rounded" style={{"width":"0%"}}></div>
                        </div>
                        <Text id="length">12:00</Text>
                    </div>
                    <Flex gap={'3'} align={'center'} justify={'center'}>
                        <TrackPreviousIcon id="prev" className="text-sand12 cursor-pointer" height={'32'} width={'32'}/>
                        <div id="playPauseSection" onClick={toggleClasses} className="bg-sand12 text-sand1 rounded-full p-2 cursor-pointer">
                            <PlayIcon id="playbtn" height={'32'} width={'32'}/>
                            <PauseIcon id="pausebtn" className="hidden" height={'32'} width={'32'}/>                 
                        </div>
                        <div id="reloadsection" className="bg-sand12 hidden text-sand1 rounded-full p-2 cursor-pointer">
                            <ReloadIcon id="reloadbtn" height={'32'} width={'32'} />                                                        
                        </div>
                        <TrackNextIcon id="next" className="text-sand12 cursor-pointer" height={'32'} width={'32'}/>
                    </Flex>
                </Flex>
            </Container>
        </>
    )
}