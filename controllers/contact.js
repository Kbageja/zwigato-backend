import { contact } from "../model/contact.js";

export const  contactUs = async (req,res) =>{
    const {message} = req.body;
    let Contact  = await contact.create({
        name:req.user.name,
        email:req.user.email,
        message,
    })
    res.status(201).json({
        success:true,
        message:"your message has been saved"
    })
}