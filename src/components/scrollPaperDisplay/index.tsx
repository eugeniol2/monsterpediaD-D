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
import { PaperTopic } from "../paperTopic";
import { monsterResType } from "@/@types/monsterResType";

export const ScrollPaperDisplay: React.FC<monsterResType> = ({
  ...monsterProps
}) => {
  return (
    <Container>
      <BackGroundImage src={scrollPaper} alt="Monster paper" />
      <Content>
        <PaperHeader>
          <Image src={dragon} alt="Dragon image" />
          <TitleText>
            <h3>Challenge: {monsterProps.challenge_rating}</h3>
            <h1>{monsterProps.name}</h1>
            <h3>
              {monsterProps.size} {monsterProps.type}, {monsterProps.alignment}
            </h3>
          </TitleText>
          <Image src={shield} alt="Shield image" />
        </PaperHeader>
        <PaperTopic title="Defenses">
          <li>Armor class: 17</li>
          <li>Hit points: 135 (18d10+36)</li>
          <li>Speed: 10ft | 40ft swim</li>
        </PaperTopic>
        <PaperTopic title="Atributes & Details">
          <div>
            <li>STR: 21 (+5)</li>
            <li>DEX: 9 (-1)</li>
            <li>CON: 15 (+2)</li>
            <li>INT: 18 (+4)</li>
            <li>WIS: 15 (+2)</li>
            <li>CHA: 18 (+4)</li>
          </div>
          <div></div>
        </PaperTopic>
        <PaperTopic title="Special abilities">
          <li>Armor class: 17</li>
          <li>Hit points: 135 (18d10+36)</li>
          <li>Speed: 10ft | 40ft swim</li>
        </PaperTopic>
      </Content>
    </Container>
  );
};
