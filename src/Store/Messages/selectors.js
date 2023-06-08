export const messageListSelector = (state) => state.messages.messageList;
export const currentChatMessagesSelector = (state, chatId) =>
  state.messages.messageList[chatId];
