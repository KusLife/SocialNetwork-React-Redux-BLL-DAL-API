import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import StoreContex from './storeContext';

let rerenderWholeTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <StoreContex.Provider value={store}>
          <App />
        </StoreContex.Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};
rerenderWholeTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderWholeTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
