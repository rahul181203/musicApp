"use client"
import { index, isPlaying, songData } from "@/store/song";
import { PlayIcon } from "@radix-ui/react-icons";
import { Container,Heading,Box,Table,Text } from "@radix-ui/themes"
import { useAtom } from "jotai";
import Image from "next/image";

export function AlbumCard({data}:{
    data:any
}){
    const [songs,setSongs] = useAtom(songData);
    const [playing,setPlaying] = useAtom(isPlaying);
    const [indexNumber,setIndex] = useAtom(index);

    function addSongs(){
        setSongs(data?.songs);
        setPlaying(true);
    }
    return(
        <>
            <Container size={'4'} m={'5'} className="min-h-screen">
            <Box className="flex flex-col items-center gap-3">
                <Image
                src={data?.img} 
                alt="image"
                height={'100'}
                width={'300'}
                />
                <Heading size={'7'}>{data?.name}</Heading>
                <Box>
                    <div onClick={()=>{setIndex(0);addSongs()}} className=" rounded-full bg-sand12 text-sand1 p-3 cursor-pointer">
                        <PlayIcon height={'32'} width={'32'} />
                    </div>
                </Box>
                <Table.Root className="w-full">
                <Table.Body>
                {
                    data?.songs.map((e:any,i:number)=>{
                        return <Table.Row key={i} onClick={()=>{setIndex(i);addSongs();}} className="cursor-pointer">
                                    <Table.RowHeaderCell>{i+1}</Table.RowHeaderCell>
                                    <Table.Cell>{e.name}</Table.Cell>
                                    <Table.Cell>{e.length}</Table.Cell>
                                </Table.Row>
                    })
                }
                </Table.Body>
                </Table.Root>
            </Box>
        </Container>
        </>
    )
}