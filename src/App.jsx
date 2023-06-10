import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routers } from "./Router/Routers";
import { Provider } from "react-redux";
import { persistor, store } from "./Store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routers />
        </Router>
      </PersistGate>
    </Provider>
  );
}
export default App;
