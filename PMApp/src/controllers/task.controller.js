const Task = require("../models/task.model");

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({
      message: "Task created successfully",
      data: task,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
