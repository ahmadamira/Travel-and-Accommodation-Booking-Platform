import React from "react";
import { Avatar, Box, Grid, Rating, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

interface ReviewCardProps {
  userName: string;
  rating: number;
  comment: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  userName,
  rating,
  comment,
}) => {
  return (
    <Box sx={{ border: "2px solid gray", borderRadius: "20px" }}>
      <Grid container sx={{ p: 1, minHeight: "150px" }}>
        <Grid item xs={12} sm={12} md={12}>
          <Box display={"flex"}>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>
              {userName.charAt(0)}
            </Avatar>
            <Box sx={{ ml: 1 }}>
              <Typography>{userName}</Typography>
              <Box display={"flex"}>
                <Typography variant="body1">Rating:</Typography>
                <Rating defaultValue={rating} readOnly></Rating>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="body2">{comment}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReviewCard;
