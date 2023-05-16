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
    <div className="chat-window">
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
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
          <form>
            <input className="input" ref={inputRef} />
            <IconButton
              onClick={() => sendMessage()}
              color="primary"
              aria-label="send"
              size="large"
            >
              <SendIcon />
            </IconButton>
          </form>
        </div>
      </div>
    </div>
  );
};
