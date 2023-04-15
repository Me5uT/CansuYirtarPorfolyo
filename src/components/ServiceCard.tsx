import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
// import bireysel from "../assets/bireysel.webp";
import { getCardImages } from "../assets/index";

interface IServiceCardProps {
  title: string;
  imgUrl: string;
  description: string;
  onClick: () => void;
}

export const ServiceCard: React.FC<IServiceCardProps> = ({
  title,
  imgUrl,
  description,
  onClick,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        borderRadius: 5,
        backgroundColor: "#f4f4f4",
        border: "1px solid #f4f4f4",
      }}
    >
      <CardMedia
        component="img"
        alt={title}
        sx={{
          margin: "15px auto auto auto",
          width: 100,
        }}
        image={getCardImages(imgUrl)}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "center", fontSize: 24, lineHeight: 1.5 }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textDecoration: "ellipsis", overflow: "hidden" }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions className="detailbtn" sx={{ justifyContent: "center" }}>
        <Button size="small" onClick={onClick} sx={{ fontSize: 13 }}>
          Detaylı Bilgi
        </Button>
      </CardActions>
    </Card>
  );
};
