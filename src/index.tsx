import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {Toaster} from "react-hot-toast";

import {store} from "./app/store";
import App from './App';

import './index.css';







const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
            <Toaster />
        </Provider>
    </BrowserRouter>
);
