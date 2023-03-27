import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

interface INavbarProps {}

export const Navbar: React.FC<INavbarProps> = () => {
  const [darkMode, setDarkMode] = React.useState<boolean>(false);
  const [themeAriaLabel, setThemeAriaLabel] =
    React.useState<string>("Activate Dark Mode");

  const path = useLocation();

  React.useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      if (currentTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        setDarkMode(true);
        setThemeAriaLabel("Activate Light Mode");
      } else {
        document.documentElement.removeAttribute("data-theme");
        setDarkMode(false);
        setThemeAriaLabel("Activate Dark Mode");
      }
    }
  }, []);

  const changeTheme = () => {
    if (darkMode) {
      document.documentElement.removeAttribute("data-theme");
      setDarkMode(false);
      setThemeAriaLabel("Activate Dark Mode");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      setDarkMode(true);
      setThemeAriaLabel("Activate Light Mode");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <nav>
      <a className="logo-link" href="/">
        <span className="visually-hidden">Logo</span>

        <a href="https://ibb.co/1bp0N69">
          <img
            // src={`https://i.ibb.co/wSB80V1/CYlogo-dark.png`}
            src={`https://i.ibb.co/f84KqPd/CYlogo-light.png`}
            alt="CYlogo"
            style={{ borderRadius: "20px", width: "43px" }}
          />
        </a>
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
          href="/posts/"
          className={path.pathname === "/post" ? "active" : ""}
          title="Blog"
        >
          Bloğum
        </a>
        <a
          href="/contact/"
          className={path.pathname === "/contact" ? "active" : ""}
          title="Contact"
        >
          İletişim
        </a>
        <a
          href="/about/"
          className={path.pathname === "/about" ? "active" : ""}
          title="About"
        >
          Hakkımda
        </a>
        <button
          className="theme-changer"
          type="button"
          aria-label={themeAriaLabel}
          onClick={changeTheme}
        >
          {darkMode ? (
            <LightModeIcon className="theme-icon" />
          ) : (
            <DarkModeIcon className="theme-icon" />
          )}
        </button>
      </div>
    </nav>
  );
};
