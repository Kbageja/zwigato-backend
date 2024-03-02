import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { contactUs } from "../controllers/contact.js";

const router=  express.Router();

router.post("/contact",isAuthenticated,contactUs);
export default router;