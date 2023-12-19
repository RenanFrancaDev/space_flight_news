const express = require("express");
const SchemaArticles = require("../models/Articles");
const connectDatabase = require("../services/db");
const router = express.Router();
const axios = require("axios");
const cron = require("node-cron");

router.get("/", connectDatabase, async (req, res, next) => {
  const resDB = await SchemaArticles.find();
  res.status(200).json(resDB);
});

// cron.schedule("* * * * * *", () => console.log("teste cron"));

router.get("/api", async (req, res, next) => {
  // res.status(200).json({ mgs: "OK" });

  const resDB = await axios.get(
    "https://api.spaceflightnewsapi.net/v4/articles/?limit=1000&offset=0"
  );
  const result = resDB.data.results;

  res.status(200).json(result);
});

// router.post("/", connectDatabase, async (req, res, next) => {
//   const news = await SchemaArticles.create(
//     ({
//       id,
//       title,
//       url,
//       image_url,
//       new_site,
//       summary,
//       published_at,
//       updated_at,
//       featured,
//       launches,
//       events,
//     } = req.body)
//   );
//   res.status(201).json(news);
// });

module.exports = router;
