var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  try {
    res.send("Fullstack Challenge 2021 🏅 - Space Flight News");
  } catch {
    res.status(500).json("internal server error");
  }
});

module.exports = router;
