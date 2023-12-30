import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";

export const StyledTypo = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  cursor: "pointer",
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  marginTop: "16px",
  marginBottom: "16px",
}));
