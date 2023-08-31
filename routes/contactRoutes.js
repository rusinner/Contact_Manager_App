const express = require("express");

const ContactController = require("../controllers/contactController");
const router = express.Router();
const contactController = new ContactController();

//in this route i will place the controller methods
router.get("/getall", contactController.getAll);
router.get("/get/:id", contactController.getById);
router.post("/create", contactController.add);
router.put("/update/:id", contactController.update);
router.delete("/delete/:id", contactController.deleteById);

module.exports = router;
