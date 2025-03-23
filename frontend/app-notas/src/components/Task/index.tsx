import { ITask } from "../../interfaces/ITasks";

interface TaskProps {
    task: ITask;
}

const Task = ({ task }: TaskProps) => {
    return (
        <article className="bg-white p-4 rounded-lg shadow-lg transition duration-300 transform hover:shadow-2xl hover:bg-gray-100 hover:scale-105">
            <div className="mb-4">
                <h3 className="text-xl font-semibold text-blue-600">{task.title}</h3>
            </div>
            <div>
                <p className="text-gray-700 truncate">{task.description}</p>
            </div>
            <div className="mt-4">
                <span
                    className={`px-3 py-1 rounded-full text-sm ${
                        task.completed ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'
                    }`}
                >
                    {task.completed ? 'Completada' : 'Pendiente'}
                </span>
            </div>
        </article>
    );
};

export default Task;

