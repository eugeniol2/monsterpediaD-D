export type MonsterFactoryType = {
  indexes: {
    [key: string]: string | undefined;

    slug: string;
  };
  characteristics: {
    [key: string]: string | undefined;
    name: string;
    type: string;
    size: string;
    alignment: string;
    challenge_rating: string;
    senses?: string;
    languages?: string;
    hit_dice: string;
  };
  defenses: {
    [key: string]: string | undefined;
    armor_class: string;
    armor_desc: string;
    hit_points: string;
    damage_resistances?: string;
    condition_immunities?: string;
    damage_immunities?: string;
    damage_vulnerabilities?: string;
  };
  speed: {
    [key: string]: string | undefined;
    swim?: string;
    Burrow?: string;
    walk?: string;
  };
  stats: {
    [key: string]: string | undefined;
    strength?: string;
    dexterity?: string;
    constitution?: string;
    intelligence?: string;
    wisdom?: string;
    charisma?: string;
  };
  saving_throws: {
    [key: string]: string | undefined;
    strength_save?: string;
    dexterity_save?: string;
    constitution_save?: string;
    intelligence_save?: string;
    wisdom_save?: string;
    charisma_save?: string;
  };
  skills: {
    [key: string]: string | undefined;
    athletics?: string;
    stealth?: string;
    history?: string;
    acrobatics?: string;
    perception?: string;
  };
  actions: [
    {
      name?: string;
      desc?: string;
      attack_bonus?: string;
      damage_dice?: string;
      damage_bonus?: string;
    }
  ];
  reactions?: [
    {
      name?: string;
      desc?: string;
    }
  ];
  legendaryDesc?: string;
  legendaryActions: [
    {
      name?: string;
      desc?: string;
    }
  ];
  special_abilities: [
    {
      name?: string;
      desc?: string;
    }
  ];
};
