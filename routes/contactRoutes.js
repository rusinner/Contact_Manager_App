const express = require("express");
const validateToken = require("../middleware/validateTokenHandler");

const ContactController = require("../controllers/contactController");
const router = express.Router();
const contactController = new ContactController();

router.use(validateToken);

//in this route i will place the controller methods
router.get("/getall", contactController.getAllByUser);
router.get("/get/:id", contactController.getById);
router.post("/create", contactController.add);
router.put("/update/:id", contactController.update);
router.delete("/delete/:id", contactController.deleteById);

module.exports = router;
