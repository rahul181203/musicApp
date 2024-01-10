import { DotsHorizontalIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Text,
  TextField,
} from "@radix-ui/themes";
import Image from "next/image";

export const MainHeader = () => {
  return (
    <>
      <Flex justify={"between"} align={"center"} p={"4"} px={'6'}>
        <Box>
          <Image
            src={"/logo.png"}
            alt="logo"
            height={"80"}
            width={"80"}
            className=" dark:bg-sand11 rounded-full"
          />
        </Box>
        <Box className="w-[50%] shadow-lg shadow-sand7 rounded-full">
          <TextField.Root >
            <TextField.Slot>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
            <TextField.Input radius={'full'} placeholder="Search for music…" size="3" />
          </TextField.Root>
        </Box>
        <Flex gap={"4"}>
          {/* <Button className=" bg-sand12 text-sand2">Home</Button>
          <Button className=" bg-sand12 text-sand2">Explore</Button>
          <Button className=" bg-sand12 text-sand2">Library</Button> */}
          <Button size={'3'} className=" bg-sand12 text-sand2">Sign In</Button>
        </Flex>
      </Flex>
    </>
  );
};

export const MobileHeader = () => {
  return <>
  <Flex justify={"between"} align={"center"} p={"4"} px={'6'}>
        <Box>
          <Image
            src={"/logo.png"}
            alt="logo"
            height={"40"}
            width={"40"}
            className=" dark:bg-sand11 rounded-full"
          />
        </Box>
        <Flex gap={"4"} align={'center'}>
          <MagnifyingGlassIcon height="24" width="24" />
          <Button size={'2'} className=" bg-sand12 text-sand2">Sign In</Button>
        </Flex>
      </Flex>
  </>;
};
