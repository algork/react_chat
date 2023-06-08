import { ADD_MESSAGE_ACTION } from "./constants";

export const addMessageAction = (chatId, messageData) => ({
  type: ADD_MESSAGE_ACTION,
  payload: { chatId, ...messageData },
});
