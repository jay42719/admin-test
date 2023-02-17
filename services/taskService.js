const taskModel = require("../models/taskModel");

class taskService {
  async create(model) {
    return taskModel.create(model);
  }

  async getOneTask(where) {
    return taskModel.findOne(where);
  }

  async getTaskById(id) {
    return taskModel.findById(id);
  }

  async update(id, model) {
    return taskModel.findByIdAndUpdate(id, model);
  }

  async remove(id) {
    return taskModel.findOneAndRemove(id);
  }

  async getAllTasks(where = {}) {
    return taskModel.find(where);
  }
}

module.exports = new taskService();
