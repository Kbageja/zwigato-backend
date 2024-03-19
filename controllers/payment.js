import { instance } from "../server.js";
import crypto from "crypto";

// Function to generate HMAC-SHA256 signature
function generateHmacSha256(data, key) {
    const hmac = crypto.createHmac("sha256", key);
    hmac.update(data);
    return hmac.digest("hex");
}

export const checkout = async (req, res) => {
    try {
        const options = {
            amount: Number(req.body.checkvalue * 100),  // amount in the smallest currency unit
            currency: "INR",
        };
        const order = await instance.orders.create(options);
        res.status(200).json({
            success: true,
            order,
        });
    } catch (error) {
        console.log(error);
        console.log("yoo");
    }
}

export const paymentverification = async (req, res) => {
    try {
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
        const generated_signature = generateHmacSha256(razorpay_order_id + "|" + razorpay_payment_id, process.env.Razorkeysecret);
        res.send("hello");

        if (generated_signature === razorpay_signature) {
            try {
                res.redirect("https://zwigato-omega.vercel.app/api/verify");
                res.status(200).json({
                    success: true,
                    message: "Payment is successfulll",
                });
            } catch (error) {
                res.status(400).json({
                    success:false,
                    message:"payment is unsuccessfull"
                })
                
            }
            res.status(200).json({
                success: true,
                message: "Payment is successful",
            });
        } else {
            res.status(400).json({
                success: false,
                message: "Signature verification failed",
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}


export const getkey = async (req, res) => {
    try {
        res.status(200).json({
            key: process.env.Razorpaykey,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}
