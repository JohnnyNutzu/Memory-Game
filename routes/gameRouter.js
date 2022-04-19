const express = require("express");
const { gameView } = require("../controler/gameController");


const router = express.Router();

router.get("/game", gameView);




module.exports = router;