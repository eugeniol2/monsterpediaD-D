export type monsterResType = {
  slug?: string;
  name?: string;
  size?: string;
  type?: string;
  subtype?: string | null;
  group?: string | null;
  alignment?: string;
  armor_class?: number;
  armor_desc?: string;
  hit_points?: number;
  hit_dice?: string;
  speed?: {
    walk?: number;
    swim?: number;
  };
  strength?: number;
  dexterity?: number;
  constitution?: number;
  intelligence?: number;
  wisdom?: number;
  charisma?: number;
  strength_save?: null | number;
  dexterity_save?: null | number;
  constitution_save?: number;
  intelligence_save?: number;
  wisdom_save?: number;
  charisma_save?: null | number;
  perception?: number;
  skills?: {
    history?: number;
    perception?: number;
  };
  damage_vulnerabilities?: string;
  damage_resistances?: string;
  damage_immunities?: string;
  condition_immunities?: string;
  senses?: string;
  languages?: string;
  challenge_rating?: string;
  actions?: [
    {
      name?: string;
      desc?: string;
    },
    {
      name?: string;
      desc?: string;
      attack_bonus?: number;
      damage_dice?: string;
      damage_bonus?: number;
    },
    {
      name?: string;
      desc?: string;
      attack_bonus?: number;
      damage_dice?: string;
      damage_bonus?: number;
    },
    {
      name?: string;
      desc?: string;
    }
  ];
  reactions?: string;
  legendary_desc?: string;
  legendary_actions?: [
    {
      name?: string;
      desc?: string;
    },
    {
      name?: string;
      desc?: string;
    },
    {
      name?: string;
      desc?: string;
    }
  ];
  special_abilities?: [
    {
      name?: string;
      desc?: string;
    },
    {
      name?: string;
      desc?: string;
    },
    {
      name?: string;
      desc?: string;
    }
  ];
  spell_list?: [];
  img_main?: string;
  document__slug?: string;
  document__title?: string;
  document__license_url?: string;
};
