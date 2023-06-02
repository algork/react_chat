import "./Home.css";
import { ChatList } from "../../Components/ChatList";

export function Home() {
  return (
    <div className="container">
      <ChatList />
      <div className="chat-wrapper ">
        <div className="no-chat-selected">Please select a chat</div>
      </div>
    </div>
  );
}
