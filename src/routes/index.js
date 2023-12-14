var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Fullstack Challenge 2021 🏅 - Space Flight News");
});

module.exports = router;
