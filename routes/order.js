import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { decrementorder, deleteorder, incrementorder, myorder, neworder, previousorders } from "../controllers/order.js";
const router = express.Router();


router.post("/neworder",isAuthenticated,neworder);
router.get("/previousorders",isAuthenticated,previousorders);
router.post("/myorders",isAuthenticated,myorder);
router.put("/neworder/increment",isAuthenticated,incrementorder);
router.put("/neworder/decrement",isAuthenticated,decrementorder);
router.delete("/previousorders/deleteorder",isAuthenticated,deleteorder);

export default  router;