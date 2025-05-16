import FirstSection from "../templates/FirstSection";
import AboutSection from "../templates/AboutSection";
import HeaderMenu from "../templates/HeaderMenu";
import TecnoSection from "../templates/TecnoSection";
import ProjectSection from "../templates/ProjectSection";
import ContactMeSection from "../templates/ContactMeSection";

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center ">
            <HeaderMenu />
            <div className="flex flex-col gap-10 z-10">
                <FirstSection />
                <AboutSection />
                <TecnoSection />
                <ProjectSection />
                <ContactMeSection />
            </div>
        </div>
    )
}