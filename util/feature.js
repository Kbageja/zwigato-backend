import jwt from 'jsonwebtoken';
export const sendcookie = (user,res,message)=>{
const token = jwt.sign({_id:user._id},process.env.SECRET)
res
.status(200)
.cookie("token", token, {
  maxAge: 20 * 60 * 1000,
  httpOnly: true,
  sameSite: "none",
  secure: true,
  path: "/",
})
.json({
  success: true,
  message,
});

}