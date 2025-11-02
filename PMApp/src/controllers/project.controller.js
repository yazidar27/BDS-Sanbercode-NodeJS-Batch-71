const Project = require("../models/project.model");

//  [1] GET
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate("createdBy", "name email");
    res.status(200).json({
      message: "All projects retrieved successfully",
      data: projects,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// [2] POST
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

// [3] GET
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate(
      "createdBy",
      "name email"
    );
    if (!project) return res.status(404).json({ message: "Project not found" });

    res.status(200).json({
      message: "Project retrieved successfully",
      data: project,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// [4] PUT
exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!project) return res.status(404).json({ message: "Project not found" });

    res.status(200).json({
      message: "Project updated successfully",
      data: project,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// [5] DELETE
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
