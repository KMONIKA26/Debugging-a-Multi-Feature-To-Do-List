import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoApp from './App'; // Importing the TodoApp component from App.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);

