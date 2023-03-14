import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

interface IFooterProps {}

export const Footer: React.FC<IFooterProps> = () => {
  const currYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        <a href="/rss.xml">
          <span className="visually-hidden">Instagram</span>
          <InstagramIcon className="footer-icon" color="secondary" />
        </a>
        <a href="https://twitter.com/JonoYeong" rel="external" data-dnt="true">
          <span className="visually-hidden">Twitter</span>
          <TwitterIcon className="footer-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/cansu-y%C4%B1rtar-57bb67106/"
          rel="external"
        >
          <span className="visually-hidden">Linkedin</span>
          <LinkedInIcon className="footer-icon" />
        </a>
      </p>
      <p> © {currYear} </p>
    </footer>
  );
};
