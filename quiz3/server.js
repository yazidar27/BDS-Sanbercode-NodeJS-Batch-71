const express = require("express");
const mongoose = require("mongoose");
const gameRoutes = require("./routes/gameRoutes");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/quiz3")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/v1", gameRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
