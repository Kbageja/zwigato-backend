import cookieParser from 'cookie-parser';
import express from 'express';
import Userrouter from "./routes/user.js";
import Reviewrouter from "./routes/review.js";
import contactrouter from "./routes/contact.js";
import orderrouter from "./routes/order.js";
import cors from "cors";

export const app  = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTENDURL],
    methods:["GET","POST"],
    credentials:true,
}))
app.use("/user",Userrouter);
app.use("/review",Reviewrouter);
app.use("/usercontact",contactrouter)
app.use("/userorders",orderrouter);
app.use("/",(req,res)=>{
    res.send("nice working");
})