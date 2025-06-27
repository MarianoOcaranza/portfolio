const NotFound = ()=> {
    return (
        <div className="flex flex-col">
            <p className="text-7xl">Ups! 404 - Página no encontrada</p>
            <p>Esta URL no está asociada a ninguna página :/</p>
            <a href="/" className='bg-indigo-600 text-center p-3 rounded-md text-white mt-4 cursor-pointer hover:bg-indigo-500 transition-all duration-300'>Volver al inicio</a>
        </div>
    )
}

export default NotFound