import React from "react";
import { AboutMe } from "../contents/AboutMe";

interface IAboutProps {}
export const About: React.FC<IAboutProps> = () => {
  return (
    <div className="about-container">
      <h1 className="title">Hakkımda</h1>
      <div className="row">
        <div className="col">
          <div className="profile-img__container">
            <img
              src="https://www.doktorsitesi.com/media/cache/profil_500/uploads/profile_self_image/3868729_782773520.png"
              alt="Cansu Yırtar profile"
              className="profile-img"
            />
          </div>
        </div>
        <div className="col first-section">
          <p>{AboutMe}</p>
        </div>
      </div>
    </div>
  );
};
