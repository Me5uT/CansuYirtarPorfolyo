import React from "react";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
interface IContactProps {}

export const Contact: React.FC<IContactProps> = () => {
  return (
    <div className="contact-container">
      <h1 className="title">Benimle İletişime Geçin</h1>

      <div className="contact-cards">
        <a className="contact-card" href="mailto:cansu.yirtar@gmail.com">
          <ForwardToInboxIcon />
          <p>E mail</p>
        </a>
        <a
          className="contact-card"
          href="https://www.instagram.com/psikologcansuyirtar/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
          <p>İnstagram</p>
        </a>
        <a className="contact-card" href="tel:05534701173">
          <CallIcon />
          <p>Telefon</p>
        </a>
      </div>
    </div>
  );
};
