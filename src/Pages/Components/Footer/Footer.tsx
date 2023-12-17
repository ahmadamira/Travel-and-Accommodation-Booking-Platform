import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Divider,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#19224D", padding: "2rem 0" }}>
      <Container maxWidth="lg">
        <Grid container spacing={12}>
          <Grid item xs={12} sm={6} md={4}>
            <img
              src="/imgs/FooterLogo.png"
              alt="Footer Logo"
              style={{ width: "250px" }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} textAlign="left" color="white">
            <Typography variant="h6" textAlign="left" sx={{ mb: 2, mt: 2 }}>
              DISCOVER DESTINATION
            </Typography>
            <Typography textAlign="left">Bali</Typography>
            <Typography textAlign="left">Karimun Jawa</Typography>
            <Typography textAlign="left">Jepara</Typography>
            <Typography textAlign="left" sx={{ mb: 1 }}>
              Lombok
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} textAlign="left" color="white">
            <Typography textAlign="left" variant="h6" sx={{ mb: 2, mt: 2 }}>
              CONTACT US
            </Typography>
            <Typography textAlign="left">
              24 Shipley St.Arvada, CO 80003
            </Typography>
            <Typography textAlign="left">09378493810</Typography>
            <Typography textAlign="left" sx={{ mb: 2 }}>
              TravelBuddy@gmail.com
            </Typography>
            <Typography textAlign="left" color="#FF5403">
              Social Media
            </Typography>
            <Grid item sx={{ mb: 1 }}>
              <FacebookIcon fontSize="large" sx={{ mr: 1 }} />
              <InstagramIcon fontSize="large" sx={{ mr: 1 }} />
              <TwitterIcon fontSize="large" />
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Box display="flex" flexDirection="row" color="#C4C4C4">
          <Box mt={2} textAlign="left">
            <Typography variant="body2">© 2020 NorthStar eCommerce</Typography>
            <Typography variant="body2">
              Privacy Policy Terms & Conditions
            </Typography>
          </Box>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
