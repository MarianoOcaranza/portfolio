import { FileDown, FolderArchive } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center min-h-[calc(100vh-100px)] gap-10 p-4">
            
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-xl space-y-6"
            >
                <h2 className="text-4xl font-bold text-indigo-500 flex items-center justify-center gap-2">
                    <FolderArchive className="w-8 h-8" />
                    Proyectos
                </h2>

                <p className="text-lg text-neutral-600">
                    Próximamente vas a poder ver algunos de mis proyectos destacados.
                </p>

                <p className="text-neutral-600">
                    Mientras tanto, podés descargar mi currículum desde el siguiente link:
                </p>

                <a href="/Cv_Mariano_Ocaranza.pdf" download>
                    <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300">
                        <FileDown className="w-5 h-5" />
                        Descargar CV
                    </button>
                </a>
            </motion.div>

        </div>
    );
};

export default Projects;
