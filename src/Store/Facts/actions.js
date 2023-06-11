import {
  GET_FACT_REQUEST,
  GET_FACT_SUCCESS,
  GET_FACT_ERROR,
} from "./constants";

export const getFactsRequestAction = () => ({
  type: GET_FACT_REQUEST,
});
export const getFactsSuccessAction = (factsUrl) => ({
  type: GET_FACT_SUCCESS,
  payload: factsUrl,
});
export const getFactsErrorAction = () => ({
  type: GET_FACT_ERROR,
});

export const getFactsActionWithThunk = () => async (disptach, getState) => {
  disptach(getFactsRequestAction());
  const count = Math.floor(Math.random() * (20 - 1) + 1);
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${count}`
    );

    if (!response.ok) {
      throw new Error(`Error getting data with status`);
    }

    const result = await response.json();

    disptach(getFactsSuccessAction(result));
    console.log(result.title);
  } catch (error) {
    disptach(getFactsErrorAction());
  }
};
