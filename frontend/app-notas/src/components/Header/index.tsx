import { Link } from 'react-router-dom'; // Importar Link de react-router-dom

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-blue">
            <div className="flex justify-center items-center">
                <div className="container-sm w-12 h-12 mr-4">
                    <img src="/images/logo.png" alt="Logo" className="" />
                </div>
                <h1 className="text-2xl font-bold">NOTE-TASKS</h1>
            </div>

            <div className="flex space-x-4">
                <Link to="/task/nueva-tarea" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">
                    Nueva tarea
                </Link>

                <Link to="/" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">
                    Mis tareas
                </Link>
            </div>
        </header>
    );
}

export default Header;
