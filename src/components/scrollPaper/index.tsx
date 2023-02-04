import React from "react";
import Image from "next/image";
import scrollPaper from "../../../public/scrollPaper.png";
import shield from "../../../public/shield.png";
import dragon from "../../../public/dragon.svg";
import {
  BackGroundImage,
  Container,
  Content,
  PaperHeader,
  TitleText,
} from "./styles";

export const ScrollPaperDisplay: React.FC = () => {
  return (
    <Container>
      <BackGroundImage src={scrollPaper} alt="Monster paper" />
      <Content>
        <PaperHeader>
          <Image src={dragon} alt="Dragon image" />
          <TitleText>
            <h3>Challenge: 10</h3>
            <h1>Aboleth</h1>
            <h3>Large aberration, lawful evil</h3>
          </TitleText>
          <Image src={shield} alt="Shield image" />
        </PaperHeader>
      </Content>
    </Container>
  );
};
