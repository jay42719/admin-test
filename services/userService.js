const userModel = require("../models/userModel");

class userService {
  async create(model) {
    return userModel.create(model);
  }

  async getOneUser(where = {}) {
    return userModel.findOne(where);
  }

  async getUserById(id) {
    return userModel.findById(id);
  }

  async updateUserById(id, data) {
    return userModel.findByIdAndUpdate(id, data);
  }
}

module.exports = new userService();
