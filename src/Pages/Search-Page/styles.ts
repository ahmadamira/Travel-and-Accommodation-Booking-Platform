import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

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
  marginBottom: "5px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    lineHeight: "26px",
  },
}));

export const HeroBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url("/imgs/SearchHeader.png")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "300px",
  display: "inline-block",
  position: "relative",
  width: "100%",
  mt: "60px",
}));

export const HeroTitle = styled(Box)(({ theme }) => ({
  position: "relative",
  right: "50%",
  top: "50%",
  textAlign: "center",
}));
