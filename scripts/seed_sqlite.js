import db from '../config/db.js';

async function seedSqlite() {
  try {
    await db.run(
      `INSERT INTO CommunityCocMembers
       (tag, name, role, townHallLevel, expLevel, leagueId, leagueName, trophies, clanRank, previousClanRank, donations, donationsReceived, created, updated)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))`,
      [
        '#TEST_SQLITE',
        'TestPlayerSQLite',
        'MEMBER',
        9,
        45,
        29000000,
        'Crystal League',
        1800,
        1,
        2,
        80,
        40
      ]
    );

    console.log('✅ SQLite seed data inserted');
    process.exit(0);
  } catch (err) {
    console.error('❌ SQLite seed failed:', err);
    process.exit(1);
  }
}

seedSqlite();

/*
 🔑 Key Adjustments
 Uses db.run instead of db.query (since SQLite’s open() driver exposes .run for inserts).
 Adds datetime('now') for created and updated fields (SQLite syntax).
 Inserts a test row with tag #TEST_SQLITE so you can distinguish it from MySQL seeds.

🎯 Usage
- Run with (in Bash):
    NODE_ENV=local node scripts/seed_sqlite.js
- Check DB (in Sql):
    SELECT * FROM CommunityCocMembers;
- Verify the #TEST_SQLITE row i responded.

 */