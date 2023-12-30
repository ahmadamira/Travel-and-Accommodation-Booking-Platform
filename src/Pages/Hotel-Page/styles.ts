import { Typography } from "@mui/material";
import { styled } from "@mui/system";

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
