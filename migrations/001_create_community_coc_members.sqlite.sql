-- SQLite version of CommunityCocMembers schema
-- Use TEXT instead of ENUM, and adjust timestamp defaults

CREATE TABLE IF NOT EXISTS CommunityCocMembers (
    tag TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT NOT NULL, -- values: NOT_MEMBER, MEMBER, LEADER, ADMIN, COLEADER
    townHallLevel INTEGER,
    expLevel INTEGER,
    leagueId INTEGER,
    leagueName TEXT,
    trophies INTEGER,
    clanRank INTEGER,
    previousClanRank INTEGER,
    donations INTEGER,
    donationsReceived INTEGER,
    created DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated DATETIME DEFAULT CURRENT_TIMESTAMP
);



-- 🔑 Key Adjustments
-- - ENUM → TEXT: SQLite doesn’t support ENUM, so role is stored as TEXT. You’ll enforce valid values at the app level.
-- - TIMESTAMP → DATETIME: SQLite uses DATETIME DEFAULT CURRENT_TIMESTAMP.
-- - VARCHAR → TEXT: SQLite doesn’t distinguish length limits, so TEXT is used.

-- 🎯 Usage
--- Keep your original 001_create_community_coc_members.sql for SIT/PROD (MySQL).
---  Add this new file 001_create_community_coc_members.sqlite.sql for local dev.