import { MonsterFactoryType } from "@/@types/monsterFactoryType";

export function MonsterFactory(response: any): MonsterFactoryType {
  return {
    indexes: {
      slug: response.slug,
    },
    characteristics: {
      name: response.name,
      type: response.type,
      size: response.size,
      alignment: response.alignment,
      challenge_rating: response.challenge_rating,
      senses: response.senses,
      languages: response.languages,
      hit_dice: response.hit_dice,
    },
    defenses: {
      armor_class: response.armor_class,
      armor_desc: response.armor_desc,
      hit_points: response.hit_points,
      damage_resistances: response.damage_resistances,
      condition_immunities: response.condition_immunities,
      damage_immunities: response.damage_immunities,
      damage_vulnerabilities: response.damage_vulnerabilities,
    },
    speed: {
      swim: response.speed?.swim,
      Burrow: response.speed?.burrow,
      walk: response.speed?.walk,
    },
    stats: {
      strength: response.strength,
      dexterity: response.dexterity,
      constitution: response.constitution,
      intelligence: response.intelligence,
      wisdom: response.wisdom,
      charisma: response.charisma,
    },
    Saving_throws: {
      strength_save: response.strength_save,
      dexterity_save: response.dexterity_save,
      constitution_save: response.constitution_save,
      intelligence_save: response.intelligence_save,
      wisdom_save: response.wisdom_save,
      charisma_save: response.charisma_save,
      perception: response.perception,
    },
    skills: {
      athletics: response.skills?.athletics,
      stealth: response.skills?.stealth,
      history: response.skills?.history,
      acrobatics: response.skills?.acrobatics,
      perception: response.skills?.perception,
    },
    actions: response.actions,
    reactions: response.reactions,
    legendaryDesc: response.legendary_desc,
    legendaryActions: response.legendary_actions,
    special_abilities: response.special_abilities,
  };
}
