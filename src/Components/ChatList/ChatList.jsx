import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Stack from "@mui/material/Stack";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import { useRef, useState } from "react";
import { Profile } from "../../Screens/Profile/Profile";

export const initialChats = [
  { name: "Chat-1", id: 1, image: "./lolo.jpg", messageList: [] },
  { name: "OLLOLO2", id: 2, image: "./lolo.jpg", messageList: [] },
  { name: "Sorry MAAAAM", id: 3, image: "./lolo.jpg", messageList: [] },
  { name: "HELLO ALO", id: 4, image: "./lolo.jpg", messageList: [] },
];
export function ChatList() {
  const [chats, setChats] = useState(initialChats);
  const [activeChatId, setActiveChatId] = useState(null);
  const inputRef = useRef();

  const handleChatSelect = (chatId) => {
    console.log(chatId);
    setActiveChatId(chatId);
  };

  const handleChatDelete = (chatId) => {
    const updatedChats = chats.filter((chat) => chat.id !== chatId);
    setChats(updatedChats);
    if (activeChatId === chatId) {
      setActiveChatId(null);
    }
  };

  function createChat(name) {
    // console.log(params);
    return {
      id: chats.length + 1,
      name: name,
      image: "./lolo.jpg",
      messageList: [],
    };
  }

  const handleChatAdd = () => {
    const newChat = createChat(inputRef.current.value);
    setChats([...chats, newChat]);
    inputRef.current.value = "";
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List>
        {chats.map((chat) => (
          <ListItem key={chat.id} disablePadding>
            <Link to={"/chats/" + chat.id}>
              <ListItemButton
                selected={activeChatId === chat.id}
                onClick={() => handleChatSelect(chat.id)}
              >
                <Stack direction="row" spacing={2}>
                  <Avatar
                    alt={chat.name}
                    src={chat.image}
                    sx={{ marginRight: 2 }}
                  ></Avatar>
                </Stack>
                <ListItemText primary={chat.name} />
              </ListItemButton>
            </Link>
            <button
              style={{ paddingRight: "15px" }}
              onClick={() => handleChatDelete(chat.id)}
            >
              x
            </button>
          </ListItem>
        ))}
      </List>
      <div className="addChat">
        <input ref={inputRef} placeholder="add chat" />
        <button onClick={handleChatAdd}>Add chat</button>
      </div>
      <Link to="/profile">
        <div>
          <button>Profile page</button>
        </div>
      </Link>
    </Box>
  );
}
