const axios = require("axios");
const SchemaArticles = require("../models/Articles");
const connectDatabase = require("./db");

(async () => {
  try {
    await connectDatabase();
    const resApi = await axios.get(
      "https://api.spaceflightnewsapi.net/v4/articles/?limit=10&offset=0"
    );
    const result = resApi.data.results;
    await SchemaArticles.deleteMany({ id: { $gte: 1 } });
    const schemaFromDB = await SchemaArticles.create(result);
    console.log("SCHEMA", schemaFromDB);
    console.log("LENGTH", schemaFromDB.length);
    process.exit(0);
  } catch (error) {
    console.log("ERROR", error);
    process.exit(0);
  }
})();
