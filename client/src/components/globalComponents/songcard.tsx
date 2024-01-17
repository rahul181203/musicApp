import { sizeAtom } from "@/store/responsive";
import { currentSong, currentTime, currentsongurl, durationTime, isPlaying, progressWidth, songArtist, songName, songimg } from "@/store/song";
import { Card,Flex,Avatar,Box,Text,Inset,Strong,Heading } from "@radix-ui/themes";
import { useAtomValue, useSetAtom } from "jotai";
import Image from "next/image";


export const SongCard = (props:any) => {
  const mobile = useAtomValue(sizeAtom);
  const setPlaying = useSetAtom(isPlaying)
  const setURL = useSetAtom(currentsongurl);
  const setSongname = useSetAtom(songName)
  const setSongArtist = useSetAtom(songArtist)
  const setimg = useSetAtom(songimg);

  function getTimeCodeFromNum(num:number){
    let seconds:number = parseInt(String(num));
    let minutes:number = parseInt(String(seconds/60));
    seconds -= minutes * 60
    const hours = parseInt(String(minutes/60))
    minutes -= hours*60;

    if(hours===0) return `${minutes}:${String(seconds%60).padStart(2,"0")}`;
    return `${String(hours).padStart(2,"0")}:${minutes}:${String(seconds%60).padStart(2,"0")}`
  }

  function songSet(song:any){
    setURL(song.url)
    setSongname(song.name)
    setSongArtist(song.artist)
    setPlaying(true)
    setimg(song.img)
  }

  return (
    <>
      <Card style={{"minWidth":(mobile)?"230px":"270px"}} onClick={()=>songSet(props.song)} className="cursor-pointer" >
        <Flex gap="3" align="center">
          <Avatar
            size={(mobile)?"4":"5"}
            src={props.song.img}
            radius={'medium'}
            fallback="O"
          />
          <Box>
            <Text as="div" size="2" weight="bold">
              {props.song.name}
            </Text>
            <Text as="div" size="2" color="gray">
              {props.song.artist}
            </Text>
          </Box>
        </Flex>
      </Card>
    </>
  );
};

export const AlbumCard = () => {
  const mobile = useAtomValue(sizeAtom);
  return <>
    <Card size="2" >
  <Inset clip="padding-box" side="top" pb="current">
    <Image
      src="/img.jpg"
      alt="song"
      width={'100'}
      height={'100'}
      layout="responsive"
      
    />
  </Inset>
  <Heading size={(mobile)?'4':'5'} className=" w-[170px] whitespace-normal">Happy Pop Hits</Heading>
  <Text as="div" size={'1'} color={'gray'} className=" whitespace-normal">Dua Lipa, Ed Sheeran, Camila Cabello, Ella</Text>
</Card>
  </>;
};
