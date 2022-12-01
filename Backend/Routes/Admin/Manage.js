const express = require("express");

const router = express.Router();

const manageController = require("../../Controllers/Admin/Manage");

// Route to get List of all users
router.get("/users/getAll/:society_id", manageController.getAllUsers);

// Route to get a user
router.get("/users/get/:id", manageController.getUser);

// Route to create a new user
router.post("/users/create", manageController.createUser);

// Route to edit a user
router.put("/users/edit/:id", manageController.editUser);

// Route to delete a user
router.delete("/users/delete/:id", manageController.deleteUser);

// Route to get List of all Units
router.get("/units/getAll/:society_id", manageController.getAllUnits);

// Route to get a Unit
router.get("/units/get/:id", manageController.getUnit);

// Route to create a new Unit
router.post("/units/create", manageController.createUnit);

// Route to edit a Unit
router.put("/units/edit/:id", manageController.editUnit);

// Route to delete a Unit
router.delete("/units/delete/:id", manageController.deleteUnit);

module.exports = router;
