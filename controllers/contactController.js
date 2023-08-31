const ContactRepository = require("../repositories/contactRepository");

const BaseController = require("./baseController");

class ContactController extends BaseController {
  constructor() {
    super(ContactRepository);
  }
}

module.exports = ContactController;

// const asyncHandler = require("express-async-handler");
// const Contact = require("../models/contactModel");

// const getAllContacts = asyncHandler(async (req, res) => {
//   const contacts = await Contact.find();
//   res.status(200).json(contacts);
// });

// const getContactById = asyncHandler(async (req, res) => {
//   const id = req.params.id;
//   const contact = await Contact.findById(id);
//   if (!contact) {
//     res.status(404);
//     throw new Error("Contact not found");
//   } else {
//     res.status(200).json(contact);
//   }
// });

// const createContact = asyncHandler(async (req, res) => {
//   const { name, email, phone } = req.body;
//   if (!name || !email || !phone) {
//     res.status(400);
//     throw new Error("All fields are mandatory");
//   } else {
//     const contact = await Contact.create({
//       name,
//       email,
//       phone,
//     });
//     res.status(201).json(contact);
//   }
// });

// const updateContactById = asyncHandler(async (req, res) => {
//   const id = req.params.id;
//   const contact = await Contact.findById(id);
//   if (!contact) {
//     res.status(404);
//     throw new Error("Contact not found");
//   } else {
//     const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
//       new: true,
//     });
//     res.status(200).json(updatedContact);
//   }
// });

// const deleteContactById = asyncHandler(async (req, res) => {
//   const id = req.params.id;
//   await res
//     .status(200)
//     .json({ message: `Contact with ${id} has been deleted` });
// });

// module.exports = {
//   getAllContacts,
//   createContact,
//   getContactById,
//   updateContactById,
//   deleteContactById,
// };
