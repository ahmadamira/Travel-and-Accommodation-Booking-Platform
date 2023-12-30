import { Container, Grid, Typography, Box, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { StyledTypo, StyledTitle } from "./styles";

const Footer: React.FC = () => {
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
            <StyledTitle variant="h6">DISCOVER DESTINATION</StyledTitle>
            <StyledTypo>Bali</StyledTypo>
            <StyledTypo>Karimun Jawa</StyledTypo>
            <StyledTypo>Jepara</StyledTypo>
            <StyledTypo sx={{ mb: 1 }}>Lombok</StyledTypo>
          </Grid>
          <Grid item xs={12} sm={6} md={4} textAlign="left" color="white">
            <StyledTitle textAlign="left">CONTACT US</StyledTitle>
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
            <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
              <FacebookIcon
                fontSize="large"
                sx={{ mr: 1, cursor: "pointer" }}
              />
              <InstagramIcon
                fontSize="large"
                sx={{ mr: 1, cursor: "pointer" }}
              />
              <TwitterIcon fontSize="large" sx={{ cursor: "pointer" }} />
            </Box>
          </Grid>
        </Grid>
        <Divider />
        <Box display="flex" flexDirection="row" color="#C4C4C4">
          <Box mt={2} textAlign="left">
            <Typography variant="body2">© 2020 TravelBuddy </Typography>
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
