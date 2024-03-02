import mongoose from "mongoose";
import { connectDB } from "../data/database.js";
import { config } from "dotenv";
config({
    path:"./data/config.env",
})
connectDB();
const schema = new mongoose.Schema({
    user:String,
    review:String,
    submittedAt:{
        type:Date,
        default:Date.now(),

    }
})
export const Review = mongoose.model("Review",schema);