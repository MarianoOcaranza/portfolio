import { motion } from "framer-motion";
import { FileDown, Info } from "lucide-react";
import { Link } from "react-router";

const Projects = () => {
    const projects = [
        {
            title: "Psychologist presentation page",
            description: "Página de presentación utilizando ReactJS y Vite. Desplegado en Cloudflare Pages",
            image: "projectgiu.png",
            repoUrl: "https://github.com/MarianoOcaranza/giulianaromanopsi",
        },
        {
            title: "My personal portfolio",
            description: "Es esta misma página. Desarrollada con React, TypeScript, Vite y desplegado en GitHub Pages",
            image: "projectport.png",
            repoUrl: "https://github.com/MarianoOcaranza/portfolio",
        },
        {
            title: "Medi.ar",
            description: "Proyecto en marcha utilizando Spring Boot, Docker y MySQL para el backend, y React para el frontend. Consiste en un sitio web de búsqueda de profesionales de la salud y asignación de turnos médicos.",
            image: "projectmediar.png",
            repoUrl: "https://github.com/MarianoOcaranza/appointment-management-backend",
        },
    ];

    return (
        <div className="flex flex-col items-center text-center min-h-[calc(100vh-100px)] gap-12 p-4 text-neutral-100">
			<motion.div
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="max-w-3xl flex flex-col items-center gap-6"
			>
				<div className="flex items-start gap-2 text-neutral-300 text-base max-w-lg">
					<Info className="w-5 h-5 mt-1 text-blue-400 shrink-0" />
					<p>
						Si mi perfil te resulta interesante, podés ampliar más descargando
						mi CV o contactándome directamente.
					</p>
				</div>

				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
					<a href="CV_MARIANO_OCARANZA.pdf" download>
						<button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300">
							<FileDown className="w-5 h-5" />
							Descargar CV
						</button>
					</a>
					<Link to="/contact">
						<button className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300">
							Contactame
						</button>
					</Link>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
				className="flex flex-wrap justify-center gap-6"
			>
				{projects.map((project) => (
					<div
						className="w-80 min-h-[300px] bg-neutral-800 rounded-xl overflow-hidden shadow-lg shadow-black hover:scale-105 transition-transform duration-300 flex flex-col"
					>
						<img
							src={project.image}
							alt={project.title}
							className="w-full h-48 object-cover"
						/>
						<div className="flex flex-col flex-1 p-4 text-neutral-100">
							<h2 className="text-xl font-semibold mb-1">{project.title}</h2>
							<p className="text-sm text-neutral-300 mb-4 flex-1">
								{project.description}
							</p>
							<div className="mt-auto">
								<a
									href={project.repoUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
								>
									Ver repositorio
								</a>
							</div>
						</div>
					</div>
				))}
			</motion.div>
		</div>
    );
};

export default Projects;
