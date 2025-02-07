import { useEffect, useState } from "react";
import { Menu, Button } from "antd";
import "../styles/global.css";
import { useLanguage } from "../context/useLanguage";


const Navbar = () => {
    const [currentSection, setCurrentSection] = useState("about");
    const { language, changeLanguage, translations } = useLanguage();

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            const yOffset = -80; 
            const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
            setCurrentSection(id);
        }
    };

    useEffect(() => {
        const sections = ["hero","about", "propose", "commodities", "contact"];

        const handleScroll = () => {
            let current = "hero";
            const scrollPosition = window.scrollY + 100;

            sections.forEach((section) => {
                const sectionElement = document.getElementById(section);
                if (sectionElement) {
                    const offsetTop = sectionElement.offsetTop;
                    const offsetHeight = sectionElement.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        current = section;
                    }
                }
            });

            setCurrentSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="navbar">
            <div className="navbar-content">
                {/* Logo */}
                <div className="logo">
                    <img src="/logo.svg" alt="MG Logo" />
                </div>

                {/* Menu */}
                <Menu
                    mode="horizontal"
                    className="navbar-menu"
                    selectedKeys={[currentSection]}
                    style={{ borderBottom: "none" }} 
                >
                    <Menu.Item key="about" onClick={() => scrollToSection("about")}>
                        {translations.about}
                    </Menu.Item>
                    <Menu.Item key="propose" onClick={() => scrollToSection("propose")}>
                        {translations.propose}
                    </Menu.Item>
                    <Menu.Item key="commodities" onClick={() => scrollToSection("commodities")}>
                        {translations.commodities}
                    </Menu.Item>
                    <Menu.Item key="contact" onClick={() => scrollToSection("contact")}>
                        {translations.contact}
                    </Menu.Item>
                </Menu>

                {/* Botões de idioma */}
                <div className="language-buttons">
                    <Button 
                        className={`lang-button ${language === "EN" ? "active" : ""}`} 
                        onClick={() => changeLanguage("EN")}
                    >
                        EN
                    </Button>
                    <Button 
                        className={`lang-button ${language === "FR" ? "active" : ""}`} 
                        onClick={() => changeLanguage("FR")}
                    >
                        FR
                    </Button>
                    <Button 
                        className={`lang-button ${language === "ES" ? "active" : ""}`} 
                        onClick={() => changeLanguage("ES")}
                    >
                        ES
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
