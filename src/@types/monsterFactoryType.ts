export type MonsterFactoryType = {
  indexes: {
    slug: string;
  };
  characteristics: {
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
    armor_class: string;
    armor_desc: string;
    hit_points: string;
    damage_resistances?: string;
    condition_immunities?: string;
    damage_immunities?: string;
    damage_vulnerabilities?: string;
  };
  speed: {
    swim?: string;
    Burrow?: string;
    walk?: string;
  };
  stats: {
    strength?: string;
    dexterity?: string;
    constitution?: string;
    intelligence?: string;
    wisdom?: string;
    charisma?: string;
  };
  Saving_throws: {
    strength_save?: string;
    dexterity_save?: string;
    constitution_save?: string;
    intelligence_save?: string;
    wisdom_save?: string;
    charisma_save?: string;
    perception?: string;
  };
  skills: {
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
  reactions?: string;
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
