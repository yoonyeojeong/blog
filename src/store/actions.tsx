export const setShowStatModal = (show: boolean) => ({
  type: "SET_SHOW_STAT_MODAL",
  payload: show,
});

export const setShowHexaModal = (show: boolean) => ({
  type: "SET_SHOW_HEXA_MODAL",
  payload: show,
});

export const setShowEquipmentModal = (show: boolean) => ({
  type: "SET_SHOW_EQUIPMENT_MODAL",
  payload: show,
});

export const setShowHyperStatModal = (show: boolean) => ({
  type: "SET_SHOW_HYPERSTAT_MODAL",
  payload: show,
});

export const setShowAbilityModal = (show: boolean) => ({
  type: "SET_SHOW_ABILITY_MODAL",
  payload: show,
});

export const setShowItemModal = (show: boolean) => ({
  type: "SET_SHOW_ITEM_MODAL",
  payload: show,
});

export const setEquipmentPreset = (value: number) => ({
  type: "SET_EQUIPMENT_PRESET",
  payload: value,
});

export const setAbilityPreset = (value: number) => ({
  type: "SET_ABILITY_PRESET",
  payload: value,
});
