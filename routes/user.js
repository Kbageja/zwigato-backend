import express from 'express';
import { getAlluser, getmyprofile, login, logout, register } from '../controllers/user.js';
import { isAuthenticated } from '../middlewares/auth.js';
const router  = express.Router();

router.get("/all",getAlluser);
router.post("/register",register)
router.post("/login",login)
router.get("/logout",isAuthenticated,logout);
router.get("/me",isAuthenticated,getmyprofile);

export default router;