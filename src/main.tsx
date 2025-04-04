import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>

);
