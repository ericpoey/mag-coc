import express from "express";
import war from "./war.js";
import accounts from "./accounts.js";
import clan from "./clan.js";
import league from "./league.js";
import coc from "./coc.js";

// import the admin router
import admin from "../../admin/src/index.js";

const router = express.Router();

router.use("/war", war);
router.use("/accounts", accounts);
router.use("/clan", clan);
router.use("/league", league);
router.use("/coc", coc);

// mount admin routes under /admin
router.use("/admin", admin);
export default router;
