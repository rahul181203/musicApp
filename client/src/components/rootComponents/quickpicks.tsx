import { Grid, Heading, ScrollArea, Text } from "@radix-ui/themes"
import { SongCard } from "../globalComponents/songcard"
import { ComponentSpacer } from "../globalComponents/spacer"

export const Quickpicks=()=>{
    return (
        <>
            <Text size={'1'} color={'gray'}>Select your fav song</Text>
            <Heading size={'7'}>Quick Picks</Heading>
            <ComponentSpacer/>
            <ScrollArea scrollbars={'horizontal'}>
            <Grid rows={'4'} flow={'column'}  gap={'3'} mb={'4'}>
                <SongCard/>
                <SongCard/>
                <SongCard/>
                <SongCard/>
                <SongCard/>
                <SongCard/>
                <SongCard/>
                <SongCard/>
                <SongCard/>
                <SongCard/>
                <SongCard/>
                <SongCard/>
                <SongCard/>
                <SongCard/>
                <SongCard/>
                <SongCard/>
                <SongCard/>
                <SongCard/>
                <SongCard/>
            </Grid>
            </ScrollArea>
        </>
    )
}