const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center">
                    <div className="text-sm">
                        &copy; {new Date().getFullYear()} Note Tasks. Todos los derechos reservados.
                    </div>
                    <div className="flex space-x-4">
                        <a href="https://drive.google.com/file/d/10ZMiVj2_aGrGy_lnIFVsPF1jSh7yWtIy/view?usp=drive_link" className="hover:text-blue-400">Sobre mí</a>
                        <a href="https://github.com/BrianFloresOk/challenge-app-notas" className="hover:text-blue-400">Repositorio</a>
                        <a href="https://www.linkedin.com/in/brianflores-ok/" className="hover:text-blue-400">Contacto</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
