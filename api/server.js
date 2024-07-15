import express from "express";
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import userRoutes from "./routes/user.route.js"
import dotenv from "dotenv"
import connectToMongo from "./db/connectToDb.js";
import cookieParser from "cookie-parser";
import { app  ,server } from "./socket/socket.js"; 

dotenv.config();

// const app = express();

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

server.listen(5000,()=>{
    connectToMongo();
    console.log("backend is connected")
});