import express from "express";
import v1Router from "./src/v1/index.js";

const app = express();
const port = process.env.PORT || 3000;

// Mount all v1 routes
app.use("/v1", v1Router);

app.listen(port, () => {
  console.log(`MAG API running on port ${port}`);
});
