import express from "express";
import war from "./war.js";
import accounts from "./accounts.js";
import clan from "./clan.js";
import league from "./league.js";

const router = express.Router();

router.use("/war", war);
router.use("/accounts", accounts);
router.use("/clan", clan);
router.use("/league", league);

export default router;
