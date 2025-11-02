const express = require("express");
const router = express.Router();
const {
  allGames,
  createGame,
  detailGame,
  updateGame,
  deleteGame,
} = require("../controllers/gameController");

router.get("/game", allGames);
router.post("/game", createGame);
router.get("/game/:id", detailGame);
router.put("/game/:id", updateGame);
router.delete("/game/:id", deleteGame);

module.exports = router;
