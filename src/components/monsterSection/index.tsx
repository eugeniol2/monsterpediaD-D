import React, { useEffect, useState } from "react";
import { MonsterAction } from "../monsterAction";
import { Paragraph } from "../paragraph";
import { Body, Characteristics, Container, Footer, Header } from "./styles";
import { Api } from "@/pages/api/api";
import { MonsterFactoryType } from "@/@types/monsterFactoryType";
import { MonsterFactory } from "@/factory/monsterFactory";
import { DisplayRowData } from "../displayRowData";

export const MonsterSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [monster, setMonster] = useState<MonsterFactoryType>();

  const getMonster = async () => {
    try {
      const res = await Api.get("monsters/adult-void-dragon");
      const finalResponse = MonsterFactory(res.data);
      setMonster(finalResponse);
      console.log(finalResponse);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMonster();
  }, []);

  return (
    <Container>
      <Header>
        <h1>Monster: {monster?.characteristics.name}</h1>
      </Header>
      <Body>
        <Paragraph title="Characteristics">
          <h3>Type: {monster?.characteristics.type}</h3>
          <h3>Size: {monster?.characteristics.size}</h3>
          <h3>alignment: {monster?.characteristics.alignment}</h3>
          <h3>challenge_rating: {monster?.characteristics.challenge_rating}</h3>
          <h3>senses: {monster?.characteristics.senses}</h3>
          <h3>languages: {monster?.characteristics.languages}</h3>
        </Paragraph>
        <Paragraph title="Defenses">
          <DisplayRowData
            title="Armor class"
            value={monster?.defenses.armor_class}
          />
          <DisplayRowData
            title="Armor desc"
            value={monster?.defenses.armor_desc}
          />
          <DisplayRowData
            title="Hit points"
            value={monster?.defenses.hit_points}
          />
          <DisplayRowData
            title="damage_resistances"
            value={monster?.defenses.damage_resistances}
          />
          <DisplayRowData
            title="damage_vulnerabilities"
            value={monster?.defenses.damage_vulnerabilities}
          />
          <DisplayRowData
            title="damage_immunities"
            value={monster?.defenses.damage_immunities}
          />
          <DisplayRowData
            title="condition_immunities"
            value={monster?.defenses.condition_immunities}
          />
        </Paragraph>
        <Paragraph title="Speed">
          <DisplayRowData title="Swim" value={monster?.speed.swim} />
          <DisplayRowData title="Burrow" value={monster?.speed.Burrow} />
          <DisplayRowData title="Walk" value={monster?.speed.walk} />
        </Paragraph>
        <Paragraph title="Stats">
          <DisplayRowData title="strength" value={monster?.stats.strength} />
          <DisplayRowData title="dexterity" value={monster?.stats.dexterity} />
          <DisplayRowData
            title="constitution"
            value={monster?.stats.constitution}
          />
          <DisplayRowData
            title="intelligence"
            value={monster?.stats.intelligence}
          />
          <DisplayRowData title="wisdom" value={monster?.stats.wisdom} />
          <DisplayRowData title="charisma" value={monster?.stats.charisma} />
        </Paragraph>
        <Paragraph title="Saving throws">
          <DisplayRowData
            title="strength_save"
            value={monster?.Saving_throws.strength_save}
          />
          <DisplayRowData
            title="dexterity_save"
            value={monster?.Saving_throws.dexterity_save}
          />
          <DisplayRowData
            title="constitution_save"
            value={monster?.Saving_throws.constitution_save}
          />
          <DisplayRowData
            title="intelligence_save"
            value={monster?.Saving_throws.intelligence_save}
          />
          <DisplayRowData
            title="wisdom_save"
            value={monster?.Saving_throws.wisdom_save}
          />
          <DisplayRowData
            title="charisma_save"
            value={monster?.Saving_throws.charisma_save}
          />
        </Paragraph>
        <Paragraph title="Skills">
          <DisplayRowData
            title="perception"
            value={monster?.skills.perception}
          />
          <DisplayRowData title="athletics" value={monster?.skills.athletics} />
          <DisplayRowData title="stealth" value={monster?.skills.stealth} />
          <DisplayRowData title="history" value={monster?.skills.history} />
          <DisplayRowData
            title="acrobatics"
            value={monster?.skills.acrobatics}
          />
        </Paragraph>

        <Paragraph title="Actions">
          {!isLoading &&
            monster?.actions?.map((action) => (
              <MonsterAction
                title={action.name}
                description={action.desc}
                key={action.desc}
              />
            ))}
        </Paragraph>
        <Paragraph title="reactions">
          <h3>Null</h3>
        </Paragraph>
        <Paragraph title="legendary_desc">
          <h3>Null</h3>
        </Paragraph>
        <Paragraph title="legendary_actions">
          <h3>Null</h3>
        </Paragraph>
        <Paragraph title="special_abilities">
          {!isLoading &&
            monster?.special_abilities?.map((abilities) => (
              <MonsterAction
                title={abilities.name}
                description={abilities.desc}
                key={abilities.desc}
              />
            ))}
        </Paragraph>
      </Body>
    </Container>
  );
};
