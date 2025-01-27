import ReactDOM from 'react-dom/client'; // Correct import for React 18+ with Vite
import './index.css'; // Import your global styles
import App from './App';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ToastContainer />
    <App />
    </BrowserRouter>
  </React.StrictMode>
);