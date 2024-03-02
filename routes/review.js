import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { allreview, newreview } from "../controllers/review.js";

const router = express.Router();
router.post("/newreview",isAuthenticated,newreview);
router.get("/allreview",isAuthenticated,allreview);
export default router;