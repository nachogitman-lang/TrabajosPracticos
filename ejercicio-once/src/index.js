import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Buscamos el elemento con id 'root' en nuestro archivo HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizamos la aplicación dentro del StrictMode para mejores prácticas
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);