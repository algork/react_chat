import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Stack from "@mui/material/Stack";
import ListItemText from "@mui/material/ListItemText";
import { Link, useNavigate, useParams } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteChatAction } from "../../Store/Chats/actions";
import { chatsSelector } from "../../Store/Chats/selectors";
import { AddChatModal } from "../AddChatModal/AddChatModal";
import HelpIcon from "@mui/icons-material/Help";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button, IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { DeleteChatModal } from "../DeleteChatModal/DeleteChatModal";

export function ChatList() {
  const { chatId } = useParams();
  const [activeChatId, setActiveChatId] = useState(chatId); //setting chatId as initial state for activeChatId so it makes chat highlighted on the first click on first render from Home page. otherwise it was undefined, since useState was set to (null)
  // const [contextMenu, setContextMenu] = useState(false);
  const dispatch = useDispatch();
  const chats = useSelector(chatsSelector);
  const navigate = useNavigate();

  // const handleContextMenu = (e) => {
  //   e.preventDefault();
  //   setContextMenu((current) => !current);
  // };

  const handleChatSelect = (selectedChatId) => {
    setActiveChatId(selectedChatId);
  };

  // const handleChatSelect = (selcetedChatId) => {
  //   console.log("CHATS::SELECTED_CHAT_ID", selcetedChatId);
  //   console.log("CHATS::CHAT_ID_FROM_PARAMS", chatId);
  //   setActiveChatId(selcetedChatId);
  // };

  // const handleChatDelete = (chatId) => {
  //   // const updatedChats = chats.filter((chat) => chat.id !== chatId);
  //   // setChats(updatedChats);
  //   dispatch(deleteChatAction(chatId));
  // };

  // function createChat(name) {
  //   // console.log(params);
  //   return {
  //     id: chats.length + 1,
  //     name: name,
  //     image: "./lolo.jpg",
  //     messageList: [],
  //   };
  // }

  useEffect(() => {
    if (chatId && !chats.some((chat) => chat.id === chatId)) {
      navigate("/");
    }
  }, [chatId, chats, navigate]);

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {/* <h1>Name selector from Profile {userName}</h1> */}
      <List>
        {chats.map((chat) => (
          <ListItem key={chat.id} disablePadding>
            <Link
              to={"/chats/" + chat.id}
              style={{ textDecoration: "none", color: "black", width: "100%" }}
            >
              <ListItemButton
                selected={activeChatId === chat.id}
                onClick={() => handleChatSelect(chat.id)}
                // onContextMenu={handleContextMenu}
              >
                <Stack direction="row" spacing={2}>
                  <Avatar
                    alt={chat.name}
                    // src={chat.image}
                    sx={{ marginRight: 2 }}
                  >
                    {chat.name[0]}
                  </Avatar>
                </Stack>
                <ListItemText primary={chat.name} />
                <DeleteChatModal color="error" />
                {/* <IconButton
                  color="error"
                  onClick={() => handleChatDelete(chat.id)}
                >
                  <DeleteForeverIcon color="error" />
                </IconButton> */}
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>

      <div>
        <div className="profile-button">
          <Link to="/profile">
            <Button>
              <AccountCircleIcon fontSize="large" style={{ color: "green" }} />
            </Button>
          </Link>
        </div>
        <div className="add-chat-button">
          <AddChatModal />
        </div>
      </div>
      <div>
        <Link to="/facts">
          <Button>
            <HelpIcon fontSize="large" style={{ color: "red" }} />
          </Button>
        </Link>
      </div>
    </Box>
  );
}
