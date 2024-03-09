import mongoose from "mongoose";
import { connectDB } from "../data/database.js";
import { config } from "dotenv";
config({
    path:"./data/config.env",
})
connectDB();
const schema = new mongoose.Schema({
    Username:String,
    productname:String,
    Price:Number,
    Addedat:{
       type:Date,
       default:Date.now(),
    }
})
export const Product = mongoose.model("Product",schema);
