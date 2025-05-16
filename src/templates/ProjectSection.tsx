import Portifolio from "../assets/portifolio.png"
import Vox from "../assets/webvox.png"
import Crm from "../assets/crm.png"
import Dex from "../assets/reactdex.png"


export default function ProjectsSection() {
    const projects = [
        {
            title: "Portifólio (Esse mesmo)",
            description: "React",
            image: Portifolio,
            link: "https://seu-projeto.com",
        },
        {
            title: "WebVox (Clone X)",
            description: "React / Node.js",
            image: Vox,
            link: "https://seu-projeto.com",
        },
        {
            title: "Crm",
            description: "React / Node.js",
            image: Crm,
            link: "https://seu-projeto.com",
        },
        {
            title: "ReactDex",
            description: "React / Node.js",
            image: Dex,
            link: "https://seu-projeto.com",
        }
    ];

    return (
        <section className="px-6 text-white min-h-screen flex items-center justify-center snap-start" id="projetos">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-2">Projetos</h2>
               <h3 className="text-[16px] font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center">Alguns de meus trabalhos</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block bg-[#1e293b] rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{project.title}</h3>
                                <p className="text-gray-400 text-sm">{project.description}</p>
                                <div className="mt-2 text-blue-400 group-hover:translate-x-1 transition-transform inline-block">
                                    →
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
