import "./App.css";
import {  BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes";
import {Provider} from "react-redux";
import {store} from "./core/store";
import {useEffect} from "react";
// import { useGlobalProps } from "./hooks/useGlobalProps";



const {invoke} = (window as any).__TAURI__.tauri;


function App() {
    useEffect(() => {
        invoke('tauri', {cmd: 'create'})
            .then((response: any) => console.log(response))
            .catch((error: any) => console.log(error));
        return () => {
            invoke('tauri', {cmd: 'close'})
                .then((response: any) => console.log(response))
                .catch((error: any) => console.log(error));
        }
    }, []);

    return (
        <BrowserRouter basename="/IU5_WEB-front">
            <Provider store={store}>
                <AppRoutes  />
            </Provider>
        </BrowserRouter>
    );
}

export default App;
