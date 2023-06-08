import { ADD_MESSAGE_ACTION } from "./constants";
import { v4 as uuidv4 } from "uuid";

export const addMessageAction = (chatId, messageData) => ({
  type: ADD_MESSAGE_ACTION,
  payload: { chatId, ...messageData },
});

export const addMessageWithThunk = (chatId, messageData) => (dispatch) => {
  dispatch(addMessageAction(chatId, messageData));

  setTimeout(() => {
    dispatch(
      addMessageAction(chatId, {
        id: uuidv4(),
        author: "Bot",
        message: "This is a bot message",
      })
    );
  }, 1500);
};
