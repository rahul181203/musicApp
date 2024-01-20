import express,{Express} from "express"
import { getAlbums, getArtists, getSongs } from "../controllers/dataAdd";

const router:Express = express();

// router.post("/addArtist",AddArtist);
// router.post("/addAlbum",AddAlbums);
router.get("/getAlbums",getAlbums);
router.get("/getArtists",getArtists);
// router.post("/addSongs",AddSong);
router.get("/getSongData",getSongs);
// router.post("/loadRelation",AddSongArtist)

export default router;