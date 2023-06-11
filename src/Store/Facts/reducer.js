import {
  GET_FACT_SUCCESS,
  GET_FACT_REQUEST,
  GET_FACT_ERROR,
} from "./constants";

const initialState = {
  factsUrl: undefined,
  loading: true,
  error: false,
};

export const factsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FACT_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_FACT_SUCCESS: {
      return {
        ...state,
        loading: false,
        factsUrl: action.payload,
      };
    }
    case GET_FACT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
};
