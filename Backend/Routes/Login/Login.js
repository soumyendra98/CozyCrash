const express = require("express");
const router = express.Router();

const loginController = require("../../Controllers/Login/Login");

// Authenticate a user
router.post("/login/authenticate", loginController.authenticateUser);

// Get all users
router.get("/login/getAll", loginController.getAllUsers);

module.exports = router;
