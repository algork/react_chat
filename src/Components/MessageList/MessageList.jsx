import { useEffect, useRef, useState } from "react";
import "./MessageList.css";
import { ChatList } from "../ChatList/ChatList";
import { MessageForm } from "../MessageForm/MessageForm";

export function MessageList() {
  const [messageList, setMessageList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const chatContainerRef = useRef(null);

  const isInputEmpty = inputValue.trim() === "";

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
  };

  function createMessage(image, author, message, id) {
    return {
      id: id,
      text: message,
      author: author,
      image: image,
    };
  }

  const sendMessage = () => {
    const userMessage = createMessage(
      "./avatar-user.png",
      "Alex",
      inputRef.current.value,
      messageList.length + 1
    );
    console.log("SEND MESSAGE - MESSAGE LIST", messageList);
    console.log("SEND MESSAGE - MESSAGE", userMessage);
    setMessageList([...messageList, userMessage]);

    inputRef.current.value = "";
    inputRef.current?.focus();
    console.log(inputRef.current.value);
  };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    inputRef.current?.focus();

    scrollToBottom();

    const botSendMessage = () => {
      const botMessage = createMessage(
        "./avatar-bot.png",
        "Bot",
        "Hello, I'm your personal slave",
        messageList.length + 1
      );
      console.log("BOTSEND MESSAGE - MESSAGE LIST", messageList);
      console.log("BOTSEND MESSAGE - MESSAGE", botMessage);
      setMessageList([...messageList, botMessage]);
    };

    const timer = setTimeout(() => {
      const lastMessage =
        messageList.length !== 0 ? messageList[messageList.length - 1] : null;
      if (lastMessage && lastMessage.author !== "Bot") {
        botSendMessage();
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [messageList]);

  return (
    <div className="container">
      <ChatList />

      <div className="chat-wrapper">
        <div className="chat-field" ref={chatContainerRef}>
          {messageList.map((msg) => (
            <div
              className="message-container"
              style={{
                justifyContent: msg.author === "Bot" ? "flex-end" : "flex-end",
                flexDirection: msg.author === "Bot" ? "row-reverse" : "row",
              }}
              key={msg.id}
            >
              <div
                className="message-div"
                style={{
                  backgroundColor:
                    msg.author === "Alex" ? "#e3fdd6" : "#fbffff",
                }}
              >
                <div
                  className="author-text-font"
                  style={{
                    color: msg.author === "Bot" ? "#6658df" : null,
                    display: msg.author === "Alex" ? "none" : "block",
                    justifyContent:
                      msg.author === "Bot" ? "flex-start" : "flex-end",
                  }}
                >
                  {msg.author}
                </div>
                <div className="message-font">{msg.text}</div>
              </div>
              <div>
                <img className="avatar" src={msg.image} alt="avatar" />
              </div>
            </div>
          ))}
        </div>
        <MessageForm
          onSubmit={handleSubmit}
          onChange={(event) => setInputValue(event.target.value)}
          inputRef={inputRef}
          isInputEmpty={isInputEmpty}
          onSendMessage={sendMessage}
        />
      </div>
    </div>
  );
}
