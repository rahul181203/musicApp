"use client"
import { sizeAtom } from '@/store/responsive'
import Image from 'next/image'
import {useAtomValue} from "jotai"
import { Container, Dialog, Heading, Text } from '@radix-ui/themes'
import { MainHeader, MobileHeader } from '@/components/globalComponents/header'
import { MainCategories, MobileCategories } from '@/components/rootComponents/categories'
import { SectionSpacer } from '@/components/globalComponents/spacer'
import { AlbumCard, SongCard } from '@/components/globalComponents/songcard'
import { Quickpicks } from '@/components/rootComponents/quickpicks'
import { Recommened } from '@/components/rootComponents/recommened'
import { MobileSelectArtists, SelectArtists } from '@/components/rootComponents/selectArtists'
import { MainPlayer, MobilePlayer } from '@/components/globalComponents/player'
import { isPlaying } from '@/store/song'

export default function Home() {
  const mobile = useAtomValue(sizeAtom)
  const playing = useAtomValue(isPlaying)
  
  return (
    
    <>
    
      {
        
        (!mobile)&&
        <>
          <MainHeader/>
          <SectionSpacer/>
          <Container size={'4'} p={'5'}>
            <MainCategories/>
            <SectionSpacer/>
            <Quickpicks/>
            <SectionSpacer/>
            <Recommened/>
            <SectionSpacer/>
            <SelectArtists/>
            <SectionSpacer/>
            <Recommened/>
            <SectionSpacer/>
            <Recommened/>
          </Container>
          
        </>
      }

      {
        (mobile)&&
        <>
          <MobileHeader/>
          <Container p={'4'}>
            <MobileCategories/>
            <SectionSpacer/>
            <Quickpicks/>
            <SectionSpacer/>
            <Recommened/>
            <SectionSpacer/>
            <MobileSelectArtists/>
            <SectionSpacer/>
            <Recommened/>
            <SectionSpacer/>
            <Recommened/>
          </Container>
        </>
      }
    </>
  )
}
