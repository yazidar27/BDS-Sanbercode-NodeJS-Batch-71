const express = require("express");
const app = express();

app.use(express.json());

// Import routes
const userRoutes = require("./routes/user.route");
const projectRoutes = require("./routes/project.route");
const taskRoutes = require("./routes/task.route");

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/project", projectRoutes);
app.use("/api/v1/task", taskRoutes);

module.exports = app;
