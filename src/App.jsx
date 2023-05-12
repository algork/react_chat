import "./App.css";
import { Message } from "./Message";
import { Counter } from "./Components/Counter";
import { MessageList } from "./Components/MessageList";

const someText = "This is America Don't get you slippin up";

function App({ name, text }) {
  return (
    <div className="App">
      <header className="App-header">
        My First React App
        <h3>Hello, {name}</h3>
        <Counter />
        <MessageList />
        <Message text={someText} />
      </header>
    </div>
  );
}
export default App;
