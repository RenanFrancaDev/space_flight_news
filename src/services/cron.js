const cron = require("node-cron");
const axios = require("axios");

cron.schedule("*/1 * * * *", async () => {
  const resApi = await axios.get(
    "https://api.spaceflightnewsapi.net/v4/articles/?limit=10&offset=0"
  );
  const result = resApi.data.results;

  await SchemaArticles.deleteMany({ id: { $gte: 1 } });

  await SchemaArticles.create(result);
});
