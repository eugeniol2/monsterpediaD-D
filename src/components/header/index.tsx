import React, { useState } from "react";
import { SearchBar } from "../searchbar";
import { Container } from "./styles";

export const Header: React.FC = () => {
  const [test, setTest] = useState();
  return (
    <Container>
      <div>Welcome to D&D MonsterPedia</div>
      <SearchBar />
    </Container>
  );
};
