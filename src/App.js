import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import AssignmentsPage from './components/AssignmentsPage';
import PackagesPage from './components/PackagesPage';
import LearningToolsPage from './components/LearningToolsPage';
import ContactPage from './components/ContactPage';
import Login from './components/Login';
import Register from './components/Register';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/assignments" element={<AssignmentsPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/learning-tools" element={<LearningToolsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
