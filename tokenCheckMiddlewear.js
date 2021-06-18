const jwt = require("jsonwebtoken");
const config = require("./config");

module.exports = (req, res, next) => {
  if (req.method === "OPTION") {
    return next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ token: null, message: "Sign in to continue" });
    }
    const validToken = jwt.verify(token, config.jwt);
    req.user = validToken;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ token: null, message: "Sign in to continue" });
  }
};
