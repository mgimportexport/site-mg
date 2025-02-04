import { Button, Input } from "antd";
import "../styles/global.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* Formulário */}
        <div className="contact-form-container">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">
            Send an e-mail to{" "}
            <a href="mailto:management@matogrossoexportltda.com">
              management@matogrossoexportltda.com
            </a>
          </p>

          <div className="contact-form">
            <label htmlFor="name">* Name:</label>
            <Input id="name" placeholder="Personal or company" />

            <label htmlFor="email">Email:</label>
            <Input id="email" placeholder="your email@" type="email" />

            <label htmlFor="message">Message:</label>
            <Input.TextArea id="message" placeholder="Message" rows={4} maxLength={100} />

            <Button type="primary" className="contact-submit">Submit</Button>
          </div>
        </div>

        {/* Imagem */}
        <div className="contact-image"></div>
      </div>

      {/* Rodapé */}
      <div className="contact-footer">
        <p className="contact-whatsapp-title">Contact us via WhatsApp</p>
        <Button type="link" href="https://wa.me/YOUR_NUMBER" target="_blank" className="whatsapp-button">
          <img src="/public/whatsapp-icon.svg" alt="WhatsApp" />
        </Button>
        <p className="contact-hours-title">Opening hours:</p>
        <p className="contact-hours">Mon - Fri: 8:00 am - 6:00 pm</p>
        <p className="contact-hours">Saturday: 9:00 am - 7:00 pm</p>
      </div>
    </section>
  );
};

export default Contact;
