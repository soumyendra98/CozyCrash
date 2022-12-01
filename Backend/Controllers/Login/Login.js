const Login = require("../../Models/Login");
const config = require("../../config.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const authenticateUser = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  const user = await Login.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  const isMatch = password === user.password;
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid Credentials" });
  }
  const payload = {
    user: {
      id: user.id,
    },
  };
  jwt.sign(payload, config.secret, { expiresIn: "7d" }, (err, token) => {
    if (err) throw err;
    res.json({ token });
  });
};

const getAllUsers = async (req, res) => {
  const users = await Login.find().select("-password");
  res.json(users);
};

module.exports = { authenticateUser, getAllUsers };
