const express = require("express");

const UserController = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();
const userController = new UserController();

//in this route i will place the controller methods
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/getcurrent", validateToken, userController.getCurrent);

module.exports = router;
