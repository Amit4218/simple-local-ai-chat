import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    // example logic
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // assume token is valid, continue to the next middleware
    next();
  } catch (error) {
    console.error("Auth error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default authMiddleware;
