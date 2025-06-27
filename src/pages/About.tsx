import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div id="about" ref={ref} className="flex flex-col justify-center items-center sm:items-start gap-10 sm:flex-row">

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col justify-center items-center sm:items-start gap-10 sm:flex-row w-full 
                    ${!isVisible ? "pointer-events-none" : ""}`}
            >
                <img src="./aboutme.png" alt="Sobre mí" className="md:size-1/4 size-3/5 rounded-b-full" />

                <div className="md:w-1/2 w-5/6">
                    <p className="text-3xl font-bold mb-4">Sobre mí</p>
                    <div className="space-y-4">
                        <p>Soy estudiante avanzado de <strong>Licenciatura en Informática</strong> en la Universidad Nacional del Oeste. Actualmente me encuentro a solo 5 materias de obtener el título intermedio de <strong>Analista en Informática</strong>.</p>
                        <p>Desde 2022 me he enfocado en el mundo del <strong>desarrollo web</strong>, adquiriendo sólidos conocimientos tanto en <strong>frontend</strong> (HTML5, CSS3, JavaScript, ReactJS) como en <strong>backend</strong> (Python/Django y Java/Spring Boot), lo que me permite comprender y abordar proyectos de software de forma integral.</p>
                        <p>Además, me apasiona la <strong>ingeniería de software</strong>, el <strong>análisis funcional</strong> y la <strong>redacción de requerimientos</strong>. Cuento con experiencia elaborando documentación técnica de calidad, adaptada a metodologías ágiles y tradicionales, siempre con foco en las necesidades reales del cliente.</p>
                        <p>Poseo conocimientos sólidos en <strong>bases de datos relacionales</strong>, tanto en diseño optimizado (3FN y FNBC) como en redacción de consultas SQL, lo que me permite modelar y gestionar datos de forma eficiente.</p>
                        <p>Mi formación se complementa con el manejo de múltiples herramientas y tecnologías del ecosistema IT, lo que me permite adaptarme a distintos entornos y desafíos.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
