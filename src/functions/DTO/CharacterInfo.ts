export interface MyComponentProps {
  info: CharacterInfo;
}

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
  character_hexa_core_equipment: HexaCoreEquipment[];
  unionRanking: UnionRankingInfo;
  final_stat: FinalStat[];
  item_equipment: ItemEquipmentInfo;
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
  character_hexa_core_equipment: [
    {
      hexa_core_name: "",
      hexa_core_level: 0,
      hexa_core_type: "",
      linked_skill: [],
    },
  ],
  unionRanking: {
    ranking: [
      {
        date: "",
        ranking: 0,
        character_name: "",
        world_name: "",
        class_name: "",
        sub_class_name: "",
        union_level: 0,
        union_power: 0,
      },
    ],
  },
  final_stat: [],
  item_equipment: {
    date: "",
    character_gender: "",
    character_class: "",
    preset_no: 0,
    item_equipment: [],
    item_equipment_preset_1: [],
    item_equipment_preset_2: [],
    item_equipment_preset_3: [],
    title: {
      title_name: "",
      title_icon: "",
      title_description: "",
      date_expire: "",
      date_option_expire: "",
    },
    dragon_equipment: [],
    mechanic_equipment: [],
  },
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
  ranking: {
    date: string;
    ranking: number;
    character_name: string;
    world_name: string;
    class_name: string;
    sub_class_name: string;
    union_level: number;
    union_power: number;
  }[];
}

export interface ItemEquipmentInfo {
  date: string;
  character_gender: string;
  character_class: string;
  preset_no: number;
  item_equipment: ItemEquipment[];
  item_equipment_preset_1: ItemEquipment[];
  item_equipment_preset_2: ItemEquipment[];
  item_equipment_preset_3: ItemEquipment[];
  title: TitleEquipment;
  dragon_equipment: DragonEquipment[];
  mechanic_equipment: MechanicEquipment[];
}

export interface ItemEquipment {
  item_equipment_part: string;
  item_equipment_slot: string;
  item_name: string;
  item_icon: string;
  item_description: string;
  item_shape_name: string;
  item_shape_icon: string;
  item_gender: string;
  item_total_option: {
    str: string;
    dex: string;
    int: string;
    luk: string;
    max_hp: string;
    max_mp: string;
    attack_power: string;
    magic_power: string;
    armor: string;
    speed: string;
    jump: string;
    boss_damage: string;
    ignore_monster_armor: string;
    all_stat: string;
    damage: string;
    equipment_level_decrease: number;
    max_hp_rate: string;
    max_mp_rate: string;
  };
  item_base_option: {
    str: string;
    dex: string;
    int: string;
    luk: string;
    max_hp: string;
    max_mp: string;
    attack_power: string;
    magic_power: string;
    armor: string;
    speed: string;
    jump: string;
    boss_damage: string;
    ignore_monster_armor: string;
    all_stat: string;
    max_hp_rate: string;
    max_mp_rate: string;
    base_equipment_level: number;
  };
  potential_option_grade: string;
  additional_potential_option_grade: string;
  potential_option_1: string;
  potential_option_2: string;
  potential_option_3: string;
  additional_potential_option_1: string;
  additional_potential_option_2: string;
  additional_potential_option_3: string;
  equipment_level_increase: number;
  item_exceptional_option: {
    str: string;
    dex: string;
    int: string;
    luk: string;
    max_hp: string;
    max_mp: string;
    attack_power: string;
    magic_power: string;
  };
  item_add_option: {
    str: string;
    dex: string;
    int: string;
    luk: string;
    max_hp: string;
    max_mp: string;
    attack_power: string;
    magic_power: string;
    armor: string;
    speed: string;
    jump: string;
    boss_damage: string;
    damage: string;
    all_stat: string;
    equipment_level_decrease: number;
  };
  growth_exp: number;
  growth_level: number;
  scroll_upgrade: string;
  cuttable_count: string;
  golden_hammer_flag: string;
  scroll_resilience_count: string;
  scroll_upgradable_count: string;
  soul_name: string;
  soul_option: string;
  item_etc_option: {
    str: string;
    dex: string;
    int: string;
    luk: string;
    max_hp: string;
    max_mp: string;
    attack_power: string;
    magic_power: string;
    armor: string;
    speed: string;
    jump: string;
  };
  starforce: string;
  starforce_scroll_flag: string;
  item_starforce_option: {
    str: string;
    dex: string;
    int: string;
    luk: string;
    max_hp: string;
    max_mp: string;
    attack_power: string;
    magic_power: string;
    armor: string;
    speed: string;
    jump: string;
  };
  special_ring_level: number;
  date_expire: string;
}

