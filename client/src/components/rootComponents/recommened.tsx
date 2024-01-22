import { AlbumCard } from "../globalComponents/songcard"
import { ComponentSpacer } from "../globalComponents/spacer"
import {Text,Heading, ScrollArea, Flex} from "@radix-ui/themes"
import axios from "@/services/instance"
import {useQuery} from "@tanstack/react-query"
export const Recommened=()=>{
    function getAlbums(){
        return axios.get("/getAlbums")
    }
    const {status, data, error,isLoading} = useQuery({
        queryKey:['albums'],
        queryFn:getAlbums
    })
    return (
        <>
            <Text size={'1'} color={'gray'}>Select your fav song</Text>
            <Heading size={'6'}>Recomended Albums</Heading>
            <ComponentSpacer/>
            <ScrollArea>
                <Flex gap={'3'} className=" whitespace-nowrap" mb={'4'}>
                {(isLoading)&&<p>Loading...</p>}
                {
                    (!isLoading)&&
                    data?.data.data.map((e:any,i:number)=>{
                        return <AlbumCard key={i} album={e}  />
                    })
                    
                }
                </Flex>
            </ScrollArea>
        </>
    )
}