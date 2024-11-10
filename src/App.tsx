import "./App.css";
import {  BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes";
import {Provider} from "react-redux";
import {store} from "./core/store";
// import { useGlobalProps } from "./hooks/useGlobalProps";

function App() {
  // const globalProps = useGlobalProps();
  return (
      <BrowserRouter basename="/IU5_WEB-front">
        <Provider store={store}>
        <AppRoutes />
        </Provider>

      </BrowserRouter>
  );
}

export default App;
