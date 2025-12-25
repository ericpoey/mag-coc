CREATE TABLE IF NOT EXISTS CommunityCocMembers (
    tag VARCHAR(15) PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    role ENUM('NOT_MEMBER','MEMBER','LEADER','ADMIN','COLEADER') NOT NULL,
    townHallLevel INT,
    expLevel INT,
    leagueId INT,
    leagueName VARCHAR(50),
    trophies INT,
    clanRank INT,
    previousClanRank INT,
    donations INT,
    donationsReceived INT,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
