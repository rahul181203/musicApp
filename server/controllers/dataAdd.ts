import { PrismaClient } from '@prisma/client'
import { Request,Response } from 'express'
const prisma = new PrismaClient()
import AlbumData from "../album.json";
import Artistdata from "../artists.json";
import songData from "../songs.json";
import relation from "../songArtists.json";

export const AddArtist=async(req:Request,res:Response)=>{
    await prisma.artist.createMany({
        data:Artistdata
    }).then(()=>{
        res.status(200).json({result:"added sucessfully"});
    }).catch((err)=>{
        console.log(err);
    })
}

export const AddSong=async(req:Request,res:Response)=>{
    await prisma.song.createMany({
        data:songData
    }).then(()=>{
        res.status(200).json({result:"Added successfully"});
    })
}

export const AddSongArtist=async(req:Request,res:Response)=>{
    await prisma.songArtist.createMany({
        data:relation
    }).then(()=>{
        res.status(200).json({result:"Added successfully"});
    })
}

export const AddAlbums=async(req:Request,res:Response)=>{
    await prisma.album.createMany({
        data: AlbumData
    }).then(()=>{
        res.status(200).json({result:"added sucessfully"});
    })
}

export const getAlbums=async(req:Request,res:Response)=>{
    const data = await prisma.album.findMany({
        include:{
            songs:true
        }
    });
    res.status(200).json({data})
}

export const getArtists=async(req:Request,res:Response)=>{
    const data = await prisma.artist.findMany({
        include:{
            songs:{
                select:{
                    song:true
                }
            }
        }
    });
    res.status(200).json({data})
}

export const getSongs=async(req:Request,res:Response)=>{
    const data = await prisma.song.findMany({
        include:{
            album:true,
            artists:{
                select:{
                    artist:{
                        select:{
                            name:true
                        }
                    }
                }
            }
        }
    })
    res.status(200).json({data})
}