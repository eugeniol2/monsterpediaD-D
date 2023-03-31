import React, { useEffect, useState } from "react";
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
      const res = await Api.get(
        "monsters/akyishigal-demon-lord-of-cockroaches"
      );
      const finalResponse = MonsterFactory(res.data);
      setMonster(finalResponse);
      console.log(finalResponse);
      console.log("aaa");
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
          <DisplayRowData title="Type" value={monster?.characteristics.type} />
          <DisplayRowData title="Size" value={monster?.characteristics.size} />
          <DisplayRowData
            title="Alignment"
            value={monster?.characteristics.alignment}
          />
          <DisplayRowData
            title="Challenge_rating"
            value={monster?.characteristics.challenge_rating}
          />
          <DisplayRowData
            title="Senses"
            value={monster?.characteristics.senses}
          />
          <DisplayRowData
            title="Languages"
            value={monster?.characteristics.languages}
          />
        </Paragraph>
        <Paragraph title="Defenses">
          <DisplayRowData
            title="Armor class"
            value={monster?.characteristics.type}
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
            title="Damage_resistances"
            value={monster?.defenses.damage_resistances}
          />
          <DisplayRowData
            title="Damage_vulnerabilities"
            value={monster?.defenses.damage_vulnerabilities}
          />
          <DisplayRowData
            title="Damage_immunities"
            value={monster?.defenses.damage_immunities}
          />
          <DisplayRowData
            title="Condition_immunities"
            value={monster?.defenses.condition_immunities}
          />
        </Paragraph>
        <Paragraph title="Speed">
          <DisplayRowData title="Swim" value={monster?.speed.swim} />
          <DisplayRowData title="Burrow" value={monster?.speed.Burrow} />
          <DisplayRowData title="Walk" value={monster?.speed.walk} />
        </Paragraph>
        <Paragraph title="Stats">
          <DisplayRowData title="Strength" value={monster?.stats.strength} />
          <DisplayRowData title="Dexterity" value={monster?.stats.dexterity} />
          <DisplayRowData
            title="Constitution"
            value={monster?.stats.constitution}
          />
          <DisplayRowData
            title="Intelligence"
            value={monster?.stats.intelligence}
          />
          <DisplayRowData title="Wisdom" value={monster?.stats.wisdom} />
          <DisplayRowData title="Charisma" value={monster?.stats.wisdom} />
        </Paragraph>
        {monster?.Saving_throws && (
          <Paragraph title="Saving throws">
            <DisplayRowData
              title="Strength_save"
              value={monster?.Saving_throws.strength_save}
              isSavingThrow
            />
            <DisplayRowData
              title="Dexterity_save"
              value={monster?.Saving_throws.dexterity_save}
              isSavingThrow
            />
            <DisplayRowData
              title="Constitution_save"
              value={monster?.Saving_throws.constitution_save}
              isSavingThrow
            />
            <DisplayRowData
              title="Intelligence_save"
              value={monster?.Saving_throws.intelligence_save}
              isSavingThrow
            />
            <DisplayRowData
              title="Wisdom_save"
              value={monster?.Saving_throws.wisdom_save}
              isSavingThrow
            />
            <DisplayRowData
              title="Charisma_save"
              value={monster?.Saving_throws.charisma_save}
              isSavingThrow
            />
          </Paragraph>
        )}

        <Paragraph title="Skills">
          <DisplayRowData
            title="Perception"
            value={monster?.skills.perception}
          />
          <DisplayRowData title="Athletics" value={monster?.skills.athletics} />
          <DisplayRowData title="Stealth" value={monster?.skills.stealth} />
          <DisplayRowData title="History" value={monster?.skills.history} />
          <DisplayRowData
            title="Acrobatics"
            value={monster?.skills.acrobatics}
          />
        </Paragraph>
        {monster?.actions && (
          <Paragraph title="Actions">
            {monster?.actions?.map((action) => (
              <DisplayRowData
                key={action.desc}
                title={action.name}
                value={action.desc}
                isActions
              />
            ))}
          </Paragraph>
        )}

        {monster?.reactions && (
          <Paragraph title="Reactions">
            {monster?.reactions?.map((reactions) => (
              <DisplayRowData
                key={reactions.desc}
                title={reactions.name}
                value={reactions.desc}
                isActions
              />
            ))}
          </Paragraph>
        )}

        <Paragraph title="Legendary_description">
          {monster?.legendaryDesc}
        </Paragraph>
        {monster?.legendaryActions && (
          <Paragraph title="Legendary_actions">
            {monster?.legendaryActions?.map((legendaryActions) => (
              <DisplayRowData
                key={legendaryActions.desc}
                title={legendaryActions.name}
                value={legendaryActions.desc}
                isActions
              />
            ))}
          </Paragraph>
        )}
        {monster?.special_abilities && (
          <Paragraph title="Special_abilities">
            {monster?.special_abilities?.map((specialAbilities) => (
              <DisplayRowData
                key={specialAbilities.desc}
                title={specialAbilities.name}
                value={specialAbilities.desc}
                isActions
              />
            ))}
          </Paragraph>
        )}
      </Body>
    </Container>
  );
};
