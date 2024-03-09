

// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Add viewport meta tag for mobile responsiveness
const viewportMetaTag = document.createElement('meta');
viewportMetaTag.name = 'viewport';
viewportMetaTag.content = 'width=device-width, initial-scale=1.0';
document.head.appendChild(viewportMetaTag);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
