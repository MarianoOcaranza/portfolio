import {motion} from 'framer-motion'
import About from './About'
import { Link } from 'react-router'

const Home: React.FC = ()=> {
    return (
        <div id='inicio' className='mt-5 bg-neutral-900'>
            <div className="flex flex-col gap-10 min-h-[calc(100vh-100px)] md:flex-row sm:text-left text-center sm:justify-around justify-center items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className="text-6xl lg:text-8xl text-indigo-500 text-shadow-md text-shadow-black font-bold">¡Hola! 👋</p>
                    <p className="text-3xl text-neutral-100 font-extralight mt-3 mb-5">Mi nombre es Mariano :)</p>
                    <p className="text-md text-neutral-300">Estudiante de informática | Desarrollador </p>
                    <p className="text-md text-neutral-300 mb-10">Data & Analytics | Salesforce Admin </p>
                    <Link to='/projects' className='bg-indigo-800 text-white hover:text-black shadow-lg shadow-black hover:bg-indigo-400 hover:shadow-indigo-800 transition-all duration-300 p-3 rounded-sm'>¡Visita mis proyectos!</Link>
                </motion.div>
                <motion.img src="./main.jpeg" alt="main-image" className="md:size-1/4 size-1/2 rounded-full object-cover aspect-square shadow-lg shadow-black"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />
            </div>
            <About/>
        </div>
    )
}

export default Home