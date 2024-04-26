import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/Services';
import AssignmentsPage from './components/AssignmentsPage';
import PackagesPage from './components/OnlineMaterial';
import LearningToolsPage from './components/LearningToolsPage';
import ContactPage from './components/ContactPage';
import Login from './components/Login';
import Register from './components/Register';
import Packages from './components/Packages';
import Signal from './components/Signal';
import Robotics from './components/Robotics';
import Embedded from './components/Embedded';
import Circuit from './components/Circuit';
import Chatbot from './components/Chatbot';
import Quiz from './components/Quiz';
import OnlineMaterialPage from './components/OnlineMaterial';

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
        <Route path="/packages" element={<Packages />} />
        <Route path="/signal" element={<Signal />} />
        <Route path="/robotics" element={<Robotics />} />
        <Route path="/embedded" element={<Embedded />} />
        <Route path="/circuit" element={<Circuit />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/quizzes" element={<Quiz />} />
        <Route path="/online-material" element={<OnlineMaterialPage />} />
      </Routes>
    </Router>
  );
};

export default App;
