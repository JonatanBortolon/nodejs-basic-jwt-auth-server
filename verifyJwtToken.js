const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Acess danied!");

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.body = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid token!");
  }
};
