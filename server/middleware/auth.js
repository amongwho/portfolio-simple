const jwt = require("jsonwebtoken");

// authentication middleware - expects a valid JWT in x-auth-token header
module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    // use the same environment variable name as the auth routes
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token not valid" });
  }
};
