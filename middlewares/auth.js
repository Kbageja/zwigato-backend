
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { User } from "../model/user.js";

export const isAuthenticated = async (req,res,next) =>{
    cookieParser()(req,res,()=>{});
    const {token} = req.cookies;
    if(!token){
        return res.status(404).json({
            success:false,
            message:"login first",
        });
    }
    try{
        const decoded = jwt.verify(token,process.env.SECRET);
        req.user = await User.findById(decoded._id);
        next();
    }catch(err){
        return res.status(401).json({
            success:false,
            message:"invalid token",
        })
    }
};
