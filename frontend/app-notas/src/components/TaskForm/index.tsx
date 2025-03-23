import { useState } from 'react';
import { useCreateTask } from '../../hooks/useTasks';
import { ITask } from '../../interfaces/ITasks';

const TaskForm = () => {
    const { createTask, loading, error, taskCreated } = useCreateTask();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const createdAt = new Date().toLocaleDateString('sv-SE')

        const newTask: ITask = {
            title,
            description,
            createdAt,
            completed: false,
        };

        console.log(newTask);

        createTask(newTask);
    };

    return (
        <section className='bg-gray-100 pt-16 h-screen'>
            <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-center">Nueva Tarea ✏</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="titulo" className="text-sm font-medium text-gray-700">
                            Titulo
                        </label>
                        <input
                            id="titulo"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Ingrese el titulo"
                        />
                    </div>

                    <div>
                        <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">
                            Descripcion
                        </label>
                        <textarea
                            id="descripcion"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Ingrese una descripcion"
                            rows={4}
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 disabled:bg-gray-400"
                        >
                            Crear tarea
                        </button>
                    </div>
                </form>

                {error && <div className="mt-4 text-red-500 text-center">{error}</div>}

                {taskCreated && (
                    <div className="mt-4 text-green-500 text-center">
                        Tarea creada: <span className="font-bold">{taskCreated.title}</span>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TaskForm;
