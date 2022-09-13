import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Calculator from './components/Calculator';
import Welcome from './components/Welcome';
import Quotes from './components/Quotes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route element={<Calculator />} path="calculator" />
          <Route element={<Welcome />} index />
          <Route path="quotes" element={<Quotes />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);
