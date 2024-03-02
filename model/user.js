import mongoose from "mongoose";
import { connectDB } from "../data/database.js";
import {config} from "dotenv";
config({
    path:"./data/config.env",
})
connectDB();
const schema =  new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        select:false,
     },
     createdAt:{
        type:Date,
        default:Date.now(),
     }
})
export const User  = mongoose.model("User",schema);