import db from "../../src/db.js";

export default async function runMigrations() {
  try {
    await db.query(`CREATE TABLE IF NOT EXISTS CommunityCocMembers (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    )`);
    console.log("Migration complete");
  } catch (err) {
    console.error("Migration failed:", err);
    throw err;
  }
}
