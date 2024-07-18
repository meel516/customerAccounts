import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Customers from './Customers';
import Profile from './Profile';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
function App() {
  return (
    
    <div className="grid grid-cols-12">
      <Outlet />
    </div>
  );
}

export default App;
