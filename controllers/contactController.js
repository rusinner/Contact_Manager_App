const getAllContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

const getContactById = (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `Get contact with ${id}` });
};

const createContact = (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error({ message: "All fields are mandatory" });
  } else {
    res.status(200).json({ message: "Contact has been created" });
  }
};

const updateContactById = (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `Contact with ${id} has been updated` });
};

const deleteContactById = (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `Contact with ${id} has been deleted` });
};

module.exports = {
  getAllContacts,
  createContact,
  getContactById,
  updateContactById,
  deleteContactById,
};
