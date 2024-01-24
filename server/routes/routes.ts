import express,{Express} from "express"
import { getAlbums, getArtists, getSongs,AddSong,getAlbumSong} from "../controllers/dataAdd";

const router:Express = express();

// router.post("/addArtist",AddArtist);
// router.post("/addAlbum",AddAlbums);
router.get("/getAlbums",getAlbums);
router.get("/getArtists",getArtists);
router.post("/addSongs",AddSong);
router.get("/getSongData",getSongs);
// router.post("/loadRelation",AddSongArtist)
router.get("/getAlbums/:id",getAlbumSong)

export default router;