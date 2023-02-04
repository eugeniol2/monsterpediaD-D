import React from "react";
import { AiOutlineSearch } from "react-icons/Ai";
import { Container, CustomInputs } from "./styles";

export const SearchBar = () => {
  return (
    <Container>
      <CustomInputs type="text" placeholder="Type the monsters name here!" />
      <AiOutlineSearch color="Black" size={24} />
    </Container>
  );
};
