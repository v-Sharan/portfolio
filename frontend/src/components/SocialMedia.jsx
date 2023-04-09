import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const SocialMedia = () => (
  <div className="app__social">
    <a href="mailto:vsharansago@gmail.com" target={"_blank"}>
      <AiOutlineMail />
    </a>
    <a href="tel:+91 9597243534" target={"_blank"}>
      <BsWhatsapp />
    </a>
    <a href="https://www.instagram.com/sago_sharan/" target={"_blank"}>
      <BsInstagram />
    </a>
  </div>
);

export default SocialMedia;
