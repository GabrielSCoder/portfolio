import { useState, useEffect } from "react";

export default function HeaderMenu() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#1a1a1a]/90 shadow-md backdrop-blur-sm" : "bg-transparent"
                }`}
        >
            <div className="max-w-[900px] mx-auto flex justify-center gap-8 py-4 px-4">
                <a href="#inicio" className="text-white hover:text-cyan-400 transition-colors">Início</a>
                <a href="#sobre" className="text-white hover:text-cyan-400 transition-colors">Sobre mim</a>
                <a href="#tecnologias" className="text-white hover:text-cyan-400 transition-colors">Tecnologias</a>
                <a href="#projetos" className="text-white hover:text-cyan-400 transition-colors">Projetos</a>
                <a href="#contato" className="text-white hover:text-cyan-400 transition-colors">Contato</a>
            </div>
        </nav>
    );
}