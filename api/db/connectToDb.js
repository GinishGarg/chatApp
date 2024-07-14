import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();
const connectToMongo = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("database connected")
        
    } catch (error) {
        console.log("Error connecting to database:",error.message)
    }
}



export default connectToMongo;