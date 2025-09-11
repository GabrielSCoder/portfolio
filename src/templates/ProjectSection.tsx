import Vox from "../assets/webvox.png"
import Crm from "../assets/crm.png"
import Dex from "../assets/reactdex.png"
import Adot from "../assets/adot.png"
import Blog from "../assets/your-blog.png"
import GamerBio from "../assets/portifolio.png"

export default function ProjectsSection() {
    const projects = [
        {
            title: "GamerBio",
            description: "React / Node.js",
            image: GamerBio,
            link: "https://gamer-bio.vercel.app/",
        },
        {
            title: "WebVox (Clone X)",
            description: "React / Node.js",
            image: Vox,
            link: "https://webvox-beryl.vercel.app/",
        },
        {
            title: "Crm",
            description: "React / Node.js",
            image: Crm,
            link: "https://github.com/GabrielSCoder/Gerenciador",
        },
        {
            title: "ReactDex",
            description: "React / Node.js",
            image: Dex,
            link: "https://pokedex-react-lovat.vercel.app/",
        },
        {
            title: "Adot",
            description: "PHP / MySQL",
            image: Adot,
            link: "https://adot.infy.uk/"
        },
        {
            title: "Your-Blog",
            description: "PHP CodeIgniter4 / MySQL",
            image: Blog,
            link: "https://your-blog.page.gd/"
        }
    ];

    return (
        <section className="sec px-6 text-white overflow-y-auto" id="projetos">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-2">Projetos</h2>
                <h3 className="text-[16px] font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center">
                    Alguns de meus trabalhos
                </h3>


                <div className=" sm:hidden overflow-x-auto overflow-y-hidden flex snap-x snap-mandatory scroll-smooth mt-4">

                    <div className="min-w-full flex flex-col gap-4 snap-start">
                        {projects.slice(0, 2).map((project, index) => (
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


                    <div className="min-w-full flex flex-col gap-4 snap-start">
                        {projects.slice(2).map((project, index) => (
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


                <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
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
