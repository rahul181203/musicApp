import express,{Express} from "express"
import { getAlbums, getArtists, getSongs,AddSong,getAlbumSong, get15songs} from "../controllers/dataAdd";

const router:Express = express();

// router.post("/addArtist",AddArtist);
// router.post("/addAlbum",AddAlbums);
router.get("/getAlbums",getAlbums);
router.get("/getArtists",getArtists);
router.post("/addSongs",AddSong);
router.get("/getSongData",getSongs);
// router.post("/loadRelation",AddSongArtist)
router.get("/getAlbums/:id",getAlbumSong)
router.get("/get15songs",get15songs)

export default router;