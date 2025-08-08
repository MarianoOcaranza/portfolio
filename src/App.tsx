import type { ReactNode } from "react";
import Header from "./components/Header";

interface Props {
    children: ReactNode;
}

const App = ({ children }: Props) => {
    return (
        <>
            <Header />
            <main className='flex-grow min-h-screen mt-5 flex flex-col justify-center items-center'>
                {children}
            </main>
            <footer className='p-4 text-center text-sm text-neutral-500'>
                © 2025 Mariano Ocaranza. Todos los derechos reservados.
            </footer>
        </>
    );
};

export default App;
