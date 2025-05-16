export default function TecnoSection() {

    return (
       <div className="w-full max-w-6xl mx-auto text-white justify-center items-center p-2 flex flex-col gap-4 min-h-screen snap-start" id="tecnologias">
            <h2 className="text-[30px] font-semibold text-white">O que eu faço</h2>
            <h3 className="text-[16px] font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center">
                Tecnologias
            </h3>
            <div className="grid grid-cols-3 grid-rows-2 gap-2">
                <div className="bg-[#2c2c2c] border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition flex flex-col gap-2">
                    <h4 className="text-xl font-semibold">React</h4>
                    <p className="text-gray-300 text-sm">Criação de interfaces modernas para sistemas CRM, dashboards, aplicações web responsivas e aplicativos móveis com foco em usabilidade.</p>
                </div>
                <div className="bg-[#2c2c2c] border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition flex flex-col gap-2">
                    <h4 className="text-xl font-semibold">Node.js</h4>
                    <p className="text-gray-300 text-sm">Desenvolvimento de APIs RESTful, back-ends escaláveis e integrações com bancos de dados para soluções web completas.</p>
                </div>
                <div className="bg-[#2c2c2c] border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition flex flex-col gap-2">
                    <h4 className="text-xl font-semibold">PHP</h4>
                    <p className="text-gray-300 text-sm">Construção e manutenção de sites, blogs, sistemas de gerenciamento de conteúdo e aplicações legadas com eficiência e segurança.</p>
                </div>
                <div className="bg-[#2c2c2c] border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition flex flex-col gap-2">
                    <h4 className="text-xl font-semibold">.Net</h4>
                    <p className="text-gray-300 text-sm">Desenvolvimento de sistemas empresariais, aplicações internas e APIs robustas com C# e .NET Core, focando em performance e estrutura sólida.</p>
                </div>
                <div className="bg-[#2c2c2c] border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition flex flex-col gap-2">
                    <h4 className="text-xl font-semibold">Python - Web </h4>
                    <p className="text-gray-300 text-sm">Desenvolvimento de APIs e aplicações web com Flask e Django.</p>
                </div>
                <div className="bg-[#2c2c2c] border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition flex flex-col gap-2">
                    <h4 className="text-lg font-semibold">Python - Análise de Dados</h4>
                    <p className="text-gray-300 text-sm">Exploração de dados, automações e visualizações com bibliotecas como Pandas e Matplotlib para extração de insights e apoio à tomada de decisões.</p>
                </div>
            </div>
        </div>

    )
}