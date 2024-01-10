import { Flex, Heading } from "@radix-ui/themes"
import * as os from "os"

export default function Home(){
    return (
        <>
            <Flex align={'center'} justify={'center'} className="min-h-screen">
                <Heading size={'9'}>{os.platform()}</Heading>
            </Flex>
        </>
    )
}