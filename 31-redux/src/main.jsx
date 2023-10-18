import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import App2 from './App2.jsx';
import App3 from './App3.jsx';
import { store } from './store/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App3 />
    </Provider>
  </React.StrictMode>
);
