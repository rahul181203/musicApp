import { AlbumCard } from "../globalComponents/songcard"
import { ComponentSpacer } from "../globalComponents/spacer"
import {Text,Heading, ScrollArea, Flex} from "@radix-ui/themes"
export const Recommened=()=>{
    return (
        <>
            <Text size={'1'} color={'gray'}>Select your fav song</Text>
            <Heading size={'6'}>Recomended Albums</Heading>
            <ComponentSpacer/>
            <ScrollArea>
                <Flex gap={'3'} className=" whitespace-nowrap" mb={'4'}>
                    <AlbumCard/>
                    <AlbumCard/>
                    <AlbumCard/>
                    <AlbumCard/>
                    <AlbumCard/>
                    <AlbumCard/>
                    <AlbumCard/>
                    <AlbumCard/>
                    <AlbumCard/>

                </Flex>
            </ScrollArea>
        </>
    )
}