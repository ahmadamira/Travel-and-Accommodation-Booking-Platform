"use client";
import { Box, Container, Grid, Paper, Rating } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import ReviewCard from "./Components/Review-Card/ReviewCard";
import RoomCard from "./Components/Room-Card/RoomCard";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { Title, SubTitle } from "./styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface HotelInfo {
  hotelName: string;
  location: string;
  description: string;
  latitude: number;
  longitude: number;
  amenities: {
    name: string;
    description: string;
  }[];
  starRating: number;
  availableRooms: number;
  imageUrl: string;
}
interface Review {
  reviewId: number;
  customerName: string;
  rating: number;
  description: string;
}
interface Room {
  roomNumber: number;
  roomPhotoUrl: string;
  roomType: string;
  capacityOfAdults: number;
  capacityOfChildren: number;
  roomAmenities: {
    name: string;
    description: string;
  }[];
  price: number;
  availability: boolean;
}

const HotelPage = () => {
  const { id } = useParams();
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [hotelInfo, setHotelInfo] = useState<HotelInfo | null>({
    hotelName: "",
    location: "",
    description: "",
    latitude: 0,
    longitude: 0,
    amenities: [],
    starRating: 0,
    availableRooms: 0,
    imageUrl: "",
  });

  const [reviews, setReviews] = useState<Review[]>([]);
  const [availableRooms, setAvailableRooms] = useState<Room[]>([]);
  const [searchParams, setSearchParams] = useState({
    destination: "",
    checkInDate: "",
    checkOutDate: "",
    numberOfAdults: 0,
    numberOfChildren: 0,
    numberOfRooms: 0,
  });

  useEffect(() => {
    axios
      .get(
        `https://app-hotel-reservation-webapi-uae-dev-001.azurewebsites.net/api/hotels/${id}/gallery`
      )
      .then((response) => {
        const images = response.data.map((image: any) => image.url);
        setGalleryImages(images);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
    axios
      .get(
        `https://app-hotel-reservation-webapi-uae-dev-001.azurewebsites.net/api/hotels/${id}?includeRooms=true`
      )
      .then((response) => {
        setHotelInfo(response.data);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
    axios
      .get(
        `https://app-hotel-reservation-webapi-uae-dev-001.azurewebsites.net/api/hotels/${id}/reviews`
      )
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
    const storedSearchParams = sessionStorage.getItem("searchParams");
    if (storedSearchParams) {
      const parsedSearchParams = JSON.parse(storedSearchParams);
      setSearchParams(parsedSearchParams);
    }
    console.log(searchParams.checkInDate);
    console.log(searchParams.checkOutDate);

    axios
      .get(
        `https://app-hotel-reservation-webapi-uae-dev-001.azurewebsites.net/api/hotels/${id}/available-rooms?checkInDate=2023-12-31&CheckOutDate=2023-1-1`
      )
      .then((response) => {
        setAvailableRooms(response.data);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, [id]);

  const position = {
    lat: hotelInfo?.latitude || 0,
    lng: hotelInfo?.longitude || 0,
  };
  return (
    <Box>
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
                <Title>{hotelInfo?.hotelName}</Title>
              </Grid>
              <Grid item sx={{ mt: 2 }} xs={12} sm={12} md={12}>
                <Rating size="large" value={hotelInfo?.starRating} readOnly />
              </Grid>
              <Grid item sx={{ mt: 2 }} xs={12} sm={12} md={12}>
                <SubTitle>Description:</SubTitle>
                <Typography variant="body1">
                  {hotelInfo?.description}
                </Typography>
              </Grid>
              <Grid item sx={{ mt: 2, mb: 2 }} xs={12} sm={12} md={12}>
                <SubTitle>Guest Reviews:</SubTitle>
                <Carousel>
                  {reviews.map((review: any) => (
                    <ReviewCard
                      key={review.reviewId}
                      userName={review.customerName}
                      rating={review.rating}
                      comment={review.description}
                    />
                  ))}
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
              maxHeight: "600px",
            }}
          >
            <Carousel>
              {galleryImages.map((image, index) => (
                <Box key={index}>
                  <img
                    src={image}
                    alt={`Image ${index}`}
                    style={{ width: "100%", height: "460px" }}
                  />
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
              {availableRooms.map((room) => (
                <RoomCard
                  key={room.roomNumber}
                  thumbnail={room.roomPhotoUrl}
                  name={` ${room.roomType} Room`}
                  pricePerNight={room.price}
                  capacityOfAdults={room.capacityOfAdults}
                  capacityOfChildren={room.capacityOfChildren}
                  roomAmenities={room.roomAmenities}
                />
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HotelPage;
