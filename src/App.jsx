import "./App.css";
import { Counter } from "./Components/Counter";
import { MessageList } from "./Components/MessageList/MessageList";

function App({ name, text }) {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Hello, {name}</h3>
        Send Us a Message
        <Counter />
        <MessageList />
      </header>
    </div>
  );
}
export default App;
