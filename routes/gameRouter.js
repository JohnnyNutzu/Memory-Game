const express = require("express");
const { gameView } = require("../controler/gameController");


const router = express.Router();

router.get("/", gameView);




module.exports = router;