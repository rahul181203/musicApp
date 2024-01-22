"use client"
import { sizeAtom } from "@/store/responsive"
import { PlayIcon } from "@radix-ui/react-icons";
import { Box, Container, Heading, Table, Text } from "@radix-ui/themes";
import { useAtom } from "jotai"
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Album(){
    const mobile = useAtom(sizeAtom);
    const searchparams = useSearchParams()
    // const data = router
    const data = JSON.parse(searchparams.get("data")!);    
    
    return(
        <>
            <Container size={'4'} m={'5'}>
                <Box className="flex flex-col items-center gap-3">
                    <Image
                    src={data.img} 
                    alt="image"
                    height={'100'}
                    width={'300'}
                    />
                    <Heading size={'7'}>{data.name}</Heading>
                    <Box>
                        <div className=" rounded-full bg-sand12 text-sand1 p-3">
                            <PlayIcon height={'32'} width={'32'} />
                        </div>
                    </Box>
                    <Table.Root className="w-full">
                    <Table.Body>
                    {
                        data.songs.map((e:any,i:any)=>{
                            return <Table.Row key={i}>
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