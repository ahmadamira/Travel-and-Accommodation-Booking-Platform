import React from "react";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import { StyledBox, StyledButton } from "./styles";
import FeaturedDealsCard from "./Components/FeaturedDealsCard/FeaturedDealsCard";
import SectionTitleSubtitle from "./Components/SectionTitleSubtitle/SectionTitleSubtitle";
import TrendingDestinationCard from "./Components/TrendingDestinationCard/TrendingDestinationCard";
import axios from "axios";
import { useFormik } from "formik";

const validationSchema = Yup.object().shape({
  destination: Yup.string().required("Destination is required"),
  checkInDate: Yup.date()
    .required("Check-in Date is required")
    .test(
      "check-in-date",
      "Check-in Date must be today or later",
      (value) => value && isTodayOrLater(value)
    ),
  checkOutDate: Yup.date()
    .required("Check-out Date is required")
    .min(
      Yup.ref("checkInDate"),
      "Check-out Date must be later than or equal to Check-in Date"
    ),
  numberOfAdults: Yup.number()
    .required("Number of Adults is required")
    .min(1, "Must be at least 1"),
  numberOfChildren: Yup.number()
    .required("Number of Children is required")
    .min(0, "Must be 0 or more"),
  numberOfRooms: Yup.number()
    .required("Number of Rooms is required")
    .min(1, "Must be at least 1"),
});

function isTodayOrLater(date: Date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date >= today;
}

