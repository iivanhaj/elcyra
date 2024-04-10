import '../styles/tailwind.css';
import React from 'react';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-800">
      <Navbar />

      <div className="container mx-auto py-10 text-white">
        <h1 className="text-4xl font-bold">Welcome to Elekdive</h1>
        <p className="mt-4 text-lg">This is a dummy landing page for Elekdive.</p>
        <p className="mt-2">Feel free to explore!</p>
      </div>
    </div>
  );
};

export default LandingPage;
