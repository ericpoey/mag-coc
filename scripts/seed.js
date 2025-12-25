const db = require('../config/db');

async function seed() {
  try {
    await db.query(
      `INSERT INTO CommunityCocMembers
       (tag, name, role, townHallLevel, expLevel, leagueId, leagueName, trophies, clanRank, previousClanRank, donations, donationsReceived, created)
       VALUES ('#TEST123', 'TestPlayer', 'MEMBER', 10, 50, 29000000, 'Crystal League', 2000, 1, 2, 100, 50, NOW())
       ON DUPLICATE KEY UPDATE updated=NOW()`
    );
    console.log('✅ Seed data inserted');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seed failed:', err);
    process.exit(1);
  }
}

seed();
