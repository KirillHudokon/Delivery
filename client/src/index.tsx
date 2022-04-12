import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { setupStore } from "./store/store";

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
const store = setupStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
