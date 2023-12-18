const express = require("express");
const SchemaArticles = require("../models/Articles");
const connectDatabase = require("../services/db");
const router = express.Router();
const axios = require("axios");

router.get("/", connectDatabase, async (req, res, next) => {
  const resDB = await SchemaArticles.find();
  res.status(200).json(resDB);
});

router.get("/api", async (req, res, next) => {
  // res.status(200).json({ mgs: "OK" });
  const resDB = await axios.get(
    "https://api.spaceflightnewsapi.net/v4/articles/?limit=1000&offset=0"
  );
  const result = resDB.data.results;
  res.status(200).json(result);
});

router.post("/", async (req, res, next) => {
  const resApi = await axios.get(
    "https://api.spaceflightnewsapi.net/v4/articles/?limit=1000&offset=0"
  );
  const result = resApi.data.results;

  var news = await SchemaArticles.deleteMany({ id: { $gte: 1 } });

  news = await SchemaArticles.create(result);

  res.status(201).json(news);
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
