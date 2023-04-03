import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  Container,
  CustomInput,
  DropDownItem,
  DropDownOptions,
  InputContainer,
} from "./styles";
import { HeaderProps } from "../header";
import { MonsterFactory } from "@/factory/monsterFactory";

export const SearchBar: React.FC<HeaderProps> = ({
  setMonster,
  allMonstersRes,
}) => {
  const [filteredValue, setFilteredValue] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [openDropDown, setOpenDropDown] = useState(false);

  const handleFilter = (event: any) => {
    const searchWord = event.target.value;
    setInputValue(searchWord);
    const newFilter = allMonstersRes.filter((value) => {
      const filterResult = value.name
        .toLowerCase()
        .includes(searchWord.toLowerCase());
      return filterResult;
    });

    if (searchWord === "") {
      setFilteredValue([]);
    } else {
      setOpenDropDown(true);
      setFilteredValue(newFilter);
    }
  };

  const handleGetDropDownItemValue = (monster: any) => {
    const refinedMonster = MonsterFactory(monster);
    setInputValue(monster.name);
    setMonster(refinedMonster);
    setOpenDropDown(false);
  };

  return (
    <Container>
      <InputContainer>
        <CustomInput
          type="text"
          placeholder="Type the monster name here!"
          value={inputValue}
          onChange={handleFilter}
          onFocus={() => setOpenDropDown(true)}
        />
        <AiOutlineSearch color="Black" size={24} />
      </InputContainer>
      {openDropDown && (
        <DropDownOptions>
          {filteredValue.slice(0, 10).map((monster: any) => (
            <DropDownItem
              key={monster.slug}
              onClick={() => handleGetDropDownItemValue(monster)}
            >
              {monster.name}
            </DropDownItem>
          ))}
        </DropDownOptions>
      )}
    </Container>
  );
};
