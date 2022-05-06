import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import BoardService from '../services/board.js'
dotenv.config()
const mongoUri = process.env.MONGO_URI
const port = process.env.PORT
const origin = process.env.ORIGIN
const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}
const app = express()
app.use(cors());
app.use(function (_req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});
app.post('/write', cors(corsOptions), (req, res) => {
    BoardService().write(req, res)
    console.log(" WRITE 들어옴 ")
});
app.get('/list', cors(corsOptions), (req, res) => {
    BoardService().list(req, res)
    console.log(" LIST 들어옴 ")
});
export default app