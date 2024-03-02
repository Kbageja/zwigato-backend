import { Orders } from "../model/order.js"
export const neworder = async (req,res)=>{
    const {order,totalprice} = req.body;
    const o = await Orders.create({
        name:req.user.name,
        order,
        totalprice,
    })
    res.status(200).json({
        success:true,
        message:"Thank you for ordering",
    })
}
export const previousorders = async (req, res) => {
    try {
        let username = req.user.name;
        let userOrders = await Orders.find({name:username});
        
        
        res.status(200).json({
            success: true,
            userOrders,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};