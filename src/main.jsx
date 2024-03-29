import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './jsx/redux/store';
import { Provider } from 'react-redux';
import './css/index.css';
import { App } from './jsx/components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
