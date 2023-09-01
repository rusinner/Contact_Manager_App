const BaseRepository = require("./baseRepository");

const user = require("../models/userModel");

class UserRepository extends BaseRepository {
  constructor() {
    super(user);
  }
}

module.exports = UserRepository;
