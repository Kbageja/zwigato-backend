import cookieParser from 'cookie-parser';
import express from 'express';
import Userrouter from "./routes/user.js";
import Reviewrouter from "./routes/review.js";
import contactrouter from "./routes/contact.js";
import orderrouter from "./routes/order.js";
import productrouter from "./routes/product.js"
import cors from "cors";
import { config } from 'dotenv';
config({
    path:"./data/config.env",
})

export const app  = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTENDURL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))
console.log(process.env.FRONTENDURL)
app.use("/user",Userrouter);
app.use("/review",Reviewrouter);
app.use("/usercontact",contactrouter)
app.use("/userorders",orderrouter);
app.use("/userproduct",productrouter)
app.use("/",(req,res)=>{
    res.send("nice working");
})