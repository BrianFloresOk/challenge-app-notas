import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTaskDetail, useUpdateTask, useDeleteTask } from '../../hooks/useTasks';
import useSweetAlert from '../../hooks/useSweetAlert';

const TaskDetail = () => {
    const { id } = useParams();
    const { taskDetail, loading, error, setTaskDetail } = useTaskDetail(id || '');
    const { updateTask } = useUpdateTask(taskDetail, setTaskDetail);
    const { showModal, showToast, showFire } = useSweetAlert()
    const { deleteTask } = useDeleteTask();
    const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState('');
    const [editedDescription, setEditedDescription] = useState('');
    const [editedState, setEditedState] = useState(false);

    if (loading) return <div className="text-center text-xl">Loading...</div>;
    if (error) return <div className="text-center text-xl text-red-500">Error: {error}</div>;
    if (!taskDetail) return <div className="text-center text-xl text-red-500">Tarea no encontrada</div>;

    const handleEdit = () => {
        setIsEditing(true);
        setEditedTitle(taskDetail.title);
        setEditedDescription(taskDetail.description);
        setEditedState(taskDetail.completed);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleSave =  () => {
        const updatedTask = {
            ...taskDetail,
            title: editedTitle,
            description: editedDescription,
            completed: editedState
        };

        updateTask(updatedTask);

        const title = "Tarea modificada"
        const icon = "success"
        const timer = 2000

        showToast(title, icon, timer )

        setIsEditing(false);
    };

    const handleDelete = async () => {
        const title = "¿Estas seguro?"
        const icon = "warning"
        const text = "Esta tarea será eliminada de forma permanente"

        const result = await showModal(title, icon, text)

        if (result.isConfirmed) {
            await deleteTask(String(taskDetail.id));
            navigate('/');
            showFire("Eliminado!", 'success','La tarea ha sido eliminada.')
        }
    }

    return (
        <section className="bg-gray-100 h-screen pt-16">
            <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                {isEditing ? (
                    <form>
                        <label className="text-sm font-medium text-gray-700">Titulo</label>
                        <input className="w-full p-2 border rounded mb-4" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />

                        <label className="text-sm font-medium text-gray-700">Descripción</label>
                        <textarea className="w-full p-2 border rounded mb-4" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />

                        <label className="text-sm font-medium text-gray-700">Estado</label>
                        <select className="w-full p-2 border rounded mb-4" value={editedState ? "Completado" : "Pendiente"} onChange={(e) => setEditedState(e.target.value === "Completado")}>
                            <option value="Pendiente">Pendiente</option>
                            <option value="Completado">Completado</option>
                        </select>
                    </form>
                ) : (
                    <>
                        <h2 className="text-3xl font-semibold text-blue-600 mb-4">{taskDetail.title}</h2>
                        <p className="text-lg text-gray-700"><strong>Descripción:</strong> {taskDetail.description}</p>
                        <p className="text-lg text-gray-700"><strong>Estado:</strong> {taskDetail.completed ? 'Completada' : 'Pendiente'}</p>
                        <p className="text-lg text-gray-700"><strong>Fecha de creación:</strong> {taskDetail.createdAt}</p>
                    </>
                )}

                <div className="flex justify-center space-x-4 mt-4">
                    {isEditing ? (
                        <>
                            <button
                                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                                onClick={handleSave}
                            >Guardar
                            </button>
                            <button
                                className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                                onClick={handleCancel}
                            >Cancelar
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                onClick={handleEdit}
                            >Editar
                            </button>
                            <button
                                className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300 ease-in-out shadow-md"
                                onClick={handleDelete}
                            >
                                Eliminar
                            </button>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TaskDetail;