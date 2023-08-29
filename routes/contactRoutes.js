const express = require("express");
const {
  getAllContacts,
  createContact,
  getContactById,
  updateContactById,
  deleteContactById,
} = require("../controllers/contactController");
const router = express.Router();

//in this route i will place the controller methods
router.get("/getall", getAllContacts);
router.get("/get/:id", getContactById);
router.post("/create", createContact);
router.put("/update/:id", updateContactById);
router.delete("/delete/:id", deleteContactById);

module.exports = router;
