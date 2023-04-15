import React from "react";
import { AboutMe } from "../contents/AboutMe";
import profile from "../assets/profil.png";

interface IAboutProps {}

export const About: React.FC<IAboutProps> = () => {
  return (
    <div className="about-container">
      <br></br>
      <h1 className="title">Hakkımda</h1>
      <div className="row">
        <div className="col">
          <div className="profile-img__container">
            <img
              src={profile}
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
