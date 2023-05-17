import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import ListItemText from "@mui/material/ListItemText";
import DraftsIcon from "@mui/icons-material/Drafts";
import InboxIcon from "@mui/icons-material/Inbox";

import "./MessageList.css";
import { ChatList } from "../ChatList/ChatList";
import { Troubleshoot } from "@mui/icons-material";

export const MessageList = () => {
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
        <div className="input-div">
          <form
            className="chat-form"
            onSubmit={handleSubmit}
            onChange={(event) => setInputValue(event.target.value)}
          >
            <input className="input" placeholder="Message" ref={inputRef} />
            <IconButton
              className="button"
              onClick={() => sendMessage()}
              color="primary"
              aria-label="send"
              size="large"
              type="submit"
              disableRipple
              disabled={isInputEmpty}
              sx={{
                backgroundColor: "white",
              }}
            >
              <SendIcon />
            </IconButton>
          </form>
        </div>
      </div>
    </div>
  );
};
