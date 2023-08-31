const BaseRepository = require("./baseRepository");

const contact = require("../models/contactModel");

class ContactRepository extends BaseRepository {
  constructor() {
    super(contact);
  }
}

module.exports = ContactRepository;
