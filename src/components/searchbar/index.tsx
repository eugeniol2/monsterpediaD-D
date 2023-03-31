import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/Ai";
import { Container, CustomInputs } from "./styles";

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Container>
      <CustomInputs
        type="text"
        placeholder="Type the monsters name here!"
        // value={inputValue}
        // onChange={(event) => setInputValue(event.target.value)}
      />
      <AiOutlineSearch color="Black" size={24} />
    </Container>
  );
};
