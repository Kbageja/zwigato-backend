import {app} from "./app.js";
import Razorpay from "razorpay";


export const instance = new Razorpay({
    key_id:process.env.Razorpaykey,
    key_secret:process.env.Razorkeysecret,
  });

app.listen(5000,()=>{
    console.log("server is working ");
})