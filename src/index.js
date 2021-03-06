import React from 'react';
import ReactDOM from 'react-dom';

import axios from "axios";
import { RequestProvider } from "react-request-hook";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// CONFIGURE AXIOS
const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api"
});

ReactDOM.render(
  <React.StrictMode>
    <RequestProvider value={axiosInstance}>
    <App />
    </RequestProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
