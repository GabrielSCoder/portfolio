import instagram from "../assets/Instagram_icon.png";
import gitHub from "../assets/Octicons-mark-github.svg";
import linkedin from "../assets/LinkedIn_logo_initials.png";
import gmail from "../assets/Gmail_icon_(2020).svg.png"

export default function ContactMeSection() {
    return (
        <section
            id="contato"
            className="sec w-full max-w-4xl mx-auto text-white px-4 py-12 flex flex-col items-center gap-6"
        >
            <h2 className="text-2xl sm:text-3xl font-bold text-center">Contate-me</h2>
            <p className="text-center text-gray-300 max-w-xl text-sm sm:text-base">
                Estou sempre aberto a novas oportunidades, projetos interessantes ou
                apenas uma boa conversa sobre tecnologia. Sinta-se à vontade para me
                chamar!
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
                <a
                    href="https://www.instagram.com/gabriel.sena1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                >
                    <img src={instagram} alt="Instagram" className="w-10 h-10" />
                </a>
                <a
                    href="https://github.com/GabrielSCoder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                >
                    <img src={gitHub} alt="GitHub" className="w-10 h-10 invert" />
                </a>
                <a
                    href="https://www.linkedin.com/in/gabriel-sena-saraiva-377ba6154/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                >
                    <img src={linkedin} alt="LinkedIn" className="w-10 h-10" />
                </a>
                <a
                    href="https://mail.google.com/mail/?view=cm&to=gabrielsenavagas@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                >
                    <img src={gmail} alt="Email" className="w-10 h-10" />
                </a>
            </div>
        </section>
    );
}


