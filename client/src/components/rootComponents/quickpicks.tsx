"use client"
import { Grid, Heading, ScrollArea, Text } from "@radix-ui/themes"
import { SongCard } from "../globalComponents/songcard"
import { ComponentSpacer } from "../globalComponents/spacer"
import { SongData } from "@/data"
import axios from "@/services/instance"
import { useQuery } from "@tanstack/react-query"
import { SongTypes } from "@/store/song"

export const Quickpicks=()=>{
    function getSongs(){
        return axios.get("/get15songs")
    }
    const {status, data, error,isLoading} = useQuery({
        queryKey:['songs'],
        queryFn:()=>getSongs()
    })
    
    const songsList:Array<any> = data?.data.data;
    
    
    return (
        <>
        
        <Text size={'1'} color={'gray'}>Select your fav song</Text>
            <Heading size={'7'}>Quick Picks</Heading>
            <ComponentSpacer/>
            {(isLoading)&&<Text>Loading...</Text>}
        {
            (!isLoading)&&
            <ScrollArea scrollbars={'horizontal'}>
            <Grid rows={'4'} flow={'column'}  gap={'3'} mb={'4'}>
                {
                    songsList?.map((e:SongTypes,i:number)=>{
                        return <SongCard key={i} song={e}/>
                    })
                }
            </Grid>
            </ScrollArea>
        }
        </>
    )
}