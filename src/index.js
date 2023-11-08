import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = new Store()
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);