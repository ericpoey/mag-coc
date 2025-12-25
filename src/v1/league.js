import express from "express";
import db from "../../config/db.js";

const router = express.Router();

// Health check
router.get("/alive", (req, res) => {
  res.json({ ok: true, service: "league" });
});

// Example: GET /league?leagueId=XXXX
router.get("/", async (req, res) => {
  const { leagueId } = req.query;
  if (!leagueId) {
    return res.status(400).json({ status: 400, error: "Missing leagueId" });
  }

  try {
    const [rows] = await db.query("SELECT * FROM leagues WHERE leagueId = ?", [leagueId]);
    if (rows.length === 0) {
      return res.status(404).json({ status: 404, error: "League not found" });
    }
    res.status(200).json({ status: "ok", data: rows[0] });
  } catch (err) {
    console.error("DB error:", err.message);
    res.status(500).json({ status: 500, error: "Database error", details: err.message });
  }
});

export default router;
