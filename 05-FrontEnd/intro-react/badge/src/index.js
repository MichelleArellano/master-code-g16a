import React from 'react';
import ReactDOM from 'react-dom/client';
// Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// Componente Principal
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    < App/>
  </React.StrictMode>
);