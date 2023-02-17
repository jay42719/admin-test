const express = require("express");
const router = express.Router();

const {
  userController,
  taskController,
  transactionController,
} = require("../controllers");
const joiValidation = require("../middleware/joiValidation");
const {
  authenticateToken,
} = require("../middleware/jwtValidation");

router.post("/register", joiValidation.registerSchema, userController.register);
router.post("/login", joiValidation.loginSchema, userController.login);

router.post("/create-task", joiValidation.caretTaskSchema, taskController.createTask);
router.put("/update-task", joiValidation.updateTaskSchema, taskController.updateTask);
router.delete("remove", taskController.removeTask);
router.get("/task-by-id/:id", taskController.getOneTaskById);
router.get("/task", taskController.getOneTask);
router.get("/tasks", taskController.getAllTasks);

router.post("/create-transaction", authenticateToken, joiValidation.createTransactionSchema, transactionController.createTransaction);
router.get("/transactions", authenticateToken, transactionController.getAllTransaction);

exports.router = router;