import CallIcon from "@mui/icons-material/Call";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import React from "react";
import { useNavigate } from "react-router-dom";
import footerLogo from "../assets/footerLogo.png";
import { Map } from "../components/Map";
import { IRouteModel } from "../models/RouteModels";

interface IFooterProps {}

const pages: IRouteModel[] = [
  { text: "Anasayfa", pathName: "/" },
  { text: "Bloğum", pathName: "/posts" },
  { text: "Hizmetlerimiz", pathName: "/services" },
  { text: "Hakkımda", pathName: "/about" },
];

export const Footer: React.FC<IFooterProps> = () => {
  const navigate = useNavigate();

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
            <Button
              href="mailto:cansu.yirtar@gmail.com"
              sx={{ textTransform: "none" }}
            >
              <p>cansu.yirtar@gmail.com</p>
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Button
              href="https://www.instagram.com/psk.cansuyirtar/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </Button>

            <Button
              href="https://www.instagram.com/psk.cansuyirtar/"
              target="_blank"
              rel="noreferrer"
              sx={{ textTransform: "none" }}
            >
              <p>@psk.cansuyirtar</p>
            </Button>
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
            <Button href="tel:05534701173">
              <p>05534701173</p>
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {/* Konum daha sonra değişecek */}
            <Button
              href="https://www.google.com/maps/place/41%C2%B003'16.6%22N+28%C2%B059'14.3%22E/@41.0546161,28.987216,20.13z/data=!4m4!3m3!8m2!3d41.054613!4d28.987294?hl=tr-TR"
              target="_blank"
              rel="noreferrer"
            >
              <LocationOnIcon />
            </Button>
            <Button
              href="https://www.google.com/maps/place/41%C2%B003'16.6%22N+28%C2%B059'14.3%22E/@41.0546161,28.987216,20.13z/data=!4m4!3m3!8m2!3d41.054613!4d28.987294?hl=tr-TR"
              target="_blank"
              rel="noreferrer"
            >
              <p style={{ wordWrap: "break-word", textTransform: "none" }}>
                Halaskargazi Cd. Şimşek Apt D:125/2, 34381 Şişli/İstanbul
              </p>
            </Button>
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
