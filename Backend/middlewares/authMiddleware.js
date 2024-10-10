const jwt = require("jsonwebtoken");
const authMiddleware = (roles = []) => {
  return (req, res, next) => {
    console.log("Request Headers:", req.headers);
    const token = req.headers["authorization"];

    if (!token) {
      return res
        .status(401)
        .json({ message: "No token, authorization denied." });
    }

    try {
      const bearer = token.split(" ");
      const bearerToken = bearer[1];

      const decoded = jwt.verify(bearerToken, process.env.JWT_SECRET);
      req.user = decoded;

      if (roles.length && !roles.includes(req.user.role)) {
        return res
          .status(403)
          .json({ message: "Access denied, insufficient permissions." });
      }

      next();
    } catch (err) {
      console.error("Token verification failed:", err);
      return res.status(401).json({ message: "Token is not valid." });
    }
  };
};

module.exports = authMiddleware;
