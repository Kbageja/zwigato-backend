import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";

import { Productcontroller, getMyProducts } from "../controllers/product.js";

const router  = express.Router();


router.post("/product",isAuthenticated,Productcontroller);
router.get("/getMyProducts",isAuthenticated,getMyProducts);
export default router;