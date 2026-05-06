const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    password: String,

    streak: {
      type: Number,
      default: 0,
    },
    lastCompletedDate: Date,
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
