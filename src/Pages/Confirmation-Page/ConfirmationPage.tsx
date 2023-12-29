import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import html2pdf from "html2pdf.js";
import { styled } from "@mui/system";

const StyledButton = styled(Button)(({}) => ({
  paddingLeft: "20px",
  paddingRight: "20px",
  backgroundColor: "#FF5403",
  color: "white",
  width: "150px",
  "&:hover": {
    backgroundColor: "white",
    color: "#FF5403",
    border: "1px solid #FF5403",
  },
}));

const ConfirmationPage = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleSaveAsPDF = () => {
    const element = document.getElementById("confirmation-page");
    console.log(element);
    if (element) {
      const pdfOptions = {
        margin: 10,
        filename: "confirmation.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      html2pdf().from(element).set(pdfOptions).save();
    }
  };
  return (
    <Box>
      <Header />
      <Container maxWidth="xl">
        <Box
          sx={{
            minHeight: "500px",
            border: "2px solid gray",
            borderRadius: "20px",
            backgroundColor: "white",
            p: 2,
            mb: 10,
            mt: 10,
          }}
        >
          <Paper elevation={3} sx={{ padding: 4 }} id="confirmation-page">
            <Typography variant="h4" align="center" gutterBottom>
              Confirmation Page
            </Typography>

            <Typography variant="h6" gutterBottom>
              Booking Details:
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Typography>
                  <strong>Confirmation Number:</strong> 54616156165189
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography>
                  <strong>Hotel Address:</strong> Nablus
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography>
                  <strong>Room Details:</strong>
                </Typography>
                <Typography sx={{ mt: 2 }}>Room Type: Regular</Typography>
                <Typography sx={{ mt: 2 }}>Capacity Of Adults: 2</Typography>
                <Typography sx={{ mt: 2 }}>Capacity Of Children: 2</Typography>
                <Typography sx={{ mt: 2 }}>
                  Room Amenities:
                  <ul>
                    <li>Free Wifi</li>
                    <li>Free Wifi</li>
                    <li>Free Wifi</li>
                  </ul>
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography>
                  <strong>Dates:</strong>
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  Check In Date: 30-12-2023
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  Check Out Date: 31-12-2023
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography>
                  <strong>Total Price:</strong> ${(55.5).toFixed(2)}
                </Typography>
              </Grid>
            </Grid>

            <Box mt={4} textAlign="center">
              <StyledButton variant="contained" onClick={handlePrint}>
                Print
              </StyledButton>{" "}
              <StyledButton variant="contained" onClick={handleSaveAsPDF}>
                Save as PDF
              </StyledButton>
            </Box>
          </Paper>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default ConfirmationPage;
