import express from "express";
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import userRoutes from "./routes/user.route.js"
import dotenv from "dotenv"
import connectToMongo from "./db/connectToDb.js";
import cookieParser from "cookie-parser";
import { app  ,server } from "./socket/socket.js";
import path from "path"

dotenv.config();

// const app = express();

const __dirname = path.resolve()


app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)


app.use(express.static(path.join(__dirname,"/client/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"client","dist","index.html"))
})

server.listen(5000,()=>{
    connectToMongo();
    console.log("backend is connected")
});