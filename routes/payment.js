import express from "express";
import { checkout, getkey, paymentverification } from "../controllers/payment.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/checkout",checkout);
router.post("/verify",paymentverification);
router.get("/getkey",getkey);

export default router;