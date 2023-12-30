import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, Rating } from "@mui/material";
import Chip from "@mui/material/Chip";

interface HotelCardProps {
  thumbnail: string;
  name: string;
  capacityOfAdults: number;
  capacityOfChildren: number;
  roomAmenities: {
    name: string;
    description: string;
  }[];
  pricePerNight: number;
}

const RoomCard: React.FC<HotelCardProps> = ({
  thumbnail,
  name,
  capacityOfAdults,
  capacityOfChildren,
  roomAmenities,
  pricePerNight,
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
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
        height="100%"
        image={thumbnail}
        alt={name}
        sx={{ width: { xs: "100%", md: "50%" } }}
      />
      <CardContent>
        <Typography variant="h6" component="div" color="#041562">
          {name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {`A room that can host ${capacityOfAdults} adults and ${capacityOfChildren} child`}
        </Typography>
        <Box sx={{ mt: 1, mb: 1 }}>
          <Typography variant="body1">Amenities:</Typography>
          {roomAmenities.map((amenity, index) => (
            <Chip key={index} label={amenity.name} sx={{ m: 0.5 }} />
          ))}
        </Box>
        <Typography variant="body1" color="text.primary">
          {`$${pricePerNight}/night`}
        </Typography>
      </CardContent>
      <Box
        className="addToCartButton"
        sx={{
          position: { xs: "static", md: "absolute" },
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

export default RoomCard;
