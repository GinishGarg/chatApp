import express from "express";
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import userRoutes from "./routes/user.route.js"
import dotenv from "dotenv"
import connectToMongo from "./db/connectToDb.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(express.json())
app.use(cookieParser())
app.use("/auth",authRoutes)
app.use("/messages",messageRoutes)
app.use("/users",userRoutes)

app.listen(3000,()=>{
    connectToMongo();
    console.log("backend is connected")
});