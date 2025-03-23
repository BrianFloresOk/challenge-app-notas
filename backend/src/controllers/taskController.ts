import { Request, Response } from "express";
import { Task } from "../database/entity/tasksModel";
import { AppDataSource } from "../database/connectionDb";
class TasksController {

    getAllTasks = async (req: Request, res: Response) => {
        try {
            const taskRepository = AppDataSource.getRepository(Task);
            const tasks = await taskRepository.find()

            res.status(200).json({
                status: 200,
                message: "Tareas encontradas",
                data: tasks
            })

        } catch (error) {
            console.error(error);
            res.status(400).json({
                status: 400,
                message: "Ocurrió un error al consultar tareas!",
            });
        }
    }

    addTask = async (req: Request, res: Response) => {
        const { title, description, completed, createdAt } = req.body;

        const newTask = new Task();
        newTask.title = title;
        newTask.description = description;
        newTask.completed = completed;
        newTask.createdAt = createdAt;

        try {
            const taskRepository = AppDataSource.getRepository(Task);
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

    updateTask = async (req: Request, res: Response) => {
        const { id } = req.params;
        const body = req.body;
        try {
            const taskRepository = AppDataSource.getRepository(Task);
            const taskFinded = await taskRepository.findOneBy({
                id: +id,
            })

            if (!taskFinded) {
                res.status(404).json({
                    status: 404,
                    message: "No se encontró tarea"
                })
            } else {

                taskFinded.title = body.title ? body.title : taskFinded.title
                taskFinded.description = body.description ? body.description : taskFinded.description
                taskFinded.completed = body.completed ? body.completed : taskFinded.completed

                await taskRepository.save(taskFinded)

                res.status(200).json({
                    status: 200,
                    message: "Tarea actualizada correctamente",
                    task: taskFinded,
                });
            }

        } catch (error) {
            console.error(error);
            res.status(400).json({
                status: 400,
                message: "Ocurrió un error al actualizar tarea",
            });
        }
    }

    deleteTask = async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            const taskRepository = AppDataSource.getRepository(Task);
            const taskFinded = await taskRepository.findOneBy({
                id: +id,
            })

            if (!taskFinded) {
                res.status(404).json({
                    status: 404,
                    message: "No se pudo eliminar tarea"
                })
            } else {
                await taskRepository.remove(taskFinded)

                res.status(200).json({
                    status: 200,
                    message: "Exito, tarea eliminada correctamente"
                })
            }

        } catch (error) {
            console.error(error);
            res.status(400).json({
                status: 400,
                message: "Ocurrió un error al eliminar tarea",
            });
        }
    }

    getOneTask = async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            const taskRepository = AppDataSource.getRepository(Task);
            const taskFinded = await taskRepository.findOneBy({
                id: +id,
            })

            if (!taskFinded) {
                res.status(404).json({
                    status: 404,
                    message: "No se encontraron datos de la tarea"
                })
            } else {

                res.status(200).json({
                    status: 200,
                    message: "Exito, tarea encontrada!",
                    data: taskFinded
                })
            }

        } catch (error) {
            console.error(error);
            res.status(400).json({
                status: 400,
                message: "Ocurrió un error al eliminar tarea",
            });
        }
    }
}


export default new TasksController();