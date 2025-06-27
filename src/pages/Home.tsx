const Home = ()=> {
    return (
        <>
            <div className="flex flex-col gap-10 md:flex-row md:text-left text-center justify-around items-center">
                <div>
                    <p className="text-7xl text-indigo-400 font-bold">¡Hola!</p>
                    <p className="text-2xl">Mi nombre es Mariano</p>
                    <p className="text-md text-neutral-600">Desarrollador frontend y estudiante de informática</p>
                </div>
                <img src="/main.jpeg" alt="main-image" className="md:size-1/4 size-1/2 rounded-br-full shadow-xl"/>
            </div>
        </>
    )
}

export default Home