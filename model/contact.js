import mongoose from "mongoose";
import { connectDB } from "../data/database.js";
import { config } from "dotenv";
config({
    path:"./data/config.env",
})
connectDB();
const schema = new mongoose.Schema({
    name:String,
    email:String,
    message:String,
    submittedAt:{
        type:Date,
        default:Date.now(),
    },
})
export const contact = mongoose.model("contact",schema);