interface FeaturedDeal {
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
interface TrendingDestination {
  cityId: number;
  cityName: string;
  countryName: string;
  description: string;
  thumbnailUrl: string;
}

const HomePage: React.FC = () => {
  const [featuredDeals, setFeaturedDeals] = useState<FeaturedDeal[]>([]);
  const [trendingDestination, setTrendingDestination] = useState<
    TrendingDestination[]
  >([]);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const formik = useFormik({
    initialValues: {
      destination: "", // Add destination field
      checkInDate: today.toISOString().split("T")[0],
      checkOutDate: tomorrow.toISOString().split("T")[0],
      numberOfAdults: 2,
      numberOfChildren: 0,
      numberOfRooms: 1,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });
  useEffect(() => {
    const fetchFeaturedDeals = async () => {
      try {
        const response = await axios.get(
          "https://app-hotel-reservation-webapi-uae-dev-001.azurewebsites.net/api/home/featured-deals"
        );
        const data: FeaturedDeal[] = response.data;
        setFeaturedDeals(data);
      } catch (error) {
        console.error("Error fetching featured deals:", error);
      }
    };
    const fetchTrendingDestination = async () => {
      try {
        const response = await axios.get(
          "https://app-hotel-reservation-webapi-uae-dev-001.azurewebsites.net/api/home/destinations/trending"
        );
        const data: TrendingDestination[] = response.data;
        setTrendingDestination(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching Trending Destination:", error);
      }
    };
    fetchTrendingDestination();
    fetchFeaturedDeals();
  }, []);

  const displayedFeaturedDeals = featuredDeals.slice(0, 4);

  return (
    <div>
      <Header />
      <StyledBox>
        <Container maxWidth="lg" sx={{ height: "100%" }}>
          <Box
            sx={{
              position: "absolute",
              right: "50%",
              top: "50%",
              transform: {
                xs: "translate(50%, -50%)",
              },
              textAlign: "center",
              width: { xs: "100%", md: "initial" },
            }}
          >
            <Typography
              variant="h3"
              color="white"
              sx={{
                fontSize: { xs: "2rem", md: "6rem" },
                fontWeight: "bold",
              }}
            >
              Travel Buddy
            </Typography>
            <Typography color="white" sx={{ mb: 3 }}>
              Let’s start your journey with us, your dream will come true
            </Typography>
            <StyledButton>Discover Now</StyledButton>
          </Box>
        </Container>
      </StyledBox>

      <Container maxWidth="lg">
        <form onSubmit={formik.handleSubmit}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            zIndex={1}
            padding={5}
            marginTop={2}
            marginBottom={2}
            sx={{
              backgroundColor: "white",
            }}
          >
            <Grid item xs={12} sm={12} md={12}>
              <Typography color="#041562">Where Do You Want To GO?</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                id="destination"
                label="Search for hotels, cities..."
                fullWidth
                {...formik.getFieldProps("destination")}
                error={
                  formik.touched.destination &&
                  Boolean(formik.errors.destination)
                }
                helperText={
                  formik.touched.destination && formik.errors.destination
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                id="checkInDate"
                label="Check-in Date"
                type="date"
                fullWidth
                {...formik.getFieldProps("checkInDate")}
                InputLabelProps={{
                  shrink: true,
                }}
                error={
                  formik.touched.checkInDate &&
                  Boolean(formik.errors.checkInDate)
                }
                helperText={
                  formik.touched.checkInDate && formik.errors.checkInDate
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                id="checkOutDate"
                label="Check-out Date"
                type="date"
                color="primary"
                fullWidth
                {...formik.getFieldProps("checkOutDate")}
                InputLabelProps={{
                  shrink: true,
                }}
                error={
                  formik.touched.checkOutDate &&
                  Boolean(formik.errors.checkOutDate)
                }
                helperText={
                  formik.touched.checkOutDate && formik.errors.checkOutDate
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                id="numberOfAdults"
                label="Number of Adults"
                type="number"
                color="primary"
                fullWidth
                {...formik.getFieldProps("numberOfAdults")}
                InputLabelProps={{
                  shrink: true,
                }}
                error={
                  formik.touched.numberOfAdults &&
                  Boolean(formik.errors.numberOfAdults)
                }
                helperText={
                  formik.touched.numberOfAdults && formik.errors.numberOfAdults
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                id="numberOfChildren"
                label="Number of Children"
                type="number"
                color="primary"
                fullWidth
                {...formik.getFieldProps("numberOfChildren")}
                InputLabelProps={{
                  shrink: true,
                }}
                error={
                  formik.touched.numberOfChildren &&
                  Boolean(formik.errors.numberOfChildren)
                }
                helperText={
                  formik.touched.numberOfChildren &&
                  formik.errors.numberOfChildren
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                id="numberOfRooms"
                label="Number of Rooms"
                type="number"
                color="primary"
                fullWidth
                {...formik.getFieldProps("numberOfRooms")}
                InputLabelProps={{
                  shrink: true,
                }}
                error={
                  formik.touched.numberOfRooms &&
                  Boolean(formik.errors.numberOfRooms)
                }
                helperText={
                  formik.touched.numberOfRooms && formik.errors.numberOfRooms
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  backgroundColor: "#FF5403",
                  color: "white",
                  width: "150px",
                  height: "50px",

                  "&:hover": {
                    backgroundColor: "#FF5303",
                    border: "2px solid white",
                  },
                }}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>

      <Container maxWidth="lg">
        <SectionTitleSubtitle
          title="Featured Deals"
          subtitle="Discover Our Best Featured Deals"
        />
        <Grid container spacing={2}>
          {displayedFeaturedDeals.map((deal, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Grid container justifyContent="center">
                <FeaturedDealsCard {...deal} />
              </Grid>
            </Grid>
          ))}
        </Grid>
        <SectionTitleSubtitle
          title="Recently Visited Hotels"
          subtitle="Your Recently Visited Hotels"
        />
        <Grid container spacing={2}>
          {featuredDeals.map((deal, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Grid container justifyContent="center">
                <FeaturedDealsCard {...deal} />
              </Grid>
            </Grid>
          ))}
        </Grid>
        <SectionTitleSubtitle
          title="Trending Destination"
          subtitle="Here Are Some Of The Most Trending Destination"
        />
        <Grid container spacing={2} mb={5}>
          {trendingDestination.map((destination) => (
            <Grid item key={destination.cityId} xs={12} sm={6} md={4}>
              <Grid container justifyContent="center">
                <TrendingDestinationCard
                  imageUrl={destination.thumbnailUrl}
                  cityName={destination.cityName}
                />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;
