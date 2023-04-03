import React, { Dispatch, SetStateAction } from "react";
import { SearchBar } from "../searchbar";
import { Container } from "./styles";
import { MonsterFactoryType } from "@/@types/monsterFactoryType";

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
      <div>Welcome to D&D 5E MonsterPedia</div>
      <SearchBar setMonster={setMonster} allMonstersRes={allMonstersRes} />
    </Container>
  );
};
