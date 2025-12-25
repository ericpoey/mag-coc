import express from "express";
import db from "../../config/db.js";

const router = express.Router();

// Health check
router.get("/alive", (req, res) => {
  res.json({ ok: true, service: "clan" });
});

// GET /clan?clanTag=XXXX
router.get("/", async (req, res) => {
  const { clanTag } = req.query;
  if (!clanTag) {
    return res.status(400).json({ status: 400, error: "Missing clanTag" });
  }

  try {
    const [rows] = await db.query("SELECT * FROM clans WHERE clanTag = ?", [clanTag]);
    if (rows.length === 0) {
      return res.status(404).json({ status: 404, error: "Clan not found" });
    }
    res.status(200).json({ status: "ok", data: rows[0] });
  } catch (err) {
    console.error("DB error:", err.message);
    res.status(500).json({ status: 500, error: "Database error", details: err.message });
  }
});

export default router;
