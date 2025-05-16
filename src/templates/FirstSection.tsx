import Avatar from "../components/Avatar";

export default function FirstSection() {

    return (
        <div id="inicio" className="w-full flex flex-col justify-center items-center p-2 mt-20 min-h-screen snap-start">

            <div className="flex flex-col items-center justify-center h-[600px] w-[800px] rounded-4xl bg-base-black bg-[linear-gradient(#2c2c2c_1px,transparent_1px),linear-gradient(90deg,#2c2c2c_1px,transparent_1px)] bg-[size:40px_40px] relative">
                <Avatar />
                <div className="mt-60">
                    <div className="flex flex-col gap-2 ">
                        <h2 className="font-semibold text-[40px] text-white text-center">Gabriel Sena Saraiva</h2>
                        <h3 className="text-[20px] font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center">
                            Programador Full-Stack
                        </h3>
                        <p className="text-base text-white text-justify max-w-[600px] my-1">Sou um estudante de Ciência da Computação com paixão por tecnologia e desenvolvimento web. Tenho me dedicado especialmente ao React, onde encontro uma maneira dinâmica e criativa de construir interfaces modernas. Estou sempre em busca de aprender mais e transformar ideias em experiências interativas.</p>
                    </div>
                    <div className="flex items-center justify-center my-4">
                        <button className="text-lg rounded-3xl bg-transparent border p-2 px-4 border-sky-800 text-white w-fit hover:cursor-pointer"
                            onClick={() => window.location.href = "#contato"}>Me contate</button>
                    </div>
                </div>
            </div>

        </div>
    )
}