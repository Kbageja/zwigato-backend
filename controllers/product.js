import { Product } from "../model/product.js";


export const Productcontroller = async(req,res)=>{
    const {productname,Price,quantity} = req.body;
    let Products = await Product.create({
        Username:req.user.name,
        productname,
        Price,
    })
    res.status(200).json({
        success:true,
        message:"Product recorded"
    })

}
export const getMyProducts = async(req,res) =>{
    try {
        let username = req.user.name;
      
        let userProducts = await Product.find({Username:username});
        
        
        res.status(200).json({
            success: true,
            userProducts,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
    
}