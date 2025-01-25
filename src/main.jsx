import ReactDOM from 'react-dom/client'; // Correct import for React 18+ with Vite
import './index.css'; // Import your global styles
import App from './App';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      
    <App />
    </BrowserRouter>
  </React.StrictMode>
);