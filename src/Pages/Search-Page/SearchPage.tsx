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
import React, { useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Container } from "@mui/joy";
import Paper from "@mui/material/Paper";
import SearchCard from "./Components/SeachCard/SearchCard";
import { Title, SubTitle } from "./styles";

const SearchPage = () => {
  const [sortBY, setSortBy] = useState("");
  const [price, setPrice] = React.useState<number[]>([20, 37]);
  const [roomType, setRoomType] = useState("");

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
      <Box
        sx={{
          backgroundImage: `url("/imgs/SearchHeader.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "300px",
          display: "inline-block",
          position: "relative",
          width: "100%",
          mt: "60px",
          zIndex: 0,
        }}
      >
        <Container maxWidth="lg" sx={{ height: "100%" }}>
          <Box
            sx={{
              position: "relative",
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
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: "bold",
              }}
            >
              Search results
            </Typography>
          </Box>
        </Container>
      </Box>
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
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                id="checkInDate"
                label="Check-in Date"
                type="date"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                id="checkOutDate"
                label="Check-out Date"
                type="date"
                color="primary"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                id="numberOfAdults"
                label="Number of Adults"
                type="number"
                color="primary"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                id="numberOfChildren"
                label="Number of Children"
                type="number"
                color="primary"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                id="numberOfRooms"
                label="Number of Rooms"
                type="number"
                color="primary"
                fullWidth
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
              <SearchCard
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
    </Box>
  );
};

export default SearchPage;
