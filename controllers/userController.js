const User = require("../models/userModel");
const Task = require("../models/taskModel");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { name, password } = req.body;

    if (!name || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({ message: "User registered" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { name, password } = req.body;

    const user = await User.findOne({ name });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");

    const totalTasks = await Task.countDocuments({
      user: req.userId,
    });

    const completedTasks = await Task.countDocuments({
      user: req.userId,
      completed: true,
    });

    res.json({
      user,
      totalTasks,
      completedTasks,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error fetching profile" });
  }
};