export const initialItemEquipment: ItemEquipment = {
  item_equipment_part: "",
  item_equipment_slot: "",
  item_name: "",
  item_icon: "",
  item_description: "",
  item_shape_name: "",
  item_shape_icon: "",
  item_gender: "",
  item_total_option: {
    str: "",
    dex: "",
    int: "",
    luk: "",
    max_hp: "",
    max_mp: "",
    attack_power: "",
    magic_power: "",
    armor: "",
    speed: "",
    jump: "",
    boss_damage: "",
    ignore_monster_armor: "",
    all_stat: "",
    damage: "",
    equipment_level_decrease: 0,
    max_hp_rate: "",
    max_mp_rate: "",
  },
  item_base_option: {
    str: "",
    dex: "",
    int: "",
    luk: "",
    max_hp: "",
    max_mp: "",
    attack_power: "",
    magic_power: "",
    armor: "",
    speed: "",
    jump: "",
    boss_damage: "",
    ignore_monster_armor: "",
    all_stat: "",
    max_hp_rate: "",
    max_mp_rate: "",
    base_equipment_level: 0,
  },
  potential_option_grade: "",
  additional_potential_option_grade: "",
  potential_option_1: "",
  potential_option_2: "",
  potential_option_3: "",
  additional_potential_option_1: "",
  additional_potential_option_2: "",
  additional_potential_option_3: "",
  equipment_level_increase: 0,
  item_exceptional_option: {
    str: "",
    dex: "",
    int: "",
    luk: "",
    max_hp: "",
    max_mp: "",
    attack_power: "",
    magic_power: "",
  },
  item_add_option: {
    str: "",
    dex: "",
    int: "",
    luk: "",
    max_hp: "",
    max_mp: "",
    attack_power: "",
    magic_power: "",
    armor: "",
    speed: "",
    jump: "",
    boss_damage: "",
    damage: "",
    all_stat: "",
    equipment_level_decrease: 0,
  },
  growth_exp: 0,
  growth_level: 0,
  scroll_upgrade: "",
  cuttable_count: "",
  golden_hammer_flag: "",
  scroll_resilience_count: "",
  scroll_upgradable_count: "",
  soul_name: "",
  soul_option: "",
  item_etc_option: {
    str: "",
    dex: "",
    int: "",
    luk: "",
    max_hp: "",
    max_mp: "",
    attack_power: "",
    magic_power: "",
    armor: "",
    speed: "",
    jump: "",
  },
  starforce: "",
  starforce_scroll_flag: "",
  item_starforce_option: {
    str: "",
    dex: "",
    int: "",
    luk: "",
    max_hp: "",
    max_mp: "",
    attack_power: "",
    magic_power: "",
    armor: "",
    speed: "",
    jump: "",
  },
  special_ring_level: 0,
  date_expire: "",
};

export interface TitleEquipment {
  title_name: string;
  title_icon: string;
  title_description: string;
  date_expire: string;
  date_option_expire: string;
}

export const initialTitleEquipment: TitleEquipment = {
  title_name: "",
  title_icon: "",
  title_description: "",
  date_expire: "",
  date_option_expire: "",
};

