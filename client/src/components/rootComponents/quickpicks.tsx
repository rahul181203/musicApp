"use client"
import { Grid, Heading, ScrollArea, Text } from "@radix-ui/themes"
import { SongCard } from "../globalComponents/songcard"
import { ComponentSpacer } from "../globalComponents/spacer"
import { SongData } from "@/data"
import axios from "@/services/instance"
import { useQuery } from "@tanstack/react-query"

export const Quickpicks=()=>{
    // function getSongs(){
    //     return axios.get("/getsongdata")
    // }
    // const {status, data, error} = useQuery({
    //     queryKey:['songs'],
    //     queryFn:getSongs
    // })
    // console.log(status);
    // console.log(error);    
    // console.log(data);
    
    return (
        <>
            <Text size={'1'} color={'gray'}>Select your fav song</Text>
            <Heading size={'7'}>Quick Picks</Heading>
            <ComponentSpacer/>
            <ScrollArea scrollbars={'horizontal'}>
            <Grid rows={'4'} flow={'column'}  gap={'3'} mb={'4'}>
                {
                    SongData.map((e,i)=>{
                        return <SongCard key={i} song={e}/>
                    })
                }
            </Grid>
            </ScrollArea>
        </>
    )
}