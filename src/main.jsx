import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Customers from './Customers.jsx';
import Profile from './Profile.jsx';
import Account from './Account.jsx';
import ProfileContainer from './ProfileContainer/ProfileContainer.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/customers" element={<Customers />}>
            <Route path=":userid" element={<Account />} />
          </Route>
          <Route path="/Profile" element={<ProfileContainer />}>
            <Route path=":accountId" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
