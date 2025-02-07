import { useEffect, useState } from "react";
import { Menu, Button } from "antd";
import "../styles/global.css";

const Navbar = () => {
    const [currentSection, setCurrentSection] = useState("about");

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
                    style={{ borderBottom: "none" }} /* Remove a borda azul do Ant Design */
                >
                    <Menu.Item key="about" onClick={() => scrollToSection("about")}>
                        About Us
                    </Menu.Item>
                    <Menu.Item key="propose" onClick={() => scrollToSection("propose")}>
                        Our Propose
                    </Menu.Item>
                    <Menu.Item key="commodities" onClick={() => scrollToSection("commodities")}>
                        Commodities
                    </Menu.Item>
                    <Menu.Item key="contact" onClick={() => scrollToSection("contact")}>
                        Contact Us
                    </Menu.Item>
                </Menu>

                {/* Botões de idioma */}
                <div className="language-buttons">
                    <Button className="lang-button active">EN</Button>
                    <Button className="lang-button">FR</Button>
                    <Button className="lang-button">ES</Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
