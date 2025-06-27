import {motion} from 'framer-motion'
import About from './About'
import { Link } from 'react-router'

const Home = ()=> {
    return (
        <div id='inicio'>
            <div className="flex flex-col gap-10 min-h-[calc(100vh-100px)] sm:flex-row sm:text-left text-center sm:justify-around justify-center items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className="text-7xl text-indigo-400 font-bold">¡Hola!</p>
                    <p className="text-2xl">Mi nombre es Mariano</p>
                    <p className="text-md text-neutral-600 mb-10">Desarrollador frontend y estudiante de informática</p>
                    <Link to='/projects' className='bg-indigo-200 hover:bg-indigo-300 transition-all duration-300 p-3 rounded-sm'>Visita mis proyectos</Link>
                </motion.div>
                <motion.img src="./main.jpeg" alt="main-image" className="sm:size-1/4 size-1/2 rounded-br-full shadow-xl"
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