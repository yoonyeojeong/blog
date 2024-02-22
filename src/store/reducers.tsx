export interface RootState {
  showStatModal: boolean;
  showHexaModal: boolean;
  showEquipmentModal: boolean;
}

const initialState: RootState = {
  showStatModal: false,
  showHexaModal: false,
  showEquipmentModal: false,
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
    default:
      return state;
  }
};

export default rootReducer;
