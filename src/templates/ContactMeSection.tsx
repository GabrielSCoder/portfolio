import instagram from "../assets/Instagram_icon.png";
import gitHub from "../assets/Octicons-mark-github.svg";
import linkedin from "../assets/LinkedIn_logo_initials.png";
import gmail from "../assets/Gmail_icon_(2020).svg.png"

export default function ContactMeSection() {

    return (
        <section className="w-full max-w-4xl mx-auto text-white py-12 flex-col gap-6 min-h-screen flex items-center justify-center snap-start" id="contato">
            <h2 className="text-3xl font-bold">Contate-me</h2>
            <p className="text-center text-gray-300 max-w-xl">
                Estou sempre aberto a novas oportunidades, projetos interessantes ou
                apenas uma boa conversa sobre tecnologia. Sinta-se à vontade para me
                chamar!
            </p>

            <div className="flex items-center gap-6">
                <a
                    href="https://www.instagram.com/seu_usuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                >
                    <img src={instagram} alt="Instagram" className="w-10 h-10" />
                </a>
                <a
                    href="https://github.com/seu_usuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                >
                    <img src={gitHub} alt="GitHub" className="w-10 h-10 invert" />
                </a>
                <a
                    href="https://www.linkedin.com/in/seu_usuario"
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
                >
                    <img src={gmail} alt="Email" className="w-10 h-10 hover:scale-110 transition" />
                </a>
            </div>
        </section>
    );
}
