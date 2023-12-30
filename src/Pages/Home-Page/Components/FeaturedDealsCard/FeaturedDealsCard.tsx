import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Rating,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

interface FeaturedDealsCardProps {
  hotelId: number;
  originalRoomPrice: number;
  discount: number;
  finalPrice: number;
  cityName: string;
  hotelName: string;
  hotelStarRating: number;
  title: string;
  description: string;
  roomPhotoUrl: string;
}

const FeaturedDealsCard: React.FC<FeaturedDealsCardProps> = ({
  hotelId,
  originalRoomPrice,
  discount,
  finalPrice,
  cityName,
  hotelName,
  hotelStarRating,
  title,
  description,
  roomPhotoUrl,
}) => {
  const hotelLink = `/hotel/${hotelId}`;
  return (
    <Card sx={{ width: 300, cursor: "pointer" }}>
      <Link to={hotelLink} style={{ textDecoration: "none", color: "inherit" }}>
        <CardMedia
          component="img"
          alt={hotelName}
          image={roomPhotoUrl}
          sx={{ objectFit: "cover", height: 200 }}
        />
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            {hotelName}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {cityName}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Rating name="read-only" value={hotelStarRating} readOnly />
          </Box>

          <Grid container alignItems="center">
            <Typography variant="subtitle1" color="textPrimary">
              ${finalPrice.toFixed(2)}
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              sx={{ textDecoration: "line-through", ml: 1 }}
            >
              ${originalRoomPrice.toFixed(2)}
            </Typography>
          </Grid>
        </CardContent>
      </Link>
    </Card>
  );
};

export default FeaturedDealsCard;
