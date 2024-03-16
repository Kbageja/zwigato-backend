import mongoose from "mongoose";
import { connectDB } from "../data/database.js";
import { config } from "dotenv";
config({
    path:"./data/config.env",
})
connectDB();
const schema = new mongoose.Schema({
    name:String,
    quantity:{
        type:Number,
        default:1,

    },
    order:{
        type:String,
        required:true,
    },
    orderedAt:{
        type:Date,
        default:Date.now(),
    },
    price:{
        type:Number,
        required:true,
    }
    })

    export const  Orders  = mongoose.model("Orders",schema);