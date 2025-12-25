import express from "express";
import runMigrations from "../scripts/migrate.js";

const router = express.Router();

router.post("/migrate", async (req, res) => {
  const token = req.headers["x-admin-token"];
  if (token !== process.env.ADMIN_TOKEN) {
    return res.status(403).json({ error: "Forbidden" });
  }

  try {
    await runMigrations();
    res.json({ ok: true, message: "Migration complete" });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

export default router;
