export default function TecnoSection() {
    const techs = [
        {
            title: "React",
            desc: "Criação de interfaces modernas para sistemas CRM, dashboards, aplicações web responsivas e aplicativos móveis com foco em usabilidade.",
        },
        {
            title: "Node.js",
            desc: "Desenvolvimento de APIs RESTful, back-ends escaláveis e integrações com bancos de dados para soluções web completas.",
        },
        {
            title: "PHP",
            desc: "Construção e manutenção de sites, blogs, sistemas de gerenciamento de conteúdo e aplicações legadas com eficiência e segurança.",
        },
        {
            title: ".Net",
            desc: "Desenvolvimento de sistemas empresariais, aplicações internas e APIs robustas com C# e .NET Core, focando em performance e estrutura sólida.",
        },
        {
            title: "Python - Web",
            desc: "Desenvolvimento de APIs e aplicações web com Flask e Django.",
        },
        {
            title: "Python - Análise de Dados",
            desc: "Exploração de dados, automações e visualizações com bibliotecas como Pandas e Matplotlib para extração de insights e apoio à tomada de decisões.",
        },
    ];

    return (
        <section
            id="tecnologias"
            className="
                sec 
                w-full 
                max-w-6xl 
                sm:max-w-4xl  /* limite maior para telas médias */
                mx-auto 
                text-white 
                p-2 
                sm:px-6       /* padding horizontal maior em telas médias+ */
                flex flex-col 
                gap-4 
                mb-20
            "
        >
            <h2 className="text-[30px] font-semibold text-white">O que eu faço</h2>
            <h3 className="text-[16px] font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center">
                Tecnologias
            </h3>


            <div className=" sm:hidden overflow-x-auto overflow-y-hidden flex snap-x snap-mandatory scroll-smooth">
               
                <div className="min-w-full flex flex-col gap-4 p-2 snap-start">
                    {techs.slice(0, 4).map((tech, index) => (
                        <div
                            key={index}
                            className="bg-[#1e293b] p-4 rounded-lg border border-slate-800 shadow"
                        >
                            <h4 className="text-lg font-semibold">{tech.title}</h4>
                            <p className="text-sm text-gray-400">{tech.desc}</p>
                        </div>
                    ))}
                </div>

               
                <div className="min-w-full flex flex-col gap-4 p-2 snap-start">
                    {techs.slice(4).map((tech, index) => (
                        <div
                            key={index}
                            className="bg-[#1e293b] p-4 rounded-lg border border-slate-800 shadow"
                        >
                            <h4 className="text-lg font-semibold">{tech.title}</h4>
                            <p className="text-sm text-gray-400">{tech.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop: grid normal */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* gap maior */}
                {techs.map((tech, index) => (
                    <div
                        key={index}
                        className="bg-[#1e293b] p-4 rounded-lg border border-slate-800 shadow"
                    >
                        <h4 className="text-lg font-semibold">{tech.title}</h4>
                        <p className="text-sm text-gray-400">{tech.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
