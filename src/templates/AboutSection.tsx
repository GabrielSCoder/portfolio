export default function AboutSection() {
    return (
        <section
            className="sec w-full text-white px-6 sm:px-10 py-10 flex flex-col gap-6"
            id="sobre"
        >
            <h2 className="font-semibold text-[28px] sm:text-[30px] text-center sm:text-left">
                Sobre mim
            </h2>

            <p className="text-[15px] sm:text-base leading-relaxed text-gray-300 text-justify max-w-3xl mx-auto">
                Olá! Sou estudante de Ciência da Computação com grande interesse em tecnologia e desenvolvimento de aplicações web modernas.
                Tenho focado especialmente no desenvolvimento front-end com React, criando interfaces intuitivas, responsivas e eficientes.

                Também atuo no desenvolvimento back-end utilizando Node.js, PHP e .NET, o que reflete minha versatilidade como desenvolvedor full stack.

                <br /><br />

                Gosto de explorar diferentes linguagens e frameworks para ampliar minha visão e encontrar as melhores soluções para cada tipo de projeto.

                Além disso, arrisco-me em áreas como análise de dados e até na criação de jogos com Python, sempre movido pela curiosidade e pela vontade de aprender coisas novas.

                Sou apaixonado por transformar ideias em experiências digitais reais. Acredito que o código bem estruturado, aliado ao aprendizado constante, é a chave para construir soluções impactantes.

                Vamos criar algo incrível juntos — uma linha de código por vez.
            </p>

            <a
                href="https://drive.google.com/file/d/1SJvGnkwXb2xNv_5K4QR_C869bheL_aGr/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto sm:mx-0"
            >
                <button className="p-2 px-4 border border-sky-700 text-white text-base rounded-3xl hover:cursor-pointer hover:bg-sky-700 transition">
                    Baixar Currículo
                </button>
            </a>
        </section>
    );
}
