export default function HeaderMenu() {
    return (
        <nav className="fixed top-0 w-full z-50 hidden md:block">
            <div className="max-w-[900px] mx-auto flex flex-wrap justify-center gap-4 sm:gap-6 py-4 px-4">
                <a href="#inicio" className="text-white hover:text-cyan-400 transition-colors">Início</a>
                <a href="#sobre" className="text-white hover:text-cyan-400 transition-colors">Sobre mim</a>
                <a href="#tecnologias" className="text-white hover:text-cyan-400 transition-colors">Tecnologias</a>
                <a href="#projetos" className="text-white hover:text-cyan-400 transition-colors">Projetos</a>
                <a href="#contato" className="text-white hover:text-cyan-400 transition-colors">Contato</a>
            </div>
        </nav>
    );
}