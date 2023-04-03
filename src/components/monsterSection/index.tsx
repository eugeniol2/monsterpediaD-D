import React from "react";
import { Paragraph } from "../paragraph";
import { Body, Container, Header } from "./styles";
import { MonsterFactoryType } from "@/@types/monsterFactoryType";

interface MonsterSection {
  monster: MonsterFactoryType;
}

export const MonsterSection: React.FC<MonsterSection> = ({ monster }) => {
  console.log(monster);
  return (
    <Container>
      <Header>
        <h1>Monster: {monster?.characteristics?.name}</h1>
      </Header>
      <Body>
        <Paragraph title="Characteristics" data={monster?.characteristics} />
        <Paragraph title="Defenses" data={monster?.defenses} />
        <Paragraph title="Speed" data={monster?.speed} />
        <Paragraph title="Stats" data={monster?.stats} />
        <Paragraph title="Saving throws" data={monster?.saving_throws} />
        <Paragraph title="Skills" data={monster?.skills} />
        <Paragraph title="Actions" data={monster?.actions} isArray />
        <Paragraph title="Reactions" data={monster?.reactions} isArray />
        <Paragraph
          title="Legendary_description"
          data={monster?.legendaryDesc}
        />
        <Paragraph
          title="Special_abilities"
          data={monster?.special_abilities}
          isArray
        />
      </Body>
    </Container>
  );
};
