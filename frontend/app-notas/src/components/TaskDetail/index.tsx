import { useParams } from 'react-router-dom';
import { useTaskDetail } from '../../hooks/useTasks';

const TaskDetail = () => {
    const { id } = useParams();
    const { taskDetail, loading, error } = useTaskDetail(id || '');

    if (loading) return <div className="text-center text-xl">Loading...</div>;
    if (error) return <div className="text-center text-xl text-red-500">Error: {error}</div>;

    if (!taskDetail) return <div className="text-center text-xl text-red-500">Tarea no encontrada</div>;

    return (
        <section className='bg-gray-100 h-screen pt-16'>
            <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-semibold text-blue-600 mb-4">{taskDetail.title}</h2>

                <div className="mb-4">
                    <p className="text-lg text-gray-700"><strong>Descripción:</strong> {taskDetail.description}</p>
                </div>

                <div className="mb-4">
                    <p className="text-lg text-gray-700"><strong>Estado:</strong> {taskDetail.completed ? 'Completada' : 'Pendiente'}</p>
                </div>

                <div className="mb-6">
                    <p className="text-lg text-gray-700"><strong>Fecha de creación:</strong> {taskDetail.createdAt}</p>
                </div>

                <div className="flex space-x-4">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Editar
                    </button>
                    <button className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                        Eliminar
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TaskDetail;
