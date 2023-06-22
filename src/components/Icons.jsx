import styled from "styled-components";
import whatsapp from "../images/whatsapp.png";
import mail from "../images/mail.png";
import pin from "../images/pin.png";
import check from "../images/check.png";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";
import youtube from "../images/youtube.png";

const Default = styled.img`
  width: 25px;
  height: 25px;
`;

const SmallDefault = styled(Default)`
  margin-right: 8px;
`;

const MediumDefault = styled(Default)`
  margin-right: 16px;
`;

export const WhatsAppIcon = () => {
  return <MediumDefault src={whatsapp} />;
};

export const MailIcon = () => {
  return <SmallDefault src={mail} />;
};

export const PinIcon = () => {
  return <SmallDefault src={pin} />;
};

export const CheckIcon = () => {
  return <Default src={check} />;
};

export const InstagramIcon = () => {
  return <Default src={instagram} />;
};

export const FacebookIcon = () => {
  return <Default src={facebook} />;
};

export const YoutubeIcon = () => {
  return <Default src={youtube} />;
};
