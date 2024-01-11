import { LoopIcon, PauseIcon, PlayIcon, ShuffleIcon, SpeakerLoudIcon, SpeakerOffIcon, TrackNextIcon, TrackPreviousIcon } from "@radix-ui/react-icons"
import { Section,Container, Text, Avatar, Heading } from "@radix-ui/themes"

export const MainPlayer=()=>{
    return (
        <>
            <Container className="sticky bottom-5 bg-sand8 rounded-full" p={'3'} px={'5'} size={'4'}>
                <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                        <Avatar fallback={'I'} size={'3'} src="/img.jpg" />
                        <div>
                            <Heading size={'2'} className="text-sand1">Why this Kolaveri Di? (The Soup of Love)</Heading>
                            <Text size={'2'} className="text-sand1">Anirudh Ravichander</Text>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <TrackPreviousIcon className="text-sand1" height={'20'} width={'20'}/>
                        {/* <PauseIcon className="text-sand1" height={'20'} width={'20'}/> */}
                        <PlayIcon className="text-sand1" height={'20'} width={'20'}/>
                        <TrackNextIcon className="text-sand1" height={'20'} width={'20'}/>
                    </div>
                    <div className="flex gap-2">
                        <SpeakerOffIcon className="text-sand1" height={'20'} width={'20'}/>
                        {/* <SpeakerLoudIcon className="text-sand1" height={'20'} width={'20'}/> */}
                        <ShuffleIcon className="text-sand1" height={'20'} width={'20'}/>
                        <LoopIcon className="text-sand1" height={'20'} width={'20'}/>
                    </div>
                </div>
            </Container>
        </>
    )
}

export const MobilePlayer=()=>{
    return (
        <>
            <Container className="sticky bottom-0 bg-sand8" p={'3'} px={'5'} size={'4'}>
                <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                        <Avatar fallback={'I'} size={'3'} src="/img.jpg" />
                        <div>
                            <Heading size={'2'} className="text-sand1 max-w-40">Why this Kolaveri Di? (The Soup of Love)</Heading>
                            <Text size={'2'} className="text-sand1">Anirudh Ravichander</Text>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <TrackPreviousIcon className="text-sand1" height={'20'} width={'20'}/>
                        {/* <PauseIcon className="text-sand1" height={'20'} width={'20'}/> */}
                        <PlayIcon className="text-sand1" height={'20'} width={'20'}/>
                        <TrackNextIcon className="text-sand1" height={'20'} width={'20'}/>
                    </div>
                </div>
            </Container>
        </>
    )
}