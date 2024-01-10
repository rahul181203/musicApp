import { Button, Flex, Heading, Text } from "@radix-ui/themes"
import Image from "next/image"
import * as Popover from '@radix-ui/react-popover';
import {Cross2Icon } from '@radix-ui/react-icons';

export const SelectArtists=()=>{
    return (
        <>
            <div className="flex md:flex-col lg:flex-row sm:flex-col lg:justify-around md:items-center sm:items-center  items-center">
                <div>
                   <Image src={'/artists.png'} alt="artists" height={'120'} width={'500'} layout="fit" />
                </div>
                <div className="flex flex-col lg:items-start md:items-center sm:items-center ">
                    <Heading>Tell us which artists you like</Heading>
                    <Text className="text-sand10">{`We'll create an experience just for you`}</Text>
                    <Popover.Root>
                        <Popover.Trigger asChild>
                        {/* <button
                            className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black cursor-default outline-none"
                            aria-label="Update dimensions"
                        >
                        </button> */}
                        <Button mt={'3'} radius={'full'} className="bg-sand12 text-sand1">{`Let's go`}</Button>
                        </Popover.Trigger>
                        <Popover.Portal>
                        <Popover.Content
                            className="rounded p-5 w-[320px]  bg-sand5 shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
                            sideOffset={5}
                        >
                            <div className="flex flex-col justify-start">
                                <div className="font-bold text-2xl">Have a favorite?</div>
                                <div className="text-md mt-2">{`Tell us which artists you like and we'll improve your recommendations`}</div>
                                <div className="flex justify-end mt-4">
                                    <button className="bg-sand12 px-2 py-1 text-sand1 rounded-full font-bold">Sign in</button>
                                </div>
                            </div>
                            <Popover.Close
                            className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 absolute top-[5px] right-[5px] hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 outline-none cursor-default"
                            aria-label="Close"
                            >
                            <Cross2Icon />
                            </Popover.Close>
                            <Popover.Arrow className="fill-white" />
                        </Popover.Content>
                        </Popover.Portal>
                    </Popover.Root>
                </div>
            </div>
        </>
    )
}


export const MobileSelectArtists=()=>{
    return (
        <>
            <div className="flex flex-col items-center ">
                <div>
                   <Image src={'/artists.png'} alt="artists" height={'120'} width={'500'} layout="fit" />
                </div>
                <div className="flex flex-col items-center ">
                    <Heading>Tell us which artists you like</Heading>
                    <Text className="text-sand10">{`We'll create an experience just for you`}</Text>
                    <Popover.Root>
                        <Popover.Trigger asChild>
                            <Button mt={'3'} radius={'full'} className="bg-sand12 text-sand1">{`Let's go`}</Button>
                        </Popover.Trigger>
                        <Popover.Portal>
                        <Popover.Content
                            className="rounded p-5 w-[320px]  bg-sand5 shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
                            sideOffset={5}
                        >
                            <div className="flex flex-col justify-start">
                                <div className="font-bold text-2xl">Have a favorite?</div>
                                <div className="text-md mt-2">{`Tell us which artists you like and we'll improve your recommendations`}</div>
                                <div className="flex justify-end mt-4">
                                    <button className="bg-sand12 px-2 py-1 text-sand1 rounded-full font-bold">Sign in</button>
                                </div>
                            </div>
                            <Popover.Close
                            className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 absolute top-[5px] right-[5px] hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 outline-none cursor-default"
                            aria-label="Close"
                            >
                            <Cross2Icon />
                            </Popover.Close>
                            <Popover.Arrow className="fill-white" />
                        </Popover.Content>
                        </Popover.Portal>
                    </Popover.Root>
                </div>
            </div>
        </>
    )
}

