import { Button, Input } from "antd";
import "../styles/global.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <p>Send us an email at <a href="mailto:management@matogrossoexportltda.com">management@matogrossoexportltda.com</a></p>
      <div className="contact-form">
        <Input placeholder="Name" />
        <Input placeholder="Email" type="email" />
        <Input.TextArea placeholder="Message" rows={4} maxLength={100} />
        <Button type="primary">Submit</Button>
      </div>
      <div className="contact-info">
        <p><strong>Opening Hours:</strong></p>
        <p>Mon - Fri: 8:00 am - 6:00 pm</p>
        <p>Saturday: 9:00 am - 7:00 pm</p>
        <Button type="link" href="https://wa.me/YOUR_NUMBER" target="_blank">Contact us via WhatsApp</Button>
      </div>
    </section>
  );
};

export default Contact;
