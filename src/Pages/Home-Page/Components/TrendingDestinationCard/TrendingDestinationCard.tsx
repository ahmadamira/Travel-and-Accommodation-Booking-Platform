import React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

interface ImageBoxProps {
  imageUrl: string;
  cityName: string;
}

const TrendingDestinationCard: React.FC<ImageBoxProps> = ({
  imageUrl,
  cityName,
}) => {
  return (
    <div>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 0, m: 0 }}>
        <Card sx={{ minWidth: 300, flexGrow: 1 }}>
          <CardCover>
            <img src={imageUrl} loading="lazy" alt="" />
          </CardCover>
          <CardContent>
            <Typography
              level="body-lg"
              fontWeight="lg"
              textColor="#fff"
              mt={{ xs: 12, sm: 18 }}
            >
              {cityName}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default TrendingDestinationCard;
