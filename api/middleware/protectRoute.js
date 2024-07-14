import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

const protectRoute = async (req, res, next) => {
  try {
      console.log(req.cookies);
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: "No token found" });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_KEY
    );

    if (!decoded) {
      return res.status(401).json({ error: "Invalid token" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("Error in Protect route middleware:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default protectRoute;
