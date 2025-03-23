import { useState, useEffect } from 'react';
import { ITask } from '../interfaces/ITasks';
import { getAllTask, getDetailOneTask, newTaskMore } from '../services/tasks.sevices';


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
    const [taskDetail, setTaskDetail] = useState<ITask| null>(null);
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

    return { taskDetail, loading, error };
};

export const useCreateTask = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [taskCreated, setTaskCreated] = useState<ITask | null>(null);

    const createTask = async (task: ITask) => {
        setLoading(true);
        setError(null);
        try {
            const result = await newTaskMore(task);
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
