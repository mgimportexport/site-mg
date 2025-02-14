import { Button } from "antd";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  text?: string;
  marginBottom?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = "+5521989841976",
  text = "Contact us on WhatsApp",
  marginBottom = "30px",
}) => {
  return (
    <Button
      type="link"
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      style={{ marginBottom }}
    >
      <img src="/whatsapp-icon.svg" alt="WhatsApp" />
      {text}
    </Button>
  );
};

export default WhatsAppButton;
