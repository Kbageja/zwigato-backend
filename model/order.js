import mongoose from "mongoose";
import { connectDB } from "../data/database.js";
import { config } from "dotenv";
config({
    path:"./data/config.env",
})
connectDB();
const schema = new mongoose.Schema({
    name:String,
    order:{
        type:Array,
        default:[],
    },
    orderedAt:{
        type:Date,
        default:Date.now(),
    },
    totalprice:{
        type:Number,
        required:true,
    }
    })

    export const  Orders  = mongoose.model("Orders",schema);