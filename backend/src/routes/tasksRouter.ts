import express from 'express';
import TasksController from '../controllers/taskController';

const router = express.Router();

router.get("/", (_req, res) => {
    res.json({"message": "Bienvenido a la API"});
})

router.get("/tasks", TasksController.getAllTasks)
router.post("/tasks", TasksController.addTask)
router.put("/tasks/:id", TasksController.updateTask)
router.delete("/tasks/:id", TasksController.deleteTask)


export default router;