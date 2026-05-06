require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const userRoutes = require("./routes/userRoutes");

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Streakify API Running");
});

app.use("/api", userRoutes);

app.listen(3000, () => {
  console.log("Server running...");
});
