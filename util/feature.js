import jwt from 'jsonwebtoken';
export const sendcookie = (user,res,message)=>{
const token = jwt.sign({_id:user._id},process.env.SECRET)
res.status(201).cookie("token",token,{
    httpOnly:true,
    sameSite:"none",
    secure:true,

    
}).json({
    success:true,
    message,
})
}