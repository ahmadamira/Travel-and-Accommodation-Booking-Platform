import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Rating,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/joy";
import Paper from "@mui/material/Paper";
import SearchCard from "./Components/SeachCard/SearchCard";
import { Title, SubTitle, HeroBox, HeroTitle } from "./styles";
import axios from "axios";

const SearchPage = () => {
  const [sortBY, setSortBy] = useState("");
  const [price, setPrice] = React.useState<number[]>([20, 37]);
  const [roomType, setRoomType] = useState("");
  const [searchParams, setSearchParams] = useState({
    destination: "",
    checkInDate: "",
    checkOutDate: "",
    numberOfAdults: 0,
    numberOfChildren: 0,
    numberOfRooms: 0,
  });
  const [searchResults, setSearchResults] = useState<any[]>([]);

  useEffect(() => {
    const storedSearchParams = sessionStorage.getItem("searchParams");
    if (storedSearchParams) {
      const parsedSearchParams = JSON.parse(storedSearchParams);
      setSearchParams(parsedSearchParams);
    }
  }, []);

  useEffect(() => {
    if (searchParams && searchParams.destination) {
      const queryParams = new URLSearchParams({
        city: searchParams.destination,
        checkInDate: searchParams.checkInDate,
        checkOutDate: searchParams.checkOutDate,
        numberOfRooms: searchParams.numberOfRooms.toString(),
        adults: searchParams.numberOfAdults.toString(),
        children: searchParams.numberOfChildren.toString(),
      });

      const apiUrl = `https://app-hotel-reservation-webapi-uae-dev-001.azurewebsites.net/api/home/search?${queryParams}`;

      console.log("Destination:", searchParams.destination);
      console.log("Constructed URL:", apiUrl);

      axios
        .get(apiUrl)
        .then((response) => {
          setSearchResults(response.data);
        })
        .catch((error) => {
          console.error("API Error:", error);
        });
    }
  }, [searchParams]);

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPrice(newValue as number[]);
  };
  const handleSortByChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
  };
  const handleRoomTypeChange = (event: SelectChangeEvent) => {
    setRoomType(event.target.value);
  };

  return (
    <Box>
      <HeroBox>
        <Container maxWidth="lg" sx={{ height: "100%" }}>
          <HeroTitle
            sx={{
              transform: {
                xs: "translate(50%, -50%)",
              },
              width: { xs: "100%", md: "initial" },
            }}
          >
            <Typography
              variant="h3"
              color="white"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: "bold",
              }}
            >
              Search results
            </Typography>
          </HeroTitle>
        </Container>
      </HeroBox>
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <form>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{
              backgroundColor: "white",
              pt: 2,
              pb: 4,
              pr: 2,
              border: "2px solid gray",
              borderRadius: "20px",
            }}
          >
            <Grid item xs={12} sm={12} md={12}>
              <Title> Search For Hotels</Title>{" "}
            </Grid>
            <Grid item xs={12} sm={12} md={2}>
              <TextField
                id="destination"
                label="Search for hotels, cities..."
                fullWidth
                value={searchParams.destination}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                id="checkInDate"
                label="Check-in Date"
                type="date"
                fullWidth
                value={searchParams.checkInDate}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                id="checkOutDate"
                label="Check-out Date"
                type="date"
                color="primary"
                fullWidth
                value={searchParams.checkOutDate}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                id="numberOfAdults"
                label="Number of Adults"
                type="number"
                color="primary"
                fullWidth
                value={searchParams.numberOfAdults}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                id="numberOfChildren"
                label="Number of Children"
                type="number"
                color="primary"
                fullWidth
                value={searchParams.numberOfChildren}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                id="numberOfRooms"
                label="Number of Rooms"
                type="number"
                color="primary"
                fullWidth
                value={searchParams.numberOfRooms}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
          </Grid>
        </form>
      </Container>

      <Container maxWidth="xl" sx={{ mt: 5, mb: 3 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              border: "2px solid gray",
              borderRadius: "20px",
              backgroundColor: "white",
              pr: 2,
            }}
          >
            <Title>Filters:</Title>
            <Divider />
            <Box sx={{ backgroundColor: "white" }}>
              <Grid container>
                <Grid item xs={12} sm={12} md={12}>
                  <Box>
                    <SubTitle>Price Range:</SubTitle>
                    <Slider
                      getAriaLabel={() => "Price range"}
                      value={price}
                      onChange={handlePriceChange}
                      valueLabelDisplay="auto"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Box>
                    <SubTitle>Star Rating:</SubTitle>
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Box>
                    <SubTitle>Amenities:</SubTitle>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox size="small" />}
                        label="Free WiFi"
                      />
                      <FormControlLabel
                        control={<Checkbox size="small" />}
                        label="Pool"
                      />
                      <FormControlLabel
                        control={<Checkbox size="small" />}
                        label="Parking"
                      />
                    </FormGroup>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Box sx={{ pb: 3 }}>
                    <SubTitle>Room Type:</SubTitle>
                    <FormControl size="small" fullWidth>
                      <InputLabel
                        id="demo-select-small-label"
                        sx={{ color: "#041562" }}
                      >
                        Room Type
                      </InputLabel>
                      <Select
                        value={roomType}
                        label="Room Type"
                        onChange={handleRoomTypeChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Luxury</MenuItem>
                        <MenuItem value={20}>Budget</MenuItem>
                        <MenuItem value={30}>Boutique </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={0.25} sm={0.25} md={0.25}></Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={8.75}
            sx={{
              border: "2px solid gray",
              borderRadius: "20px",
              backgroundColor: "white",
              pr: 2,
            }}
          >
            <Grid container>
              <Grid item xs={12} sm={12} md={9}>
                <Title>Search Results:</Title>
              </Grid>
              <Divider sx={{ color: "red" }} />
              <Grid item xs={12} sm={12} md={3}>
                <FormControl size="small" fullWidth>
                  <InputLabel
                    id="demo-select-small-label"
                    sx={{ color: "#041562" }}
                  >
                    Sort By
                  </InputLabel>
                  <Select
                    value={sortBY}
                    label="Sort By"
                    onChange={handleSortByChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Price</MenuItem>
                    <MenuItem value={20}>Name</MenuItem>
                    <MenuItem value={30}>Amenities</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Paper
              sx={{ overflow: "auto", maxHeight: "500px", minHeight: "500px" }}
            >
              {searchResults.map((result, index) => (
                <SearchCard
                  key={index}
                  thumbnail={result.roomPhotoUrl}
                  name={result.hotelName}
                  starRating={result.starRating}
                  pricePerNight={result.roomPrice}
                  description={result.description}
                />
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SearchPage;
