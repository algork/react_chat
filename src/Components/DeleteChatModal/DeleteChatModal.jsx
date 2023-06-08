import * as React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import { deleteChatAction } from "../../Store/Chats/actions";
import { useParams } from "react-router-dom";
import {
  chatIdSelector,
  chatsSelector,
  getChatById,
} from "../../Store/Chats/selectors";

export function DeleteChatModal() {
  const { chatId } = useParams();

  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChatDelete = () => {
    // const updatedChats = chats.filter((chat) => chat.id !== chatId);
    // setChats(updatedChats);
    dispatch(deleteChatAction(chatId));
    // if (activeChatId === chatId) {
    //   setActiveChatId(null);
    // }
    handleClose();
  };

  return (
    <div>
      <IconButton aria-label="delete" color="error" onClick={handleClick}>
        <DeleteForeverIcon
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          color="error"
        />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem color="error" onClick={handleChatDelete}>
          Delete Chat
        </MenuItem>
      </Menu>
    </div>
  );
}
