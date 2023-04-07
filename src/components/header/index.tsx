import React, { Dispatch, SetStateAction } from "react";
import { SearchBar } from "../searchbar";
import { Container, TitleContaiener } from "./styles";
import { MonsterFactoryType } from "@/@types/monsterFactoryType";
import Image from "next/image";
import dragonImage from "../../assets/dragonImage.png";

export interface HeaderProps {
  setMonster: Dispatch<SetStateAction<MonsterFactoryType | undefined>>;
  allMonstersRes: any[];
}

export const Header: React.FC<HeaderProps> = ({
  setMonster,
  allMonstersRes,
}) => {
  return (
    <Container>
      <TitleContaiener>
        <Image src={dragonImage} alt="Dragon image" width={84} height={84} />
        <div>Welcome to D&D 5E MonsterPedia</div>
      </TitleContaiener>
      <SearchBar setMonster={setMonster} allMonstersRes={allMonstersRes} />
    </Container>
  );
};
