const Task = require("../models/taskModel");
const User = require("../models/userModel");

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

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.userId,
      },
      req.body,
      { returnDocument: "after" },
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (req.body.completed === true) {
      const user = await User.findById(req.userId);

      const today = new Date();
      const last = user.lastCompletedDate;

      const isSameDay = last && today.toDateString() === last.toDateString();

      const isYesterday =
        last && new Date(today - last) / (1000 * 60 * 60 * 24) === 1;

      if (!last) {
        user.streak = 1;
      } else if (isSameDay) {
        // do nothing
      } else if (isYesterday) {
        user.streak += 1;
      } else {
        user.streak = 1;
      }

      user.lastCompletedDate = today;

      await user.save();
    }

    res.json(task);
  } catch (err) {
    res.status(500).json({ message: "Error" });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.userId,
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error" });
  }
};
