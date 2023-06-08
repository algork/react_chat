import {
  CHANGE_USER_NAME_ACTION,
  TOGGLE_CHECKBOX_STATUS_ACTION,
  TOGGLE_USER_NAME_ACTION,
} from "./constants";

const initialState = {
  showName: true,
  name: "Alex",
  checkboxStatus: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_USER_NAME_ACTION:
      return {
        ...state,
        showName: !state.showName,
      };
    case TOGGLE_CHECKBOX_STATUS_ACTION:
      return {
        ...state,
        checkboxStatus: !state.checkboxStatus,
      };
    case CHANGE_USER_NAME_ACTION:
      return {
        ...state,
        name: action.payload.name,
      };
    default:
      return state;
  }
};
