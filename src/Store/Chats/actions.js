import { ADD_CHAT_ACTION, DELETE_CHAT_ACTION } from "./constants";

export const addChatAction = (payload) => ({
  type: ADD_CHAT_ACTION,
  payload,
});

export const deleteChatAction = (chatId) => ({
  type: DELETE_CHAT_ACTION,
  payload: { chatId },
});
