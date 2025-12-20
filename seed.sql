-- Clans
INSERT INTO clans (clanTag, name, description, level, membersCount)
VALUES 
('#ABC123', 'Warriors', 'Top clan in town', 10, 45),
('#DEF456', 'Raiders', 'Aggressive war clan', 8, 40),
('#GHI789', 'Builders', 'Focused on base design', 12, 50);

-- Leagues
INSERT INTO leagues (clanTag, leagueName, leagueLevel, trophies, season)
VALUES
('#ABC123', 'Crystal League', 2, 1500, '2025-12'),
('#DEF456', 'Gold League', 1, 1200, '2025-12'),
('#GHI789', 'Master League', 3, 2000, '2025-12');

-- Accounts
INSERT INTO accounts (playerTag, clanTag, playerName, townHallLevel, role, trophies)
VALUES
('#P123', '#ABC123', 'EricTheGreat', 14, 'Leader', 3200),
('#P124', '#ABC123', 'MightyMike', 12, 'Co-Leader', 2800),
('#P125', '#DEF456', 'SneakySam', 11, 'Member', 2500),
('#P126', '#DEF456', 'WarriorJane', 13, 'Leader', 3100),
('#P127', '#GHI789', 'BuilderBob', 15, 'Leader', 3500),
('#P128', '#GHI789', 'DesignDaisy', 14, 'Co-Leader', 3300);

-- Wars
INSERT INTO wars (clanTag, opponentTag, opponentName, startTime, endTime, clanStars, opponentStars, clanDestruction, opponentDestruction, result)
VALUES
('#ABC123', '#XYZ789', 'Dark Knights', '2025-12-01 10:00:00', '2025-12-02 10:00:00', 30, 28, 95.5, 89.2, 'Win'),
('#DEF456', '#LMN111', 'Storm Breakers', '2025-12-05 12:00:00', '2025-12-06 12:00:00', 25, 27, 88.0, 90.5, 'Loss'),
('#GHI789', '#OPQ222', 'Base Masters', '2025-12-10 15:00:00', '2025-12-11 15:00:00', 32, 32, 96.0, 96.0, 'Draw');
