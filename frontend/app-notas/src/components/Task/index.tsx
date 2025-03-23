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
                <p className="text-gray-700">{task.description}</p>
            </div>
        </article>
    );
};

export default Task;
