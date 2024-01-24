"use client"
import { sizeAtom } from "@/store/responsive"
import { PlayIcon } from "@radix-ui/react-icons";
import { Box, Container, Heading, Table, Text } from "@radix-ui/themes";
import { useAtom } from "jotai"
import Image from "next/image";
import axios from "@/services/instance";
import { useQuery } from "@tanstack/react-query";
import { AlbumCard } from "../components/albumList";
// import { useSearchParams } from "next/navigation";

export default function Album({params}:{
    params:{ albumid:string}
}){
    console.log(params.albumid);
    async function getSongs(){
        return await axios.get(`/getAlbums/${params.albumid}`)
    }
    
    const {status, data, error,isLoading} = useQuery({
        queryKey:['songs'],
        queryFn:getSongs
    })
    
    return(
        <>
        {
            (isLoading)&&<Heading>Loading...</Heading>
        }
        {
            (!isLoading)&&<AlbumCard  data={data}/>
        }
        </>
    )
}