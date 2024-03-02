import mongoose from "mongoose";
export const connectDB = ()=>{
    mongoose.connect(process.env.MongoURI,{
        dbName:"zwigatobackend",
    }).then(()=>console.log("Database connected")).catch((e)=>console.log(e));
};