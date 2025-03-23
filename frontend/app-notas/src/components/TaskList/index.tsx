import Task from "../Task";
import { useTasks } from "../../hooks/useTasks";
import { Link } from "react-router-dom";

const TaskList = () => {
    const { tasks, loading, error } = useTasks();

    if (loading) return <div className="text-center text-lg">Loading...</div>;
    if (error) return <div className="text-center text-lg text-red-500">Error: {error}</div>;

    return (
        <section className="p-6 bg-gray-100 min-h-screen">
            <div>
                <h2 className="text-2xl font-semibold mb-6">Mis tareas 🧨</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {tasks.map((task) => (
                    <Link to={`/task/${task.id}`}>
                        <Task key={task.id} task={task} />
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default TaskList;
