const Game = require("../models/game");

// GET /game
const allGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /game
const createGame = async (req, res) => {
  try {
    const game = await Game.create(req.body);
    res.status(201).json(game);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET /game/:id
const detailGame = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) return res.status(404).json({ message: "Game not found" });
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT /game/:id
const updateGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!game) return res.status(404).json({ message: "Game not found" });
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE /game/:id
const deleteGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndDelete(req.params.id);
    if (!game) return res.status(404).json({ message: "Game not found" });
    res.status(200).json({ message: "Game deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { allGames, createGame, detailGame, updateGame, deleteGame };
