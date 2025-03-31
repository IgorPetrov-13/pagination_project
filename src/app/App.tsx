import React from 'react';
import './App.css';
import Navbar from '../widgets/navbar/Navbar';
import AppRoutes from './providers/routes/AppRoutes';

function App(): JSX.Element {
  return (
    <div className="container">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
