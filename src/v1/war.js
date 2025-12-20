import express from "express";
import db from "../../config/db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const { clanTag } = req.query;
  if (!clanTag) return res.status(400).json({ error: "Missing clanTag" });

  try {
    const [rows] = await db.query("SELECT * FROM wars WHERE clanTag = ?", [clanTag]);
    res.json({ status: "ok", data: rows });
  } catch (err) {
    res.status(500).json({ error: "Database error", details: err.message });
  }
});

export default router;
