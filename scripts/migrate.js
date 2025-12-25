import fs from 'fs';
import path from 'path';
import db from '../config/db.js';

async function runMigration() {
  try {
    const file =
      process.env.NODE_ENV === 'local'
        ? 'migrations/001_create_community_coc_members.sqlite.sql'
        : 'migrations/001_create_community_coc_members.sql';

    const sql = fs.readFileSync(path.join(process.cwd(), file), 'utf8');
    await db.query(sql);
    console.log(`✅ Migration applied from ${file}`);
    process.exit(0);
  } catch (err) {
    console.error('❌ Migration failed:', err);
    process.exit(1);
  }
}

runMigration();
