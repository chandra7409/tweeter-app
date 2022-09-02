const express = require("express");

const {
  loginUser,
  registerUser,
  getAllUsers,
} = require("../controllers/authController");

const { checkToken } = require("../middlewares/index");

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/users/all", [checkToken], getAllUsers);

module.exports = router;
