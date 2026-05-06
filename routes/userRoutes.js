const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);

router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Profile accessed",
    userId: req.userId,
  });
});

module.exports = router;
