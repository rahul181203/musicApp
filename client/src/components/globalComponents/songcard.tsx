import { sizeAtom } from "@/store/responsive";
import { currentSongAudioFile, currentTime, durationTime, index, isPlaying, progressWidth, songData} from "@/store/song";
import { Card,Flex,Avatar,Box,Text,Inset,Strong,Heading } from "@radix-ui/themes";
import { useAtom, useSetAtom,useAtomValue } from "jotai";
import Image from "next/image";
import Link from "next/link";

export const SongCard = (props:any) => {
  const mobile = useAtomValue(sizeAtom);
  const setPlaying = useSetAtom(isPlaying)
  const [songs,setSongs] = useAtom(songData);
  const [indexNumber,setIndex] = useAtom(index);
  
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
    setSongs([song]);
    setPlaying(true)
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

export const AlbumCard = (props:any) => {
  const mobile = useAtomValue(sizeAtom);

  return <>
  <Link href={{pathname:`/album/${props.album.id}`}} >
    <Card size="2" className="cursor-pointer">
  <Inset clip="padding-box" side="top" pb="current" className="w-[200px] h-[200px]">
    <Image
      src={props.album.img}
      alt="song"
      width={'100'}
      height={'100'}
      quality={100}
      layout="responsive"
    />
  </Inset>
  <Heading size={(mobile)?'4':'5'} className=" w-[170px] whitespace-normal">{props.album.name}</Heading>
  <Text as="div" size={'1'} color={'gray'} className=" whitespace-normal">{props.album.language} . {props.album.year}</Text>
</Card>
</Link>
  </>;
};
