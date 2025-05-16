export default function AboutSection() {
    return (
        <div className="w-full text-white justify-center items-center p-2 flex flex-col gap-4 min-h-screen snap-start" id="sobre">
            <h2 className="font-semibold text-[30px]">Sobre mim</h2>
            <p className="text-justify max-w-[600px]">Olá! Sou estudante de Ciência da Computação com grande interesse em tecnologia e desenvolvimento de aplicações web        modernas. Tenho focado especialmente no desenvolvimento front-end com React, criando interfaces intuitivas, responsivas e eficientes.

                Também atuo no desenvolvimento back-end utilizando Node.js, PHP e .NET, o que reflete minha versatilidade como desenvolvedor full stack. <br /><br />Gosto de explorar diferentes linguagens e frameworks para ampliar minha visão e encontrar as melhores soluções para cada tipo de projeto.

                Além disso, arrisco-me em áreas como análise de dados e até na criação de jogos com Python, sempre movido pela curiosidade e pela vontade de aprender coisas novas.

                Sou apaixonado por transformar ideias em experiências digitais reais. Acredito que o código bem estruturado, aliado ao aprendizado constante, é a chave para construir soluções impactantes.

                Vamos criar algo incrível juntos — uma linha de código por vez.
            </p>
            <button className="p-2 px-3 border border-sky-700 w-fit text-white text-lg rounded-3xl">Baixar Curriculo</button>
        </div>
    )
}