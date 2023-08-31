const ContactRepository = require("../repositories/contactRepository");

const BaseController = require("./baseController");

class ContactController extends BaseController {
  constructor() {
    super(ContactRepository);
  }
}

module.exports = ContactController;
