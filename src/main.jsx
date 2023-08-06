import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Modal from 'react-modal';
// Import our custom CSS
import './App.css';
import * as bootstrap from 'bootstrap';

Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
