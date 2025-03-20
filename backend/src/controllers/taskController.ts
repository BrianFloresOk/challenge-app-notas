import { Request, Response } from "express";
import { Task } from "../database/entity/tasksModel";
import { AppDataSource } from "../database/connectionDb";

class TasksController {
    addTask = async (req: Request, res: Response) => {
        const { title, description, completed } = req.body;

        const newTask = new Task();
        newTask.title = title;
        newTask.description = description;
        newTask.completed = completed || false;
        newTask.createdAt = new Date();

        try {
            // Obtener el repositorio utilizando AppDataSource
            const taskRepository = AppDataSource.getRepository(Task);

            // Guardar la tarea
            const savedTask = await taskRepository.save(newTask);

            res.status(200).json({
                status: 200,
                message: "Tarea añadida correctamente",
                task: savedTask,
            });
        } catch (error) {
            console.error(error);
            res.status(400).json({
                status: 400,
                message: "Ocurrió un error al añadir la tarea",
            });
        }
    };
}

export default new TasksController();