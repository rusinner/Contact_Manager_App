const UserRepository = require("../repositories/userRepository");

const BaseController = require("./baseController");

class UserController extends BaseController {
  constructor() {
    super(UserRepository);
  }
}

module.exports = UserController;
