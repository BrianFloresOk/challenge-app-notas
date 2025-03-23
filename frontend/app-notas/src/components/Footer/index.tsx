const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="text-sm text-center sm:text-left mb-4 sm:mb-0">
                        &copy; {new Date().getFullYear()} Note Tasks. Todos los derechos reservados.
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-right">
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
