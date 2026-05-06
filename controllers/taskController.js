const Task = require("../models/taskModel");

exports.createTask = async (req, res) => {
  try {
    const { title } = req.body;

    const task = new Task({
      title,
      user: req.userId,
    });

    await task.save();

    res.status(201).json({
      message: "Task created",
      task,
    });
  } catch (err) {
    res.status(500).json({ message: "Error" });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      user: req.userId,
    });

    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Error" });
  }
};
