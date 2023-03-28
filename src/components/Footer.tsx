import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

interface IFooterProps {}

export const Footer: React.FC<IFooterProps> = () => {
  const currYear = new Date().getFullYear();

  return (
    <footer>
      <p> ©{currYear} Created By Mesut Çağa</p>
    </footer>
  );
};
