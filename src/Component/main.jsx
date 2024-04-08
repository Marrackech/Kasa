


import React from 'react';
import { createRoot } from 'react-dom/client'; // Importez createRoot depuis react-dom/client
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './Pages/App.jsx';
import './index.css';
import Footer from './NavFooter/Footer.jsx';
import Navbar from './NavFooter/Navbar.jsx';
import AppartmentPage from './Pages/AppartmentPage.jsx';
import AboutPage from './Pages/AboutPage.jsx';
import ErreurPage from "./Pages/ErreurPage.jsx";

const root = createRoot(document.getElementById('root')); // Utilisez createRoot

root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/flat/:id" element={<AppartmentPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErreurPage />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
