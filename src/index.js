import React from "react";
import {createRoot} from 'react-dom/client'
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// Call make Server
makeServer();

const container=document.getElementById('root')
const root=createRoot(container)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)