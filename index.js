import express from "express";
import cocRoutes from "./src/v1/index.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use("/v1", cocRoutes);

app.listen(PORT, () => {
  console.log(`COC API running on port ${PORT}`);
});
