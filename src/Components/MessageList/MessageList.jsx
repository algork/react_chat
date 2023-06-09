import { useEffect, useRef, useState } from "react";
import "./MessageList.css";
import { MessageForm } from "../MessageForm/MessageForm";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { messageListSelector } from "../../Store/Messages/selectors";
import {
  addMessageAction,
  addMessageWithThunk,
} from "../../Store/Messages/actions";
import { profileSelector } from "../../Store/Profile/selectors";
import { v4 as uuidv4 } from "uuid";
// import { format } from "date-fns";

export function MessageList() {
  const { chatId } = useParams();
  const messageList = useSelector(messageListSelector);
  // const chatId  = useSelector(currentChatMessagesSelector).chatId;
  // const [messageList, setMessageList] = useState({});
  const name = useSelector(profileSelector).name;

  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const chatContainerRef = useRef(null);
  const disptach = useDispatch();
  const isInputEmpty = inputValue.trim() === "";

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
  };

  // function createMessage(author, message, id) {
  //   return {
  //     id: id,
  //     message: message,
  //     author: author,
  //   };
  // }

  const sendMessage = () => {
    disptach(
      addMessageAction(chatId, {
        author: name,
        message: inputRef.current.value,
        time: getTimeString(),
      })
    );
    inputRef.current.value = "";
    inputRef.current?.focus();
    console.log("MESSAGELIST::CHAT_ID", chatId);
  };

  const getTimeString = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  // With BOT Message
  // const sendMessage = () => {
  //   disptach(
  //     addMessageWithThunk(chatId, {
  //       id: uuidv4(),
  //       author: name,
  //       message: inputRef.current.value,
  //     })
  //   );

  //   inputRef.current.value = "";
  //   inputRef.current?.focus();
  // };

  // const sendMessage = () => {
  //   const userMessage = createMessage(
  //     "Alex",
  //     inputRef.current.value,
  //     messageList[chatId].length + 1
  //   );
  //   console.log("SEND MESSAGE - MESSAGE LIST", messageList);
  //   console.log("SEND MESSAGE - MESSAGE", userMessage);

  //   setMessageList((prevmessageList) => ({
  //     ...prevmessageList,
  //     [chatId]: [...prevmessageList[chatId], userMessage],
  //   }));

  //   inputRef.current.value = "";
  //   inputRef.current?.focus();
  //   console.log(inputRef.current.value);
  // };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    inputRef.current.value = "";
    inputRef.current?.focus();

    scrollToBottom();
  }, [messageList, chatId]);

  // useEffect(() => {
  //   if (!messageList[chatId]) {
  //     setMessageList((prevmessageList) => ({
  //       ...prevmessageList,
  //       [chatId]: [],
  //     }));
  //   }
  // }, [messageList, chatId]);

  return (
    <div className="chat-wrapper">
      <div className="chat-field" ref={chatContainerRef}>
        {messageList[chatId]?.map((msg) => (
          <div
            className="message-container"
            style={{
              justifyContent: msg.author !== "Alex" ? "flex-end" : "flex-end",
              flexDirection: msg.author !== "Alex" ? "row-reverse" : "row",
            }}
            key={msg.id}
          >
            <div
              className="message-div"
              style={{
                backgroundColor: msg.author === "Alex" ? "#e3fdd6" : "#fbffff",
              }}
            >
              <div
                className="author-text-font"
                style={{
                  color: msg.author !== "Alex" ? "#6658df" : "#0C8DD6",
                  display: msg.author !== "Alex" ? "block" : null,
                  justifyContent:
                    msg.author !== "Alex" ? "flex-start" : "flex-end",
                }}
              >
                {msg.author}
              </div>

              <div className="message-text-container">
                <div className="message-font"> {msg.message}</div>
                <div className="time-font">{msg.time}</div>
              </div>
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
  );
}
