const express = require("express");

const {
  registerView,
  registerPlayer
} = require("../controler/PlayerController");

const router = express.Router();

router.get("/register", registerView);
router.post("/register", registerPlayer)

module.exports = router;