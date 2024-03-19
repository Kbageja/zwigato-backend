import jwt from "jsonwebtoken";
import { User } from "../model/user.js";

export const isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(404).json({
            success: false,
            message: "Login first",
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        req.user = await User.findById(decoded._id);
        next();
    } catch (err) {
        if (err.name === "TokenExpiredError") {
            return res.status(401).json({
                success: false,
                message: "Token expired",
            });
        }
        return res.status(401).json({
            success: false,
            message: "Invalid token",
        });
    }
};
