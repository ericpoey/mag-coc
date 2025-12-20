import express from "express";
import db from "../../config/db.js";

const router = express.Router();

// GET /accounts?clanTag=XXXX
router.get("/", async (req, res) => {
  const { clanTag } = req.query;
  if (!clanTag) {
    return res.status(400).json({ status: 400, error: "Missing clanTag" });
  }

  try {
    const [rows] = await db.query("SELECT * FROM accounts WHERE clanTag = ?", [clanTag]);
    if (rows.length === 0) {
      return res.status(404).json({ status: 404, error: "Accounts not found" });
    }
    res.json({ status: "ok", data: rows });
  } catch (err) {
    res.status(500).json({ status: 500, error: "Database error", details: err.message });
  }
});

export default router;
