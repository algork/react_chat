import "./App.css";
import { Counter } from "./Components/Counter";
import { MessageList } from "./Components/MessageList/MessageList";

function App({ name, text }) {
  return (
    <div>
      <Counter />
      <MessageList />
    </div>
  );
}
export default App;
