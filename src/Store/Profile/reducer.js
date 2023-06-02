import { TOGGLE_USER_NAME_ACTION } from "./constants";

const initialState = {
  showName: true,
  name: "Alex",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_USER_NAME_ACTION:
      return {
        ...state,
        showName: !state.showName,
      };
    default:
      return state;
  }
};
