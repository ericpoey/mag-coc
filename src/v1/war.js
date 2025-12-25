import express from "express";
import db from "../../config/db.js";

const router = express.Router();

// Health check
router.get("/alive", (req, res) => {
  res.json({ ok: true, service: "war" });
});

// Example: GET /war?warId=XXXX
router.get("/", async (req, res) => {
  const { warId } = req.query;
  if (!warId) {
    return res.status(400).json({ status: 400, error: "Missing warId" });
  }

  try {
    const [rows] = await db.query("SELECT * FROM wars WHERE warId = ?", [warId]);
    if (rows.length === 0) {
      return res.status(404).json({ status: 404, error: "War not found" });
    }
    res.status(200).json({ status: "ok", data: rows[0] });
  } catch (err) {
    console.error("DB error:", err.message);
    res.status(500).json({ status: 500, error: "Database error", details: err.message });
  }
});

export default router;
