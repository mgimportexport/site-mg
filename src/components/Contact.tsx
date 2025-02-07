import { Button, Input } from "antd";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/global.css";

const Contact = () => {
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
          alert("E-mail enviado com sucesso!");
          setName("");
          setEmail("");
          setMessage("");
          setFormSubmitted(false);
        } catch (error) {
          alert("Erro ao enviar o e-mail!");
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
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">
            Send an e-mail to management@matogrossoexportltda.com
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div>
              <label htmlFor="name" className="contact-label">
                <span className="required">* Name:</span>
              </label>
              <Input
                id="name"
                name="user_name"
                status={formSubmitted && errors.name ? "error" : ""}
                placeholder="Personal or company"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="email" className="contact-label">
                Email:
              </label>
              <Input
                id="email"
                name="user_email"
                status={formSubmitted && errors.email ? "error" : ""}
                placeholder="your email@"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="message" className="contact-label">
                Message:
              </label>
              <Input.TextArea
                id="message"
                name="message"
                status={formSubmitted && errors.message ? "error" : ""}
                placeholder="Message"
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
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
        <div className="contact-image"></div>
      </div>

      {/* Rodapé */}
      <div className="contact-footer">
        <p
          style={{
            color: "#D3AF37",
            fontFamily: "Roboto",
            fontSize: "1.25rem",
            fontWeight: 400,
            lineHeight: "24px",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            marginBottom: "10px",
          }}
        >
          Contact us via WhatsApp
        </p>
        <Button
          type="link"
          href="https://wa.me/+5521967267984"
          target="_blank"
          style={{ marginBottom: "30px" }}
        >
          <img src="/whatsapp-icon.svg" alt="WhatsApp" />
        </Button>
        <p
          style={{
            fontFamily: "Roboto",
            fontSize: "1.25rem",
            fontWeight: 400,
            lineHeight: "24px",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            marginBottom: "10px",
          }}
        >
          Opening Hours:
        </p>
        <p
          style={{
            color: "#D3AF37",
            fontFamily: "Roboto",
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: "24px",
          }}
        >
          Mon - Fri: 8:00 am - 6:00 pm
        </p>
        <p
          style={{
            color: "#D3AF37",
            fontFamily: "Roboto",
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: "24px",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            marginBottom: "10px",
          }}
        >
          Saturday: 9:00 am - 7:00 pm
        </p>
        <p style={{ textAlign: "right", fontSize: "10px" }}>
          Images by freepik.com
        </p>
      </div>
    </section>
  );
};

export default Contact;
