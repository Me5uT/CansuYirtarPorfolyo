import React from "react";
import { HomeContent } from "../contents/Anasayfa";
import profile from "../assets/profil.png";

interface IHomeProps {}
export const Home: React.FC<IHomeProps> = () => {
  return (
    <div className="home-container">
      <br></br>
      <div className="home-title">
        <h1 className="title">Cansu Yırtar</h1>
      </div>
      <div className="home-inner-container">
        <div className="home-img__container profile-img__container">
          <img
            src={profile}
            alt="Cansu Yırtar profile"
            className="profile-img"
          />
        </div>
        <div className="home-description-container">
          <p className="home-description">{HomeContent}</p>
        </div>
      </div>
    </div>
  );
};
