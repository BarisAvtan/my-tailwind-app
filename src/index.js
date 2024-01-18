import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import Login from './Login';
import Dashboard from './Dashboard';
import ForgotPassword from './ForgotPassword';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<Navigate replace to="/Login" />} />
        <Route path="Login/*" element={<Login />} />
        <Route path="Dashboard/" element={<Dashboard />} />
        <Route path="ForgotPassword/" element={<ForgotPassword />} />      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
