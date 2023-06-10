import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./AddChatModal.css";
import { useDispatch } from "react-redux";
import { addChatAction } from "../../Store/Chats/actions";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useEffect } from "react";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function AddChatModal() {
  const [open, setOpen] = React.useState(false);
  const inputChatRef = React.useRef();
  const [inputChatValue, setInputChatValue] = useState("");
  const dispatch = useDispatch();
  const isInputChatEmpty = inputChatValue.trim() === "";

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleChatAdd();
    setInputChatValue("");
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputChatRef.current?.focus();
      }, 0);
    }
  }, [open]);

  const handleChatAdd = () => {
    // const newChat = createChat(inputRef.current.value);
    // setChats([...chats, newChat]);
    dispatch(addChatAction({ name: inputChatRef.current.value }));
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <AddCircleIcon fontSize="large" />
      </Button>
      <Modal
        open={open}
        // onClose={handleClose}
        // onRendered={() => inputChatRef.current?.focus()}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add new chat name
          </Typography>
          <div className="add-chat-modal-form-container">
            <form className="form-add-chat-modal" onSubmit={handleSubmit}>
              <input
                placeholder="new chat name"
                className="input-add-chat-modal"
                onChange={(event) => setInputChatValue(event.target.value)}
                ref={inputChatRef}
              />
              <div className="add-chat-modal-buttons">
                <div>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                </div>
                <div>
                  <Button
                    // disabled={isInputChatEmpty}
                    variant="contained"
                    onClick={handleChatAdd}
                    disabled={isInputChatEmpty}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
