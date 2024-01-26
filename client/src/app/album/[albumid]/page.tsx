"use client"
import { sizeAtom } from "@/store/responsive"
import { PlayIcon } from "@radix-ui/react-icons";
import { Box, Container, Heading, Table, Text } from "@radix-ui/themes";
import { useAtom } from "jotai"
import Image from "next/image";
import axios from "@/services/instance";
import { useQuery } from "@tanstack/react-query";
import { AlbumCard } from "../components/albumList"
import { songData } from "@/store/song";

export default function Album({params}:{
    params:{ albumid:string}
}){
    console.log(params.albumid);
    function getSongs(){
        return axios.get(`/getAlbums/${params.albumid}`)
    }
    
    const {status, data, error,isLoading,isSuccess} = useQuery({
        queryKey:[`${params.albumid}`],
        queryFn:()=>getSongs()
    })
    return(
        <>
        {
            (isLoading)&&<Heading className="min-h-screen">Loading...</Heading>
        }
        {
            (!isLoading)&&<AlbumCard data={data?.data.data} />
        }
        </>
    )
}