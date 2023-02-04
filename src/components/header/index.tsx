import React from "react";
import { SearchBar } from "../searchbar";
import { Container } from "./styles";

export const Header: React.FC = () => {
  return (
    <Container>
      <div>Welcome to D&D MonsterPedia</div>
      <SearchBar />
    </Container>
  );
};
