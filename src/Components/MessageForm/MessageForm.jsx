import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import "./MessageForm.css";

export function MessageForm({
  onSubmit,
  onChange,
  inputRef,
  isInputEmpty,
  onSendMessage,
}) {
  return (
    <div className="input-div">
      <form className="chat-form" onSubmit={onSubmit} onChange={onChange}>
        <input className="input" placeholder="Message" ref={inputRef} />
        <IconButton
          className="button"
          onClick={onSendMessage}
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
  );
}
