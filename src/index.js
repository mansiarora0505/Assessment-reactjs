import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from "./store";
import Loader from "./Views/Loader/Loader";

ReactDOM.render(
  <Provider store={store}>
    <Loader />
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
