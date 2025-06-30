import { FileDown, FolderArchive } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const Projects = () => {
    return (
        <div className="flex flex-col items-center text-center min-h-[calc(100vh-100px)] gap-10 p-4">
            
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-xl space-y-6"
            >
                <h2 className="text-4xl font-bold text-indigo-500 flex items-center justify-center gap-2">
                    <FolderArchive className="w-8 h-8" />
                    ¡Me encuentro buscando empleo!
                </h2>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-xl space-y-6"
                >
                    <p className="text-lg text-neutral-600">
                        Soy estudiante avanzado de <strong>Licenciatura en Informática</strong> y próximamente Analista en Sistemas, con sólidos conocimientos en desarrollo de software, tanto frontend como backend.
                    </p>
                    <p className="text-lg text-neutral-600">
                        Me apasiona la tecnología, el trabajo en equipo y el aprendizaje constante. Actualmente me encuentro en la búsqueda de oportunidades profesionales en el sector IT, donde pueda aplicar y seguir ampliando mis habilidades en <strong>desarrollo web, análisis funcional e ingeniería de requerimientos</strong>.
                    </p>
                    <p className="text-lg text-neutral-600">
                        Si querés conocer más sobre mi perfil o descargar mi CV, podés hacerlo desde los enlaces de abajo. ¡Gracias por visitar mi sitio!
                    </p>
                </motion.div>


                <div className='flex w-full justify-around'>
                    <a href="./Cv_Mariano_Ocaranza.pdf" download>
                        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300">
                            <FileDown className="w-5 h-5" />
                            Descargar CV
                        </button>
                    </a>
                    <Link to='/contact'>
                        <button className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300">
                            Contactame
                        </button>
                    </Link>
                </div>
            </motion.div>

            <div>
                
            </div>

        </div>
    );
};

export default Projects;
