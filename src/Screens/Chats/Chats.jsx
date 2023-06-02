import { ChatList } from "../../Components/ChatList/ChatList";
import { MessageList } from "../../Components/MessageList/MessageList";

export function Chats() {
  return (
    <>
      <div className="container">
        <ChatList />
        <MessageList />
      </div>
    </>
  );
}
