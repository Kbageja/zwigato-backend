import { Orders } from "../model/order.js"
export const neworder = async (req,res)=>{
    const {order,price,quantity} = req.body;
    const o = await Orders.create({
        name:req.user.name,
        order,
        price,
        quantity,
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
export const myorder = async(req,res)=>{
    try {
    const {order} = req.body;
    const cartitem  = await Orders.findOne({
        name:req.user.name,
        order,
    })
     let quantity = cartitem.quantity;
    res.json({
        success:true,
        quantity,
    })
}
         catch (error) {
        res.json({
            success:false,
            message:"error occured",
        })
        
    }
}

export const incrementorder = async(req,res)=>{
    try{
    const {order} = req.body;
    const cartitem  = await Orders.findOne({
        name:req.user.name,
        order,
    })
  
    cartitem.quantity++;

    await cartitem.save();

    res.json({
        success:true,
        message:"successfully  updated"
    })
    }
    catch(error){
        res.json({
            success:false,
            message:"error occured",
        })

    }

}
export const decrementorder = async(req,res)=>{
    const {order} = req.body;
    const cartitem  = await Orders.findOne({
        name:req.user.name,
        order,
    })
    cartitem.quantity--;
    await cartitem.save();

    res.json({
        success:true,
        message:"successfully  updated"
    })

}
export const deleteorder =async(req,res)=>{
    try{
    const {order} = req.body;
    await Orders.deleteOne({
        name:req.user.name,
        order,
    })
    res.json({
        success:true,
        message:"successfully deleted"
    })
}
catch(error){
    res.json({
        success:false,
        message:"error occured",
    })


}
    


}