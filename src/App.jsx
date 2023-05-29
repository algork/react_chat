import "./App.css";

import { MessageList } from "./Components/MessageList/MessageList";

function App({ name, text }) {
  return (
    <div>
      <MessageList />
    </div>
  );
}
export default App;
