import { User } from "../model/user.js";
import bcrypt from 'bcrypt';
import { sendcookie } from "../util/feature.js";

export const getAlluser = async(req,res)=>{
    let user = await User.find({})
    res.json({
        success:true,
        user,
    })}
export const  getmyprofile = (req,res)=>{
    res.status(200).json({
        success:true,
        user:req.user,

    })}
export const logout = (req,res)=>{
    res.status(200).cookie("token","",{
        expires:new Date(Date.now()),
    sameSite:"none",
    secure:true,
    }).json({
        success:true,
        message:"logout successfully",
    })}
export const register = async(req,res) =>{
    const {name,email,password} = req.body;
    let user = await User.findOne({email});
    if(user){
        return res.status(404).json({
            success:false,
            message:"User already exist",
        });
    }
    else{
        const hashedpassword = await  bcrypt.hash(password,10)
        user = await User.create({
            name,email,password:hashedpassword,
        })
        sendcookie(user,res,"registered succesfully");
    }
}
export const  login = async(req,res) =>{
    const {email,password} = req.body;
    const user = await User.findOne({email}).select("+password")
    if(!user){
        return res.status(404).json({
            success:false,
            message:"invalid email or password",
        })
    }
    else{
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(404).json({
                success:false,
                message:"invalid email or password",
            })
        }
        else{
            sendcookie(user,res,`welcome back,${user.name}`);
        }
    }
}
