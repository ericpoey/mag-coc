import dotenv from "dotenv";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import mysql from "mysql2/promise";

dotenv.config();

let db;

if (process.env.NODE_ENV === "local") {
  // SQLite for local dev
  db = await open({
    filename: process.env.DB_FILE || "./config/mag_coc.db",
    driver: sqlite3.Database
  });

  // Add helper to mimic MySQL pool style
  db.query = async (sql, params = []) => {
    const rows = await db.all(sql, params);
    return [rows]; // mimic mysql2's [rows] response
  };

} else {
  // MySQL for SIT/PROD
  db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
}

export default db;
