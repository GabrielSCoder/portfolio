import FirstSection from "../templates/FirstSection";
import AboutSection from "../templates/AboutSection";
import HeaderMenu from "../templates/HeaderMenu";
import TecnoSection from "../templates/TecnoSection";
import ProjectSection from "../templates/ProjectSection";
import ContactMeSection from "../templates/ContactMeSection";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <HeaderMenu />
            <div className="container-custom">
                <FirstSection />
                <AboutSection />
                <TecnoSection />
                <ProjectSection />
                <ContactMeSection />
            </div>
        </div>
    );
}