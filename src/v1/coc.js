import express from "express";
import axios from "axios";
import db from "../../config/db.js";

const router = express.Router();

// Health check
router.get("/alive", (req, res) => {
  res.json({ ok: true, service: "coc" });
});

// GET /coc/:clanTag/members
router.get("/:clanTag/members", async (req, res) => {
  const { clanTag } = req.params;

  if (!clanTag) {
    return res.status(400).json({ status: 400, error: "Missing clanTag" });
  }

  try {
    // Fetch members from Clash of Clans API
    const response = await axios.get(
      `https://api.clashofclans.com/v1/clans/%23${clanTag}/members`,
      {
        headers: { Authorization: `Bearer ${process.env.COC_API_TOKEN}` }
      }
    );

    const members = response.data.items;

    // Sync each member into DB
    for (const m of members) {
      const [existing] = await db.query(
        "SELECT tag FROM CommunityCocMembers WHERE tag = ?",
        [m.tag]
      );

      if (existing.length > 0) {
        // Update existing record
        await db.query(
          `UPDATE CommunityCocMembers
           SET name=?, role=?, townHallLevel=?, expLevel=?, leagueId=?, leagueName=?, trophies=?, clanRank=?, previousClanRank=?, donations=?, donationsReceived=?, updated=datetime('now')
           WHERE tag=?`,
          [
            m.name,
            m.role,
            m.townHallLevel,
            m.expLevel,
            m.league?.id || null,
            m.league?.name || null,
            m.trophies,
            m.clanRank,
            m.previousClanRank,
            m.donations,
            m.donationsReceived,
            m.tag
          ]
        );
      } else {
        // Insert new record
        await db.query(
          `INSERT INTO CommunityCocMembers
           (tag, name, role, townHallLevel, expLevel, leagueId, leagueName, trophies, clanRank, previousClanRank, donations, donationsReceived, created, updated)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))`,
          [
            m.tag,
            m.name,
            m.role,
            m.townHallLevel,
            m.expLevel,
            m.league?.id || null,
            m.league?.name || null,
            m.trophies,
            m.clanRank,
            m.previousClanRank,
            m.donations,
            m.donationsReceived
          ]
        );
      }
    }

    res.status(200).json({ status: "ok", count: members.length });
  } catch (err) {
    console.error("COC API error:", err.response?.data || err.message);
    res.status(err.response?.status || 500).json({
      status: err.response?.status || 500,
      error: err.response?.data || "Unknown error"
    });
  }
});

export default router;
