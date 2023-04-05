import CallIcon from "@mui/icons-material/Call";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import InstagramIcon from "@mui/icons-material/Instagram";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import React from "react";
import { useNavigate } from "react-router-dom";
import footerLogo from "../assets/footerLogo.png";
import { IRouteModel } from "../models/RouteModels";
import { Map } from "../components/Map";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface IFooterProps {}
const currYear = new Date().getFullYear();

const pages: IRouteModel[] = [
  { text: "Anasayfa", pathName: "/" },
  { text: "Bloğum", pathName: "/posts" },
  { text: "Hizmetlerimiz", pathName: "/services" },
  { text: "Hakkımda", pathName: "/about" },
];

export const Footer: React.FC<IFooterProps> = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const [darkMode, setDarkMode] = React.useState<boolean>(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      if (currentTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        setDarkMode(true);
      } else {
        document.documentElement.removeAttribute("data-theme");
        setDarkMode(false);
      }
    }
  }, []);

  const changeTheme = () => {
    if (darkMode) {
      document.documentElement.removeAttribute("data-theme");
      setDarkMode(false);

      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      setDarkMode(true);

      localStorage.setItem("theme", "dark");
    }
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <footer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {/* LOGO */}
        <Box
          sx={{
            display: "flex",
            marginRight: "10px",
            alignItems: "flex-start",
          }}
        >
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            <Avatar alt="footerlogo" src={footerLogo} />
          </Button>
        </Box>
        {/* MENU */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {pages.map((page: IRouteModel) => (
            <Link href={page.pathName} underline="hover">
              {page.text}
            </Link>
          ))}
        </Box>
        {/* CONTACT */}
        <Box
          sx={{ display: "flex", flexDirection: "column", paddingLeft: "20px" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Button href="mailto:cansu.yirtar@gmail.com">
              <ForwardToInboxIcon />
            </Button>
            <p>cansu.yirtar@gmail.com</p>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Button
              href="https://www.instagram.com/psikologcansuyirtar/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </Button>
            <p>@psikologcansuyirtar</p>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Button href="tel:05534701173">
              <CallIcon />
            </Button>
            <p>05534701173</p>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Button>
              <LocationOnIcon />
            </Button>
            <p style={{ wordWrap: "break-word" }}>
              Halaskargazi Cd. Şimşek Apt D:125/2, 34381 Şişli/İstanbul
            </p>
          </Box>
        </Box>

        {/* ADRESS */}
        <Box
          sx={{
            display: "flex",
            marginLeft: "20px",
          }}
        >
          <Map />
        </Box>
      </Box>
    </footer>
  );
};
