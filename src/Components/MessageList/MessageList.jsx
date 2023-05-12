import { useEffect, useRef, useState } from "react";

export const MessageList = () => {
  const [messageList, setMessageList] = useState([]);
  const inputRef = useRef(null);
  //   const [message, setMessage] = useState("");

  function createMessage(author, message, id) {
    return {
      id: id,
      text: message,
      author: author,
    };
  }

  const sendMessage = () => {
    const message = createMessage(
      "Alex",
      inputRef.current.value,
      messageList.length + 1
    );
    setMessageList([...messageList, message]);

    inputRef.current.value = "";
    console.log(inputRef.current.value);
  };

  useEffect(() => {
    const botSendMessage = () => {
      const newMessage = createMessage(
        "Bot",
        "Hello, I'm your personal slave",
        messageList.length + 1
      );
      console.log(messageList);
      setMessageList([...messageList, newMessage]);
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
    <div>
      <div>
        {messageList.map((msg) => (
          <div key={msg.id}>
            <div>{msg.author}</div>
            <div>{msg.text}</div>
          </div>
        ))}
      </div>
      <input ref={inputRef} />
      <button onClick={() => sendMessage()}>SEND</button>
    </div>
  );
};