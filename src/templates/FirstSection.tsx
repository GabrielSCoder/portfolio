import Avatar from "../components/Avatar";

export default function FirstSection() {
    return (
        <section id="inicio" className="sec w-full px-4 sm:px-6 md:px-8 mt-20">
            <div className="flex flex-col items-center justify-center w-full max-w-4xl rounded-3xl bg-base-black bg-[linear-gradient(#2c2c2c_1px,transparent_1px),linear-gradient(90deg,#2c2c2c_1px,transparent_1px)] bg-[size:40px_40px] relative py-20 px-4 sm:px-8">
                <Avatar />
                <div className="mt-32 text-center">
                    <div className="flex flex-col gap-4">
                        <h2 className="font-semibold text-3xl sm:text-4xl text-white">Gabriel Sena Saraiva</h2>
                        <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Programador Full-Stack
                        </h3>
                        <p className="text-sm sm:text-base text-white text-center sm:text-justify mx-auto max-w-xl">
                            Sou um estudante de Ciência da Computação com paixão por tecnologia e desenvolvimento web. Tenho me dedicado especialmente ao React, onde encontro uma maneira dinâmica e criativa de construir interfaces modernas. Estou sempre em busca de aprender mais e transformar ideias em experiências interativas.
                        </p>
                    </div>
                    <div className="flex items-center justify-center mt-6">
                        <button
                            className="text-base sm:text-lg rounded-3xl bg-transparent border p-2 px-4 border-sky-800 text-white hover:bg-sky-800 transition-colors"
                            onClick={() => window.location.href = "#contato"}
                        >
                            Contate-me
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
