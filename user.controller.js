const userModel = require("../models/user.model");

// Student Signup
const studentSignup = (req, res) => {
  const { username, password } = req.body;

  // Check if the username is already taken
  if (userModel.getUserByUsername(username)) {
    return res.status(400).json({ message: "Username already exists" });
  }

  // Create a new student user
  const newUser = {
    id: userModel.getAllUsers().length + 1,
    username,
    password,
    role: "student",
  };
  userModel.addUser(newUser);

  return res.status(201).json({ message: "Student signup successful", user: newUser });
};

// Student Login
const studentLogin = (req, res) => {
  const { username, password } = req.body;
  const user = userModel.getUserByUsername(username);

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  return res.json({ message: "Student login successful", user });
};

// Admin Signup
const adminSignup = (req, res) => {
  const { username, password } = req.body;

  // Check if the username is already taken
  if (userModel.getUserByUsername(username)) {
    return res.status(400).json({ message: "Username already exists" });
  }

  // Create a new admin user
  const newUser = {
    id: userModel.getAllUsers().length + 1,
    username,
    password,
    role: "admin",
  };
  userModel.addUser(newUser);

  return res.status(201).json({ message: "Admin signup successful", user: newUser });
};

// Admin Login
const adminLogin = (req, res) => {
  const { username, password } = req.body;
  const user = userModel.getUserByUsername(username);

  if (!user || user.password !== password || user.role !== "admin") {
    return res.status(401).json({ message: "Authentication failed" });
  }

  return res.json({ message: "Admin login successful", user });
};

module.exports = {
  studentSignup,
  studentLogin,
  adminSignup,
  adminLogin
};
