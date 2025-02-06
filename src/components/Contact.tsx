import { Button, Input } from "antd";
import { useState } from "react";
import "../styles/global.css";

const Contact = () => {
  const [message, setMessage] = useState("");

  return (
    <section id="contact" className="contact">
      <div className="contact-main">
        <div className="contact-form-container">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">
            Send an e-mail to management@matogrossoexportltda.com
          </p>

          <div className="contact-form">
            <div>
              <label htmlFor="name" className="contact-label">
                <span className="required">* Name:</span>
              </label>
              <Input
                id="name"
                className="contact-input"
                placeholder="Personal or company"
              />
            </div>

            <div>
              <label htmlFor="email" className="contact-label">
                Email:
              </label>
              <Input
                id="email"
                className="contact-input"
                placeholder="your email@"
                type="email"
              />
            </div>

            <div>
              <label htmlFor="message" className="contact-label">
                Message:
              </label>
              <Input.TextArea
                id="message"
                className="contact-textarea"
                placeholder="Message"
                rows={3}
                maxLength={100}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className="char-counter">{message.length} / 100</div>

            <div className="button-container">
              <Button type="primary" className="contact-submit">
                Submit
              </Button>
            </div>
          </div>
        </div>

        <div className="contact-image"></div>
      </div>

      {/* Rodapé */}
      <div className="contact-footer">
        <p
          style={{
            color: "#D3AF37",
            fontFamily: "Roboto",
            fontSize: "20px",
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
          href="https://wa.me/YOUR_NUMBER"
          target="_blank"
          style={{ marginBottom: "30px" }}
        >
          <img src="/public/whatsapp-icon.svg" alt="WhatsApp" />
        </Button>
        <p
          style={{
            fontFamily: "Roboto",
            fontSize: "20px",
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
            fontSize: "16px",
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
            fontSize: "16px",
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
