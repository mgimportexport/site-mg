import { Button, Input } from "antd";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../context/useLanguage";

import "../styles/global.css";

const Contact = () => {
  const { translations } = useLanguage(); // Obtém os textos traduzidos

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  
    const newErrors = {
      name: name.trim() === "",
      email: email.trim() === "" || !/\S+@\S+\.\S+/.test(email),
      message: message.trim() === "",
    };
  
    setErrors(newErrors);
  
    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      setIsLoading(true);
      if (formRef.current) {
        try {
          await emailjs.sendForm(
            "contatositemgimports",
            "template_92mwpuk",
            formRef.current,
            { publicKey: "DiokJ1EDvMDkUI93D" }
          );
          alert(translations.email_success);
          setName("");
          setEmail("");
          setMessage("");
          setFormSubmitted(false);
        } catch (error) {
          alert(translations.email_error);
          console.error("❌ Erro ao enviar:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        console.error("❌ formRef.current está NULL!");
        setIsLoading(false);
      }
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-main">
        <div className="contact-form-container">
          <h2 className="contact-title">{translations.contact_title}</h2>
          <p className="contact-subtitle">
            {translations.contact_subtitle}
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div>
              <label htmlFor="name" className="contact-label">
                <span className="required">* {translations.name_label}</span>
              </label>
              <Input
                id="name"
                name="user_name"
                status={formSubmitted && errors.name ? "error" : ""}
                placeholder={translations.name_placeholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="email" className="contact-label">
                {translations.email_label}
              </label>
              <Input
                id="email"
                name="user_email"
                status={formSubmitted && errors.email ? "error" : ""}
                placeholder={translations.email_placeholder}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="message" className="contact-label">
                {translations.message_label}
              </label>
              <Input.TextArea
                id="message"
                name="message"
                status={formSubmitted && errors.message ? "error" : ""}
                placeholder={translations.message_placeholder}
                rows={3}
                maxLength={100}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className="char-counter">{message.length} / 100</div>

            <div className="button-container">
              <Button
                type="primary"
                className="contact-submit"
                loading={isLoading}
                htmlType="submit"
              >
                {isLoading ? translations.sending : translations.submit}
              </Button>
            </div>
          </form>
        </div>
        <div className="contact-image"></div>
      </div>

      {/* Rodapé */}
      <div className="contact-footer">
        <p className="contact-footer-title">{translations.whatsapp_title}</p>
        <Button
          type="link"
          href="https://wa.me/+5521967267984"
          target="_blank"
          style={{ marginBottom: "30px" }}
        >
          <img src="/whatsapp-icon.svg" alt="WhatsApp" />
        </Button>
        <p className="contact-footer-title">{translations.opening_hours}</p>
        <p className="contact-footer-text">{translations.weekdays}</p>
        <p className="contact-footer-text">{translations.saturday}</p>
        <p style={{ textAlign: "right", fontSize: "10px" }}>
          {translations.image_credit}
        </p>
      </div>
    </section>
  );
};

export default Contact;
