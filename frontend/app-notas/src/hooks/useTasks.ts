import { useState, useEffect } from 'react';
import { ITask } from '../interfaces/ITasks';
import { getAllTask, getDetailOneTask, newTaskService, updateTaskService, deleteTaskService } from '../services/tasks.sevices';


export const useTasks = () => {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const data = await getAllTask();
                const result = data.data
                setTasks(result);
            } catch (error) {
                setError('Ocurrió un error al cargar los datos!');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    return { tasks, loading, error };
};

export const useTaskDetail = (id: string) => {
    const [taskDetail, setTaskDetail] = useState<ITask | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTaskDetail = async () => {
            try {
                const data = await getDetailOneTask(id);
                const result = data.data
                setTaskDetail(result);
            } catch (error) {
                setError('Ocurrió un error al mostrar datos!');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchTaskDetail();
        }
    }, [id]);

    return { taskDetail, setTaskDetail, loading, error };
};

export const useCreateTask = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [taskCreated, setTaskCreated] = useState<ITask | null>(null);

    const createTask = async (task: ITask) => {
        setLoading(true);
        setError(null);
        try {
            const result = await newTaskService(task);
            setTaskCreated(result);
        } catch (error) {
            setError('Ocurrió un error al mandar los datos');
            console.log(error);

        } finally {
            setLoading(false);
        }
    };

    return { createTask, loading, error, taskCreated };
};

export const useUpdateTask = (taskDetail: ITask | null, setTaskDetail: (task: ITask) => void) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const update = async (updatedTask: ITask) => {
        if (!taskDetail) return;

        // Guarda el estado anterior
        const previousTask = { ...taskDetail };
        setTaskDetail(updatedTask);

        try {
            setLoading(true);
            
            await updateTaskService(updatedTask);
        } catch (error) {
            console.log(error);
            setError("Error al actualizar la tarea");
            setTaskDetail(previousTask);
        } finally {
            setLoading(false);
        }
    };

    return { updateTask: update, loading, error };
};

export const useDeleteTask = () => {
    const [error, setError] = useState<string | null>(null);

    const deleteTask = async (id: string) => {
        setError(null);
        try {
            await deleteTaskService(id);
        } catch (err) {
            setError((err as Error).message);
        }
    };

    return { deleteTask, error };
};