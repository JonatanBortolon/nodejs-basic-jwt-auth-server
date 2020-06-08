const router = require("express").Router();
const jwtAuth = require("../verifyJwtToken.js");

router.post("/isauth", jwtAuth, async (req, res) => {
  res.send("YES");
});

module.exports = router;
