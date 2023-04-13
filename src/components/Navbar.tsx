import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { IRouteModel } from "../models/RouteModels";
import CallIcon from "@mui/icons-material/Call";

const pages: IRouteModel[] = [
  { text: "Anasayfa", pathName: "/" },
  { text: "Bloğum", pathName: "/posts" },
  { text: "Hizmetlerimiz", pathName: "/services" },
  { text: "İletişim", pathName: "/contact" },
  { text: "Hakkımda", pathName: "/about" },
];

interface INavbarProps {}

export const Navbar: React.FC<INavbarProps> = () => {
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
    <AppBar
      position="static"
      sx={{
        backgroundColor: darkMode ? "#0f4d59" : "#d3ecf1",
        borderRadius: "0px 0px 10px 10px",
        marginBottom: "20px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button
            onClick={() => {
              handleCloseNavMenu();
              navigate("/");
            }}
          >
            <Avatar alt="logo" src={logo} sx={{ marginRight: "15px" }} />
          </Button>

          {/* Hamburger Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <Tooltip title="Menü">
                <MenuIcon sx={{ color: darkMode ? "white" : "black" }} />
              </Tooltip>
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                margin: "0",
                padding: "0",
                gap: "0",
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                  <Button
                    className="muiBtn"
                    key={page.text}
                    onClick={() => {
                      handleCloseNavMenu();
                      navigate(page.pathName);
                    }}
                    sx={{
                      display: "block",
                    }}
                  >
                    {page.text}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Hamburger Menu */}

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                className="muiBtn"
                key={page.text}
                onClick={() => {
                  handleCloseNavMenu();
                  navigate(page.pathName);
                }}
                sx={{
                  my: 2,
                  color: darkMode ? "white" : "black",
                  display: "block",
                }}
              >
                {page.text}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <Tooltip title="Aramak için tıklayın">
              <IconButton
                className="callme-button"
                href="tel:05534701173"
                sx={{ color: darkMode ? "white" : "black" }}
              >
                <CallIcon />
                {"Ücretsiz Bilgi Almak için Arayın"}
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Theme Settings">
              <IconButton
                onClick={changeTheme}
                sx={{ p: 0, color: darkMode ? "white" : "black" }}
              >
                {darkMode ? (
                  <LightModeIcon className="theme-icon" />
                ) : (
                  <DarkModeIcon className="theme-icon" />
                )}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
