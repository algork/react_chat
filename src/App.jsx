import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routers } from "./Router/Routers";
import { Provider } from "react-redux";
import { store } from "./Store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routers />
      </Router>
    </Provider>
  );
}
export default App;
