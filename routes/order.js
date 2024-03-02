import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { neworder, previousorders } from "../controllers/order.js";
const router = express.Router();


router.post("/neworder",isAuthenticated,neworder);
router.get("/previousorders",isAuthenticated,previousorders);

export default  router;