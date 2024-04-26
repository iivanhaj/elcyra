import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer2';

function Chatbot() {
  const [question, setQuestion] = useState('');
  const [legalAdvice, setLegalAdvice] = useState('');

  const getLegalAdvice = async () => {
    const response = await fetch('http://localhost:8000/get_legal_advice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });
    const data = await response.json();
    setLegalAdvice(data.legal_advice);
  };

  const formatHTML = (htmlString) => {
    return { __html: htmlString };
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#393D32',
  };

  const chatbotContainerStyle = {
    marginBottom: '200px',
    marginTop: '100px',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px',
  };

  const chatboxStyle = {
    width: '60%',
    backgroundColor: '#F1E3C8',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  };

  const textareaStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '20px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    resize: 'none',
  };

  const buttonStyle = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '12px 24px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  const legalAdviceContainerStyle = {
    marginTop: '20px',
    textAlign: 'left',
  };

  const legalAdviceTitleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '12px',
    color: '#333',
  };

  const legalAdviceContentStyle = {
    maxHeight: '200px',
    overflowY: 'auto',
    fontSize: '16px',
    color: '#333',
  };

  return (
    <div style={containerStyle}>
      <Navbar />
      <div style={chatbotContainerStyle}>
        <div style={chatboxStyle}>
          <h1 style={headingStyle}>Study Advice Chatbot</h1>
          <textarea
            style={textareaStyle}
            placeholder="Ask a question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button style={buttonStyle} onClick={getLegalAdvice}>
            Get Study Advice
          </button>
          {legalAdvice && (
            <div style={legalAdviceContainerStyle}>
              <h2 style={legalAdviceTitleStyle}>Study Advice:</h2>
              <div
                style={legalAdviceContentStyle}
                dangerouslySetInnerHTML={formatHTML(legalAdvice)}
              />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Chatbot;
