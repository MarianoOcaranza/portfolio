import React from "react";
import { Link, useLocation, useNavigate } from "react-router";

const Header: React.FC = ()=> {
    const [openNav, setOpenNav] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState<string>('home');
    const location = useLocation();
    const navigate = useNavigate();

    const goToAbout = () => {
        setOpenNav(false)
        if (location.pathname === "/") {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            navigate("/", { state: { scrollTo: "about" } });
        }
    };

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 960) setOpenNav(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

   React.useEffect(() => {
    const handleScroll = () => {
        if (location.pathname !== "/") return;
        const aboutSection = document.getElementById("about");
        const offset = window.innerHeight / 2;

        if (aboutSection) {
            const rect = aboutSection.getBoundingClientRect();
            if (rect.top <= offset && rect.bottom >= offset) {
                setActiveSection("about");
            } else {
                setActiveSection("home");
            }
        }
    };

    window.addEventListener("scroll", handleScroll);

    if (location.pathname === "/") {
        setActiveSection("home");
        if (location.state?.scrollTo === "about") {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
                setTimeout(() => {
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                }, 100); 
            }
        }
    } else {
        setActiveSection("");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname, location.state]);



    return (
        <header className="sticky bg-neutral-900 text-neutral-200 top-0 z-50">
            <nav className="p-4 w-full">
                <div className="container mx-auto flex lg:justify-around justify-between items-center">
                    <Link to="/" onClick={() => setOpenNav(false)}>
                        <h1 className="text-2xl font-bold">Mariano Ocaranza</h1>
                        <p className="font-extralight text-sm">IT Student | Software Developer | Data enthusiast</p>
                    </Link>

                    <button className="lg:hidden text-2xl cursor-pointer" onClick={() => setOpenNav(!openNav)}>
                        {openNav ? "x" : "☰"}
                    </button>

                    <ul className="hidden lg:flex space-x-4 font-light">
                        <li>
                            <Link
                                to="/"
                                className={`p-4 text-md transition-all duration-300 ${
                                    location.pathname === "/" && activeSection === "home" ? "text-indigo-700" : ""
                                } hover:text-indigo-700`}
                                onClick={(e) => {
                                    setOpenNav(false);
                                    if (location.pathname === "/") {
                                        e.preventDefault();
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    }
                                }}
                            >
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <a
                                href="#about"
                                onClick={(e) => {
                                    e.preventDefault();
                                    goToAbout();
                                    setOpenNav(false);
                                }}
                                className={`p-4 text-md transition-all duration-300 ${
                                    location.pathname === "/" && activeSection === "about" ? "text-indigo-700" : ""
                                } hover:text-indigo-700`}
                            >
                                Sobre mí
                            </a>
                        </li>
                        <li>
                            <Link
                                to="/projects"
                                className={`p-4 text-md transition-all duration-300 ${
                                    location.pathname === "/projects" ? "text-indigo-700" : ""
                                } hover:text-indigo-700`}
                                onClick={() => setOpenNav(false)}
                            >
                                Proyectos
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/road"
                                className={`p-4 text-md transition-all duration-300 ${
                                    location.pathname === "/road" ? "text-indigo-700" : ""
                                } hover:text-indigo-700`}
                                onClick={() => setOpenNav(false)}
                            >
                                Trayecto
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className={`p-2 text-md pr-4 pl-4 transition-all duration-300 ${
                                    location.pathname === "/contact" ? "text-indigo-700" : ""
                                } hover:text-indigo-700`}
                                onClick={() => setOpenNav(false)}
                            >
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={`lg:hidden transition-all duration-300 overflow-hidden ${openNav ? "max-h-70" : "max-h-0"}`}>
                    <ul className="flex mt-5 gap-5 flex-col items-center p-4 space-y-2 font-light">
                        <li>
                            <Link
                                to="/"
                                className={`p-4 text-md transition-all duration-300 ${
                                    location.pathname === "/" && activeSection === "home" ? "text-indigo-700" : ""
                                } hover:text-indigo-700`}
                                onClick={(e) => {
                                    setOpenNav(false);
                                    if (location.pathname === "/") {
                                        e.preventDefault();
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    }
                                }}
                            >
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <a
                                href="#about"
                                onClick={(e) => {
                                    e.preventDefault();
                                    goToAbout();
                                    setOpenNav(false);
                                }}
                                className={`p-4 text-md transition-all duration-300 ${
                                    location.pathname === "/" && activeSection === "about" ? "text-indigo-700" : ""
                                } hover:text-indigo-700`}
                            >
                                Sobre mí
                            </a>
                        </li>
                        <li>
                            <Link
                                to="/projects"
                                className={`p-4 text-md transition-all duration-300 ${
                                    location.pathname === "/projects" ? "text-indigo-700" : ""
                                } hover:text-indigo-700`}
                                onClick={() => setOpenNav(false)}
                            >
                                Proyectos
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/road"
                                className={`p-4 text-md transition-all duration-300 ${
                                    location.pathname === "/road" ? "text-indigo-700" : ""
                                } hover:text-indigo-700`}
                                onClick={() => setOpenNav(false)}
                            >
                                Trayecto
                            </Link>
                        </li>                
                        <li>
                            <Link
                                to="/contact"
                                className={`p-2 text-md pr-4 pl-4 transition-all duration-300 ${
                                    location.pathname === "/contact" ? "text-indigo-700" : ""
                                } hover:text-indigo-700`}
                                onClick={() => setOpenNav(false)}
                            >
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )

}

export default Header;