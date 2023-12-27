// HotelCard.tsx
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, Rating } from "@mui/material";

interface HotelCardProps {
  thumbnail: string;
  name: string;
  starRating: number;
  pricePerNight: number;
  description: string;
}

const SearchCard: React.FC<HotelCardProps> = ({
  thumbnail,
  name,
  starRating,
  pricePerNight,
  description,
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "95%",
        margin: "10px",
        border: "2px solid lightGray",
        borderRadius: "20px",
        position: "relative",
        transition: "box-shadow 0.3s ease",
        "&:hover": {
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
          "& .addToCartButton": {
            visibility: "visible",
          },
        },
      }}
    >
      <CardMedia
        component="img"
        height="150"
        image={thumbnail}
        alt={name}
        sx={{ width: 140 }}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Rating name="read-only" value={4} readOnly />
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {`$${pricePerNight}/night`}
        </Typography>
      </CardContent>
      <Box
        className="addToCartButton"
        sx={{
          position: "absolute",
          right: 0,
          bottom: 0,
          p: 1,
          visibility: "hidden",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            paddingLeft: "20px",
            paddingRight: "20px",
            backgroundColor: "#FF5403",
            color: "white",

            borderRadius: "20PX",
            "&:hover": {
              backgroundColor: "#FF5303",
              border: "1px solid white",
            },
          }}
        >
          Add to Cart
        </Button>
      </Box>
    </Card>
  );
};

export default SearchCard;