export interface DragonEquipment {
  item_equipment_part: string;
  equipment_slot: string;
  item_name: string;
  item_icon: string;
  item_description: string;
  item_shape_name: string;
  item_shape_icon: string;
  item_gender: string;
  item_total_option: {
    str: string;
    dex: string;
    int: string;
    luk: string;
    max_hp: string;
    max_mp: string;
    attack_power: string;
    magic_power: string;
    armor: string;
    speed: string;
    jump: string;
    boss_damage: string;
    ignore_monster_armor: string;
    all_stat: string;
    damage: string;
    equipment_level_decrease: number;
    max_hp_rate: string;
    max_mp_rate: string;
  };
  item_base_option: {
    str: string;
    dex: string;
    int: string;
    luk: string;
    max_hp: string;
    max_mp: string;
    attack_power: string;
    magic_power: string;
    armor: string;
    speed: string;
    jump: string;
    boss_damage: string;
    ignore_monster_armor: string;
    all_stat: string;
    max_hp_rate: string;
    max_mp_rate: string;
    base_equipment_level: number;
  };
  equipment_level_increase: number;
  item_exceptional_option: {
    str: string;
    dex: string;
    int: string;
    luk: string;
    max_hp: string;
    max_mp: string;
    attack_power: string;
    magic_power: string;
  };
  item_add_option: {
    str: string;
    dex: string;
    int: string;
    luk: string;
    max_hp: string;
    max_mp: string;
    attack_power: string;
    magic_power: string;
    armor: string;
    speed: string;
    jump: string;
    boss_damage: string;
    damage: string;
    all_stat: string;
    equipment_level_decrease: number;
  };
  growth_exp: number;
  growth_level: number;
  scroll_upgrade: string;
  cuttable_count: string;
  golden_hammer_flag: string;
  scroll_resilience_count: string;
  scroll_upgradable_count: string;
  soul_name: string;
  soul_option: string;
  item_etc_option: {
    str: string;
    dex: string;
    int: string;
    luk: string;
    max_hp: string;
    max_mp: string;
    attack_power: string;
    magic_power: string;
    armor: string;
    speed: string;
    jump: string;
  };
  starforce: string;
  starforce_scroll_flag: string;
  item_starforce_option: {
    str: string;
    dex: string;
    int: string;
    luk: string;
    max_hp: string;
    max_mp: string;
    attack_power: string;
    magic_power: string;
    armor: string;
    speed: string;
    jump: string;
  };
  special_ring_level: number;
  date_expire: string;
}

export const initialDragonEquipment: DragonEquipment = {
  item_equipment_part: "",
  equipment_slot: "",
  item_name: "",
  item_icon: "",
  item_description: "",
  item_shape_name: "",
  item_shape_icon: "",
  item_gender: "",
  item_total_option: {
    str: "",
    dex: "",
    int: "",
    luk: "",
    max_hp: "",
    max_mp: "",
    attack_power: "",
    magic_power: "",
    armor: "",
    speed: "",
    jump: "",
    boss_damage: "",
    ignore_monster_armor: "",
    all_stat: "",
    damage: "",
    equipment_level_decrease: 0,
    max_hp_rate: "",
    max_mp_rate: "",
  },
  item_base_option: {
    str: "",
    dex: "",
    int: "",
    luk: "",
    max_hp: "",
    max_mp: "",
    attack_power: "",
    magic_power: "",
    armor: "",
    speed: "",
    jump: "",
    boss_damage: "",
    ignore_monster_armor: "",
    all_stat: "",
    max_hp_rate: "",
    max_mp_rate: "",
    base_equipment_level: 0,
  },
  equipment_level_increase: 0,
  item_exceptional_option: {
    str: "",
    dex: "",
    int: "",
    luk: "",
    max_hp: "",
    max_mp: "",
    attack_power: "",
    magic_power: "",
  },
  item_add_option: {
    str: "",
    dex: "",
    int: "",
    luk: "",
    max_hp: "",
    max_mp: "",
    attack_power: "",
    magic_power: "",
    armor: "",
    speed: "",
    jump: "",
    boss_damage: "",
    damage: "",
    all_stat: "",
    equipment_level_decrease: 0,
  },
  growth_exp: 0,
  growth_level: 0,
  scroll_upgrade: "",
  cuttable_count: "",
  golden_hammer_flag: "",
  scroll_resilience_count: "",
  scroll_upgradable_count: "",
  soul_name: "",
  soul_option: "",
  item_etc_option: {
    str: "",
    dex: "",
    int: "",
    luk: "",
    max_hp: "",
    max_mp: "",
    attack_power: "",
    magic_power: "",
    armor: "",
    speed: "",
    jump: "",
  },
  starforce: "",
  starforce_scroll_flag: "",
  item_starforce_option: {
    str: "",
    dex: "",
    int: "",
    luk: "",
    max_hp: "",
    max_mp: "",
    attack_power: "",
    magic_power: "",
    armor: "",
    speed: "",
    jump: "",
  },
  special_ring_level: 0,
  date_expire: "",
};

