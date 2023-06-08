import { ADD_CHAT_ACTION, DELETE_CHAT_ACTION } from "./constants";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  chatList: [
    { name: "Chat-1", id: uuidv4() },
    { name: "OLLOLO2", id: uuidv4() },
    {
      name: "Sorry MAAAAM",
      id: uuidv4(),
    },
    { name: "HELLO ALO", id: uuidv4() },
  ],
  qwerty: "",
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT_ACTION:
      return {
        ...state,
        chatList: [
          ...state.chatList,
          { id: uuidv4(), name: action.payload.name },
        ],
      };
    case DELETE_CHAT_ACTION:
      const updatedChatList = state.chatList.filter(
        (chat) => chat.id !== action.payload.chatId
      );
      return {
        ...state,
        chatList: updatedChatList,
      };
    default:
      return state;
  }
};
