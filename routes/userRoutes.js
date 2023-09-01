const express = require("express");

const UserController = require("../controllers/userController");
const router = express.Router();
const userController = new UserController();

//in this route i will place the controller methods
router.post("/register", userController.add);
router.post("/login", userController.login);
router.get("/getcurrent", userController.getById);

module.exports = router;
