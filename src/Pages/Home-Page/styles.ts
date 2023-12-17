import { styled } from "@mui/system";
import { Button, Box } from "@mui/material";

export const StyledBox = styled(Box)(({}) => ({
  backgroundImage: `url("/imgs/Heroimg.png")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "530px",
  display: "inline-block",
  position: "relative",
  width: "100%",
}));

export const StyledButton = styled(Button)(({}) => ({
  paddingLeft: "20px",
  paddingRight: "20px",
  backgroundColor: "#FF5403",
  color: "white",
  "&:hover": {
    backgroundColor: "white",
    color: "#FF5403",
    border: "3px solid #FF5403",
  },
}));
