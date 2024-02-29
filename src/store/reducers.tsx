export interface RootState {
  showStatModal: boolean;
  showHexaModal: boolean;
  showEquipmentModal: boolean;
  showHyperStatModal: boolean;
  showAbilityModal: boolean;
}

const initialState: RootState = {
  showStatModal: true,
  showHexaModal: false,
  showEquipmentModal: false,
  showHyperStatModal: false,
  showAbilityModal: false,
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
    default:
      return state;
  }
};

export default rootReducer;
