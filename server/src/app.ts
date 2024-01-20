import express,{Express, Request, Response} from 'express';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from '../routes/routes';

// initializing env
dotenv.config({path:".env"})

// initializing app
const app:Express = express();


app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use("/api/v1",router)

export default app;