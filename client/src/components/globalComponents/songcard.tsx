import { sizeAtom } from "@/store/responsive";
import { Card,Flex,Avatar,Box,Text,Inset,Strong,Heading } from "@radix-ui/themes";
import { useAtomValue } from "jotai";
import Image from "next/image";


export const SongCard = () => {
  const mobile = useAtomValue(sizeAtom);
  return (
    <>
      <Card style={{"minWidth":(mobile)?"230px":"270px"}}>
        <Flex gap="3" align="center">
          <Avatar
            size={(mobile)?"4":"5"}
            src="https://m.media-amazon.com/images/M/MV5BNmVmZTE5MTMtMjc3Ni00ZDMxLWJkOWUtYjQ4MTBmNDY2MDdjXkEyXkFqcGdeQXVyNTY3MDA4NTE@._V1_.jpg"
            radius={'medium'}
            fallback="O"
          />
          <Box>
            <Text as="div" size="2" weight="bold">
              Chilipiga
            </Text>
            <Text as="div" size="2" color="gray">
              Karthik
            </Text>
          </Box>
        </Flex>
      </Card>
    </>
  );
};

export const AlbumCard = () => {
  const mobile = useAtomValue(sizeAtom);
  return <>
    <Card size="2" >
  <Inset clip="padding-box" side="top" pb="current">
    <Image
      src="/img.jpg"
      alt="song"
      width={'100'}
      height={'100'}
      layout="responsive"
      
    />
  </Inset>
  <Heading size={(mobile)?'4':'5'} className=" max-w-[230px] "></Heading>
  <Text as="div" size={'1'} color={'gray'} className=" whitespace-normal">Dua Lipa, Ed Sheeran, Camila Cabello, Ella</Text>
</Card>
  </>;
};
