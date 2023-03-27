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
        <div className="contact-card">
          <ForwardToInboxIcon />
          <a href="mailto:">E mail</a>
        </div>
        <div className="contact-card">
          <InstagramIcon />
          <a
            href="https://www.instagram.com/psikologcansuyirtar/"
            target="_blank"
            rel="noreferrer"
          >
            İnstagram
          </a>
        </div>
        <div className="contact-card">
          <CallIcon />

          <a href="tel:05534701173">Telefon</a>
        </div>
      </div>
    </div>
  );
};
