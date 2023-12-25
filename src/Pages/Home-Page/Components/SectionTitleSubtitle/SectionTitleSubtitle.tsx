import React from "react";
import { StyledBox, Subtitle, Title } from "./styles";

interface SecProps {
  title: string;
  subtitle: string;
}

const SectionTitleSubtitle: React.FC<SecProps> = ({ title, subtitle }) => {
  return (
    <StyledBox>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </StyledBox>
  );
};

export default SectionTitleSubtitle;
