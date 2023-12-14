const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
    },
    news_site: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    published_at: {
      type: String,
    },
    updated_at: {
      type: String,
    },
    featured: {
      type: Boolean,
    },
    lauches: [
      {
        id: {
          type: String,
        },
        providers: {
          type: String,
        },
      },
    ],
    events: [
      {
        id: {
          type: String,
        },
        providers: {
          type: String,
        },
      },
    ],
  },
  {
    timestamp: true,
  }
);

const SchemaArticles =
  mongoose.models.Articles || mongoose.model("Articles", schema);

module.exports = SchemaArticles;
