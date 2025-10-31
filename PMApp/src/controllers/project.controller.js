const Project = require("../models/project.model");

exports.createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json({
      message: "Project created successfully",
      data: project,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
