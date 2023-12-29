import { Avatar, Box, Grid, Rating, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

import React from "react";

const ReviewCard = () => {
  return (
    <Box sx={{ border: "2px solid gray", borderRadius: "20px" }}>
      <Grid container sx={{ p: 1 }}>
        <Grid item xs={12} sm={12} md={12}>
          <Box display={"flex"}>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>H</Avatar>
            <Box sx={{ ml: 1 }}>
              <Typography>User Name</Typography>
              <Box display={"flex"}>
                <Typography variant="body1">Rating:</Typography>
                <Rating defaultValue={4}></Rating>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="body2">
            Enjoyed my stay. The room was comfortable, and the staff was
            friendly.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReviewCard;
