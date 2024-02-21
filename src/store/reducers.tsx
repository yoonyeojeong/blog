export interface RootState {
  showStatModal: boolean;
  showHexaModal: boolean;
}

const initialState: RootState = {
  showStatModal: false,
  showHexaModal: false,
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
    default:
      return state;
  }
};

export default rootReducer;
