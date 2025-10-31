const User = require("../models/user.model");

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const user = await User.create({ name, email, password, role });
    res.status(201).json({
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
