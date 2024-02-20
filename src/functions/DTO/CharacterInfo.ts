export interface CharacterInfo {
  ocid: string;
  character_name: string;
  world_name: string;
  character_gender: string;
  character_class: string;
  character_class_level: string;
  character_level: number;
  character_exp: number;
  character_exp_rate: string;
  character_guild_name: string;
  character_image: string;
  character_hexa_core_equipment: HexaCoreEquipment;
  unionRanking: UnionRankingInfo;
  final_stat: FinalStat[];
}

export const initialValue: CharacterInfo = {
  ocid: "",
  character_name: "",
  world_name: "",
  character_gender: "",
  character_class: "",
  character_class_level: "",
  character_level: 0,
  character_exp: 0,
  character_exp_rate: "",
  character_guild_name: "",
  character_image: "",
  character_hexa_core_equipment: {
    hexa_core_name: "",
    hexa_core_level: 0,
    hexa_core_type: "",
    linked_skill: [],
  },
  unionRanking: {
    date: "",
    ranking: 0,
    character_name: "",
    world_name: "",
    class_name: "",
    sub_class_name: "",
    union_level: 0,
    union_power: 0,
  },
  final_stat: [],
};

export interface CharacterBasicInfo {
  character_name: string;
  world_name: string;
  character_gender: string;
  character_class: string;
  character_class_level: string;
  character_level: number;
  character_exp: number;
  character_exp_rate: string;
  character_guild_name: string;
  character_image: string;
}

export interface LinkedHexaSkill {
  hexa_skill_id: string;
}

export interface HexaCoreEquipment {
  hexa_core_name: string;
  hexa_core_level: number;
  hexa_core_type: string;
  linked_skill: LinkedHexaSkill[];
}

export interface UnionRankingInfo {
  date: string;
  ranking: number;
  character_name: string;
  world_name: string;
  class_name: string;
  sub_class_name: string;
  union_level: number;
  union_power: number;
}

export interface MyComponentProps {
  info: CharacterInfo;
}

export interface FinalStat {
  stat_name: string;
  stat_value: string;
}
