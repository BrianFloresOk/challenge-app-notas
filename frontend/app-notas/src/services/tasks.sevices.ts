import { ITask } from "../interfaces/ITasks";

export const getAllTask = async () => {

    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks`)
        const result = await response.json()

        console.log(result)

        return result ? result : null;

    } catch (error) {
        console.log(error)
    }
}

export const getDetailOneTask = async (id: string) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks/${id}`)
        const result = await response.json()
        return result ? result : null;
    } catch (error) {
        console.log(error)
    }
}

export const newTaskService = async (task: ITask) => {
    try {
        const json = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task)
        }

        const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks`, json);

        if (!response.ok) {
            throw new Error('Error al crear nota!');
        }

        const result = await response.json();
        return result;

    } catch (error) {
        console.log('Error creating task:', error);
    }
}

export const updateTaskService = async (task: ITask) => {

    try {
        const json = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task)
        }

        const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks/${task.id}`, json);

        if (!response.ok) {
            throw new Error('Error al actualizar nota!');
        }

    } catch (error) {
        console.log('Error al actualizar', error);
    }
}

export const deleteTaskService = async (id: string) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks/${id}`, {'method': 'delete'})
        const result = await response.json()
        return result ? result: null;

    } catch (error) {
        console.log(error)
    }
}
