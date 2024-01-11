import React from 'react';
import ReactDOM from 'react-dom/client';
import App4 from './App4';
import Bank from './Bank';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'; // store를 정의하는 메서드 configureStore()
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

// 전역 상태를 관리하는 공간 (하나의 프로젝트에 하나만)
const store = configureStore({ reducer: rootReducer }, composeWithDevTools);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Bank />
      <hr />
      <hr />
      <App4 />
    </Provider>
  </React.StrictMode>
);
