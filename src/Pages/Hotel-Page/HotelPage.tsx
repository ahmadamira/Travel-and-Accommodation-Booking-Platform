"use client";
import { Box, Container, Grid, Paper, Rating } from "@mui/material";
import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Carousel from "react-material-ui-carousel";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import ReviewCard from "./Components/Review-Card/ReviewCard";
import RoomCard from "./Components/Room-Card/RoomCard";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
export const Title = styled(Typography)(({ theme }) => ({
  height: "48px",
  fontFamily: "Arimo",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "30px",
  lineHeight: "48px",
  color: "#041562",
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
    lineHeight: "36px",
  },
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Arimo",
  fontStyle: "normal",
  fontWeight: 200,
  fontSize: "20px",
  lineHeight: "38px",
  color: "#041562",
  marginBottom: "10px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    lineHeight: "26px",
  },
}));
const HotelPage = () => {
  const galleryImages = [
    "/imgs/Heroimg.png",
    "/imgs/Heroimg.png",
    "/imgs/Heroimg.png",
    "/imgs/Heroimg.png",
    "/imgs/Heroimg.png",
    "/imgs/Heroimg.png",
    "/imgs/Heroimg.png",
    "/imgs/Heroimg.png",
    "/imgs/Heroimg.png",
  ];
  const position = { lat: 31.916989, lng: 35.206938 };
  return (
    <Box>
      <Header />
      <Container maxWidth="xl">
        <Grid container spacing={2} mt={10} mb={5}>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            sx={{
              border: "2px solid gray",
              borderRadius: "20px",
              backgroundColor: "white",
              pr: 2,
              mb: 2,
            }}
          >
            <Grid container>
              <Grid item xs={12} sm={12} md={12}>
                {" "}
                <Title>Hotel Name</Title>
              </Grid>
              <Grid item sx={{ mt: 2 }} xs={12} sm={12} md={12}>
                <Rating size="large"></Rating>
              </Grid>
              <Grid item sx={{ mt: 2 }} xs={12} sm={12} md={12}>
                <SubTitle>Description:</SubTitle>
                <Typography variant="body1">
                  this hotel is in Ramallah and have 5 star rating.
                </Typography>
              </Grid>
              <Grid item sx={{ mt: 2, mb: 2 }} xs={12} sm={12} md={12}>
                <SubTitle>Guest Reviews:</SubTitle>
                <Carousel>
                  <ReviewCard />
                  <ReviewCard />
                  <ReviewCard />
                  <ReviewCard />
                </Carousel>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={0.25} sm={0.25} md={0.25}></Grid>
          <Grid
            item
            xs={11.75}
            sm={12}
            md={8.75}
            sx={{
              border: "2px solid gray",
              borderRadius: "20px",
              backgroundColor: "white",
              pr: 2,
              mb: 2,
              pb: 2,
              maxHeight: "500px",
            }}
          >
            <Carousel>
              {galleryImages.map((image, index) => (
                <Box key={index}>
                  <img
                    src={image}
                    alt={`Image ${index}`}
                    style={{ width: "100%", height: "100%" }}
                  />
                  {/* <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0,0,0,0.9)",
                    }}
                  ></Box> */}
                </Box>
              ))}
            </Carousel>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            sx={{
              height: "400px",
              border: "2px solid gray",
              borderRadius: "20px",
              backgroundColor: "white",
              pr: 2,
            }}
          >
            <Title>Location</Title>
            <APIProvider apiKey="AIzaSyBq0lZkhy1hKv7q_CFc-3-dt4QAUAJ6NhI">
              <Box height="85%">
                <Map zoom={9} center={position}></Map>
              </Box>
            </APIProvider>
          </Grid>
          <Grid item xs={0.25} sm={0.25} md={0.25}></Grid>
          <Grid
            item
            xs={11.75}
            sm={12}
            md={8.75}
            sx={{
              border: "2px solid gray",
              borderRadius: "20px",
              backgroundColor: "white",
              pr: 2,
            }}
          >
            <Title>Availabil Rooms</Title>
            <Paper
              sx={{ overflow: "auto", maxHeight: "300px", minHeight: "300px" }}
            >
              <RoomCard
                thumbnail="/imgs/Heroimg.png"
                name="Example Hotel"
                starRating={4}
                pricePerNight={120}
                description="A beautiful hotel with a stunning view."
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default HotelPage;
