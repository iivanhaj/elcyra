import React, { useState } from 'react';
import cat1 from '../images/design.jpg';
import cat2 from '../images/robotic.avif';
import cat3 from '../images/signal.jpg';
import cat4 from '../images/circuit.jpg';
import Navbar from './Navbar';
import Footer from './Footer2';

const AssignmentsPage = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [file, setFile] = useState(null);

  const handleHover = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
    setSelectedTopic(null); // Reset selectedTopic to hide questions
  };

  const handleDone = () => {
    setIsPaused(false);
    setSelectedTopic(null);
    setFile(null);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const renderTopicQuestions = () => {
    // Logic to render questions based on the selected topic
    let customQuestions;

    switch (selectedTopic) {
      case 'Circuit Design':
        customQuestions = [
          'Explain Ohm\'s Law.',
          'What is Kirchhoff\'s Voltage Law?',
          'Describe the difference between series and parallel circuits.',
          'What is the purpose of a capacitor in a circuit?',
          'Explain the concept of inductance.'
        ];
        break;
      case 'Robotics':
        customQuestions = [
          'What are the three laws of robotics proposed by Isaac Asimov?',
          'Explain forward and inverse kinematics.',
          'What is a PID controller?',
          'Describe the concept of sensor fusion in robotics.',
          'How do robotic actuators work?'
        ];
        break;
      case 'Signals Processing':
        customQuestions = [
          'What is the Nyquist-Shannon sampling theorem?',
          'Explain the concept of signal filtering.',
          'Describe the difference between analog and digital signals.',
          'What is convolution in signal processing?',
          'Explain the concept of Fourier transform.'
        ];
        break;
      case 'Embedded Systems':
        customQuestions = [
          'What is an embedded system?',
          'Describe the role of a microcontroller in an embedded system.',
          'Explain the difference between ROM and RAM.',
          'What is interrupt latency?',
          'Describe the process of firmware development for embedded systems.'
        ];
        break;
      default:
        customQuestions = [];
    }

    return (
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', webkitBackdropFilter: 'blur(4px)', border: '1px solid rgba(255, 255, 255, 0.18)', padding: '20px', borderRadius: '10px', marginTop: '50px', color: '#393D32' }}>
        <h3 style={{ color: '#F1E3C8', fontSize: '24px', marginBottom: '20px' }}>Questions for {selectedTopic}</h3>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {customQuestions.map((question, index) => (
            <li key={index} style={{ marginBottom: '10px', fontSize: '18px' }}>{question}</li>
          ))}
        </ul>
        <div style={{ marginTop: '20px' }}>
          <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
        </div>
        <div style={{ marginTop: '20px' }}>
          {file && (
            <div>
              <h4>Uploaded File:</h4>
              <p>{file.name}</p>
            </div>
          )}
        </div>
        <button onClick={handleDone} style={{ backgroundColor: '#BCB19B', border: '2px solid transparent', color: '#FFE0D6', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginTop: '20px' }}>Done</button>
      </div>
    );
  };

  const topics = [
    { name: 'Circuit Design', image: cat1 },
    { name: 'Robotics', image: cat2 },
    { name: 'Signals Processing', image: cat3 },
    { name: 'Embedded Systems', image: cat4 }
  ];

  // Repeat topics array to achieve infinite scrolling
  const repeatedTopics = topics.concat(topics).concat(topics);

  // Calculate animation duration dynamically
  const animationDuration = 20 * repeatedTopics.length / 3; // Adjust the divisor for different speeds

  return (
    <div style={{ fontSize: '16px', backgroundColor: '#393d32', color: '#fff', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h2 style={{ margin: '0', fontSize: '36px', color: '#F1E3C8', fontWeight: 'bolder', marginTop: '80px' }}>ASSIGNMENTS</h2>
      </div>
      <div style={{ position: 'relative', overflow: 'hidden', margin: '100px 0' }}>
        <div
          className="topics-container"
          style={{
            display: 'flex',
            animation: isPaused ? 'none' : `scroll-horizontal ${animationDuration}s linear infinite`,
            width: `${repeatedTopics.length * 320}px`, // Adjust width based on number of repeated topics
            margin: '0 auto'
          }}
          onMouseEnter={handleHover}
          onMouseLeave={handleResume}
        >
          {repeatedTopics.map((topic, index) => (
            <div key={index} style={{ marginRight: '20px', cursor: 'pointer' }} onClick={() => setSelectedTopic(topic.name)}>
              <div
                style={{
                  width: '300px',
                  height: '200px',
                  borderRadius: '14px',
                  backgroundImage: `url(${topic.image})`,
                  backgroundSize: 'cover',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: selectedTopic === topic.name ? '#000' : '#fff',
                  backgroundColor: selectedTopic === topic.name ? 'rgba(255, 255, 255, 0.2)' : '#000',
                  border: selectedTopic === topic.name ? '2px solid #000' : 'none'
                }}
              >
                <div>{topic.name}</div>
              </div>
              {selectedTopic === topic.name && renderTopicQuestions()}
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes scroll-horizontal {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-${repeatedTopics.length * 320}px); // Adjust translateX based on number of repeated topics
            }
          }
        `}
      </style>
      <Footer />
    </div>
  );
};

export default AssignmentsPage;
