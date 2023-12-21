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

router.get("/:id", connectDatabase, async (req, res, next) => {
  let idArticle = req.params.id;
  const resDB = await SchemaArticles.findOne({ id: idArticle });
  if (!resDB) {
    throw new Error("Article not found.");
  }
  res.status(200).json({
    status: "OK",
    statusMensagem: "Books listed in response successfully.",
    response: resDB,
  });
});

router.post("/", connectDatabase, async (req, res, next) => {
  const news = await SchemaArticles.create(
    ({
      id,
      title,
      url,
      image_url,
      new_site,
      summary,
      published_at,
      updated_at,
      featured,
      launches,
      events,
    } = req.body)
  );
  res.status(201).json(news);
});

module.exports = router;
