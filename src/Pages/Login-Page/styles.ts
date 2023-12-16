import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";

export const Styledtypo = styled(Typography)(({ theme }) => ({
  fontFamily: "Arimo",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "36px",
  lineHeight: "48px",
  display: "flex",
  alignItems: "flex-end",
  color: "darkgray",
  marginBottom: "31px",
}));
