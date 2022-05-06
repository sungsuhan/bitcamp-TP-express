import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import TodoService from '../services/todo.js'
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
app.post('/addTodo', cors(corsOptions), (req, res) => {
    TodoService().addTodo(req, res)
    console.log(" TODO 들어옴 ")
})
export default app

