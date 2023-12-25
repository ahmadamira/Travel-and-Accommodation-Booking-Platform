import React from "react";
import { styled, useTheme } from "@mui/system";
import { Box, Typography } from "@mui/material";

export const StyledBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "48px",
  marginBottom: "48px",
}));

export const Title = styled(Typography)(({ theme }) => ({
  height: "48px",
  fontFamily: "Arimo",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "36px",
  lineHeight: "48px",
  textAlign: "center",
  color: "#041562",
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
    lineHeight: "36px",
  },
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  height: "48px",
  left: "586px",
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: "48px",
  textAlign: "center",
  color: "#626262",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    lineHeight: "24px",
  },
}));
