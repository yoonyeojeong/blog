export interface RootState {
  showStatModal: boolean;
  showHexaModal: boolean;
  showEquipmentModal: boolean;
  showHyperStatModal: boolean;
  showAbilityModal: boolean;
  showItemModal: boolean;
  equipmentPreset: number;
  abilityPreset: number;
}

const initialState: RootState = {
  showStatModal: true,
  showHexaModal: false,
  showEquipmentModal: false,
  showHyperStatModal: false,
  showAbilityModal: false,
  showItemModal: false,
  equipmentPreset: 255,
  abilityPreset: 255,
};

const rootReducer = (state: RootState = initialState, action: any) => {
  switch (action.type) {
    case "SET_SHOW_STAT_MODAL":
      return {
        ...state,
        showStatModal: action.payload,
      };
    case "SET_SHOW_HEXA_MODAL":
      return {
        ...state,
        showHexaModal: action.payload,
      };
    case "SET_SHOW_EQUIPMENT_MODAL":
      return {
        ...state,
        showEquipmentModal: action.payload,
      };
    case "SET_SHOW_HYPERSTAT_MODAL":
      return {
        ...state,
        showHyperStatModal: action.payload,
      };
    case "SET_SHOW_ABILITY_MODAL":
      return {
        ...state,
        showAbilityModal: action.payload,
      };
    case "SET_SHOW_ITEM_MODAL":
      return {
        ...state,
        showItemModal: action.payload,
      };
    case "SET_EQUIPMENT_PRESET":
      return {
        ...state,
        equipmentPreset: action.payload,
      };
    case "SET_ABILITY_PRESET":
      return {
        ...state,
        abilityPreset: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
