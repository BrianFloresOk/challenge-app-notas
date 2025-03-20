import express from 'express';
import TasksController from '../controllers/taskController';

const router = express.Router();

router.get("/", (_req, res) => {
    res.json({"message": "Bienvenido a la API"});
})

router.get("/tasks")
router.post("/tasks", TasksController.addTask)
router.put("/tasks/:id")
router.delete("/tasks/:id")


export default router;