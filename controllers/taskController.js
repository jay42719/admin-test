const { taskService } = require("../services");

class userController {
  async createTask(req, res, next) {
    try {
      const { body } = req;

      const task = await taskService.getOneUser({ name: body.name });

      if (task) throw new Error("Task already exiting");

      const newTask = await taskService.create(body);

      return res.send({ data: newTask });
    } catch (error) {
      console.log("error", error);
    }
  }

  async updateTask(req, res, next) {
    try {
      const { body } = req;

      const task = await taskService.getOneUser({ _id: req.params.id });

      if (!task) throw new Error("Task not found");

      const newTask = await taskService.update(req.params.id, body);

      return res.send({ data: newTask });
    } catch (error) {
      console.log("error", error);
    }
  }

  async removeTask(req, res, next) {
    try {
      const { params } = req;

      const task = await taskService.getOneUser({ name: params.id });

      if (!task) throw new Error("Task not found");

      const newTask = await taskService.remove(params.id);

      return res.send({ data: newTask });
    } catch (error) {
      console.log("error", error);
    }
  }

  async getOneTaskById(req, res, next) {
    try {
      const { body } = req;

      const task = await taskService.getTaskById({ name: body.name });

      if (!task) throw new Error("Task not found");

      const newTask = await taskService.create(body);

      return res.send({ data: newTask });
    } catch (error) {
      console.log("error", error);
    }
  }

  async getOneTask(req, res, next) {
    try {
      const { query } = req;
      const where = query;

      const task = await taskService.getOneTask(where);

      if (!task) throw new Error("Task not found");

      return res.send({ data: task });
    } catch (error) {
      console.log("error", error);
    }
  }

  async getAllTasks(req, res, next) {
    try {
      const { query } = req;
      const where = query;

      const tasks = await taskService.getAllTasks(where);

      return res.send({ data: tasks });
    } catch (error) {
      console.log("error", error);
    }
  }
}

module.exports = new userController();
