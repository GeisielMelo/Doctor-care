import styled from "styled-components";
import whatsapp from "../images/whatsapp.png";
import pin from "../images/pin.png";
import mail from "../images/mail.png";

const WhatsApp = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 16px;
`;

const Mail = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 8px;
`;

const Pin = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 8px;
`;

export const WhatsAppIcon = () => {
  return <WhatsApp src={whatsapp} />;
};

export const MailIcon = () => {
  return <Mail src={mail} />;
};

export const PinIcon = () => {
  return <Pin src={pin} />;
};
