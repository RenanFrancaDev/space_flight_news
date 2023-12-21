var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  try {
    res.send("respond with a resource");
  } catch {
    res.status(500).json("internal server error");
  }
});

module.exports = router;