export interface MechanicEquipment {
  item_equipment_part: string;
  equipment_slot: string;
  item_name: string;
  item_icon: string;
  item_description: string;
  item_shape_name: string;
  item_shape_icon: string;
  item_gender: string;
  item_total_option: {
    str: string;
    dex: string;
    int: string;
    luk: string;
    max_hp: string;
    max_mp: string;
    attack_power: string;
    magic_power: string;
    armor: string;
    speed: string;
    jump: string;
    boss_damage: string;
    ignore_monster_armor: string;
    all_stat: string;
    damage: string;
    equipment_level_decrease: number;
    max_hp_rate: string;
    max_mp_rate: string;
  };
  item_base_option: {
    str: string;
    dex: string;
    int: string;
    luk: string;
    max_hp: string;
    max_mp: string;
    attack_power: string;
    magic_power: string;
    armor: string;
    speed: string;
    jump: string;
    boss_damage: string;
    ignore_monster_armor: string;
    all_stat: string;
    max_hp_rate: string;
    max_mp_rate: string;
    base_equipment_level: number;
  };
  equipment_level_increase: number;
  item_exceptional_option: {
    str: string;
    dex: string;
    int: string;
    luk: string;
    max_hp: string;
    max_mp: string;
    attack_power: string;
    magic_power: string;
  };
  item_add_option: {
    str: string;
    dex: string;
    int: string;
    luk: string;
    max_hp: string;
    max_mp: string;
    attack_power: string;
    magic_power: string;
    armor: string;
    speed: string;
    jump: string;
    boss_damage: string;
    damage: string;
    all_stat: string;
    equipment_level_decrease: number;
  };
  growth_exp: number;
  growth_level: number;
  scroll_upgrade: string;
  cuttable_count: string;
  golden_hammer_flag: string;
  scroll_resilience_count: string;
  scroll_upgradable_count: string;
  soul_name: string;
  soul_option: string;
  item_etc_option: {
    str: string;
    dex: string;
    int: string;
    luk: string;
    max_hp: string;
    max_mp: string;
    attack_power: string;
    magic_power: string;
    armor: string;
    speed: string;
    jump: string;
  };
  starforce: string;
  starforce_scroll_flag: string;
  item_starforce_option: {
    str: string;
    dex: string;
    int: string;
    luk: string;
    max_hp: string;
    max_mp: string;
    attack_power: string;
    magic_power: string;
    armor: string;
    speed: string;
    jump: string;
  };
  special_ring_level: number;
  date_expire: string;
}

export const initialMechanicEquipment: MechanicEquipment = {
  item_equipment_part: "",
  equipment_slot: "",
  item_name: "",
  item_icon: "",
  item_description: "",
  item_shape_name: "",
  item_shape_icon: "",
  item_gender: "",
  item_total_option: {
    str: "",
    dex: "",
    int: "",
    luk: "",
    max_hp: "",
    max_mp: "",
    attack_power: "",
    magic_power: "",
    armor: "",
    speed: "",
    jump: "",
    boss_damage: "",
    ignore_monster_armor: "",
    all_stat: "",
    damage: "",
    equipment_level_decrease: 0,
    max_hp_rate: "",
    max_mp_rate: "",
  },
  item_base_option: {
    str: "",
    dex: "",
    int: "",
    luk: "",
    max_hp: "",
    max_mp: "",
    attack_power: "",
    magic_power: "",
    armor: "",
    speed: "",
    jump: "",
    boss_damage: "",
    ignore_monster_armor: "",
    all_stat: "",
    max_hp_rate: "",
    max_mp_rate: "",
    base_equipment_level: 0,
  },
  equipment_level_increase: 0,
  item_exceptional_option: {
    str: "",
    dex: "",
    int: "",
    luk: "",
    max_hp: "",
    max_mp: "",
    attack_power: "",
    magic_power: "",
  },
  item_add_option: {
    str: "",
    dex: "",
    int: "",
    luk: "",
    max_hp: "",
    max_mp: "",
    attack_power: "",
    magic_power: "",
    armor: "",
    speed: "",
    jump: "",
    boss_damage: "",
    damage: "",
    all_stat: "",
    equipment_level_decrease: 0,
  },
  growth_exp: 0,
  growth_level: 0,
  scroll_upgrade: "",
  cuttable_count: "",
  golden_hammer_flag: "",
  scroll_resilience_count: "",
  scroll_upgradable_count: "",
  soul_name: "",
  soul_option: "",
  item_etc_option: {
    str: "",
    dex: "",
    int: "",
    luk: "",
    max_hp: "",
    max_mp: "",
    attack_power: "",
    magic_power: "",
    armor: "",
    speed: "",
    jump: "",
  },
  starforce: "",
  starforce_scroll_flag: "",
  item_starforce_option: {
    str: "",
    dex: "",
    int: "",
    luk: "",
    max_hp: "",
    max_mp: "",
    attack_power: "",
    magic_power: "",
    armor: "",
    speed: "",
    jump: "",
  },
  special_ring_level: 0,
  date_expire: "",
};

export interface FinalStat {
  stat_name: string;
  stat_value: string;
}
