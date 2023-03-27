import React from "react";
import { HomeContent } from "../contents/Anasayfa";

interface IHomeProps {}
export const Home: React.FC<IHomeProps> = () => {
  return (
    <div>
      <h1 className="title">Cansu Yırtar</h1>
      <p className="home-description">{HomeContent}</p>
    </div>
  );
};
