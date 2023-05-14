import { useEffect, useRef, useState } from "react";
import "./MessageList.css";

export const MessageList = () => {
  const [messageList, setMessageList] = useState([]);
  const inputRef = useRef(null);
  //   const [message, setMessage] = useState("");

  function createMessage(image, author, message, id) {
    return {
      id: id,
      text: message,
      author: author,
      image: image,
    };
  }

  const sendMessage = () => {
    const message = createMessage(
      "./avatar-user.png",
      "Alex",
      inputRef.current.value,
      messageList.length + 1
    );
    console.log("SEND MESSAGE - MESSAGE LIST", messageList);
    console.log("SEND MESSAGE - MESSAGE", message);
    setMessageList([...messageList, message]);

    inputRef.current.value = "";
    console.log(inputRef.current.value);
  };

  useEffect(() => {
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
    <div className="chat-wrapper">
      <div className="chat-field">
        {messageList.map((msg) => (
          <div className="message-div" key={msg.id}>
            <div
              className="avatar-wrapper"
              style={{
                flexDirection: msg.author === "Alex" ? "row-reverse" : "row",
              }}
            >
              <div>
                <img className="avatar" src={msg.image} alt="avatar" />
              </div>
              <div className="author-text-font">{msg.author}</div>
            </div>
            <div className="message-font">{msg.text}</div>
          </div>
        ))}
      </div>
      <div className="input-div">
        <input ref={inputRef} />
        <button onClick={() => sendMessage()}>SEND</button>
      </div>
    </div>
  );
};
