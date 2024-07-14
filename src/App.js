import React from 'react';
import './index.css';
import AppRoutes from '../src/AppRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImage from './images/background.jpg';

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <AppRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
