import React, { useState } from "react";
import { useLocation } from "react-router-dom";
// import Logo from "./Logo";
// import MoonIcon from "./MoonIcon";
// import SunIcon from "./SunIcon";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export const Navbar = () => {
  const [darkMode, setDarkMode] = React.useState<boolean>(false);
  const path = useLocation();

  const changeTheme = () => {
    setDarkMode(!darkMode);
  };

  console.log("path", path);

  return (
    <nav>
      <a className="logo-link" href="/">
        <span className="visually-hidden">Logo</span>
        {/* <Logo className="logo-icon" /> */}
      </a>
      <div className="nav-links">
        <a
          href="/"
          className={path.pathname === "/" ? "active" : ""}
          title="Home"
        >
          Anasayfa
        </a>
        <a
          href="/therapies"
          className={path.pathname === "/post" ? "active" : ""}
          title="Terapi Çeşitleri"
        >
          Terapi Çeşitleri
        </a>
        <a
          href="/about"
          className={path.pathname === "/about" ? "active" : ""}
          title="About"
        >
          Hakkımda
        </a>
        <button className="theme-changer" type="button" onClick={changeTheme}>
          {darkMode ? (
            <DarkModeIcon className="theme-icon" />
          ) : (
            <LightModeIcon className="theme-icon" />
          )}
        </button>
      </div>
    </nav>
  );
};
