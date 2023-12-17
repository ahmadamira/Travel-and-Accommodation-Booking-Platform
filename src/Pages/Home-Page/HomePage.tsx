import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Box, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { StyledBox, StyledButton } from "./styles";

const HomePage = () => {
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
      <Footer />
    </div>
  );
};

export default HomePage;
