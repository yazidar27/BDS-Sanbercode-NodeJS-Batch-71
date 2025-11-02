const express = require("express");
const router = express.Router();
const {
  getAllProjects,
  createProject,
  getProjectById,
  updateProject,
  deleteProject,
} = require("../controllers/project.controller");

// Endpoint CRUD Project
router.get("/", getAllProjects); // index
router.post("/", createProject); // store
router.get("/:id", getProjectById); // show
router.put("/:id", updateProject); // update
router.delete("/:id", deleteProject); // delete

module.exports = router;
