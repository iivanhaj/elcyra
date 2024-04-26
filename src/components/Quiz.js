import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer2';

const Quiz = () => {
  const topics = ['Embedded Systems', 'Circuit Design', 'Robotics', 'Signal Processing'];

  const quizzes = {
    'Embedded Systems': [
      {
        question: "What is the main component of an embedded system?",
        answers: {
          a: "Microcontroller",
          b: "Motherboard",
          c: "Graphics Card"
        },
        correctAnswer: "a"
      },
      {
        question: "What is firmware?",
        answers: {
          a: "Software that controls hardware",
          b: "A type of hardware",
          c: "Software used for design"
        },
        correctAnswer: "a"
      },
      {
        question: "What does IDE stand for in embedded systems?",
        answers: {
          a: "Integrated Development Environment",
          b: "Innovative Design Environment",
          c: "Interactive Development Environment"
        },
        correctAnswer: "a"
      },
      {
        question: "What is Real-Time Operating System (RTOS) used for in embedded systems?",
        answers: {
          a: "To ensure timely execution of tasks",
          b: "To enhance graphical user interface",
          c: "To control hardware components"
        },
        correctAnswer: "a"
      },
      {
        question: "What is the purpose of EEPROM in embedded systems?",
        answers: {
          a: "To store data that must be retained even when power is removed",
          b: "To process digital signals",
          c: "To execute program instructions"
        },
        correctAnswer: "a"
      }
    ],
    'Circuit Design': [
      {
        question: "What does PWM stand for in circuit design?",
        answers: {
          a: "Pulse Width Modulation",
          b: "Power Wire Management",
          c: "Parallel Wiring Method"
        },
        correctAnswer: "a"
      },
      {
        question: "What is Kirchhoff's Current Law?",
        answers: {
          a: "The total current entering a junction is equal to the total current leaving the junction",
          b: "The voltage across a loop is equal to the sum of the voltages across each component in the loop",
          c: "The sum of the currents entering a junction is zero"
        },
        correctAnswer: "c"
      },
      {
        question: "What is Ohm's Law?",
        answers: {
          a: "V = IR",
          b: "P = IV",
          c: "R = V/I"
        },
        correctAnswer: "a"
      },
      {
        question: "What is the function of a capacitor in a circuit?",
        answers: {
          a: "To store electrical energy",
          b: "To regulate current flow",
          c: "To increase resistance"
        },
        correctAnswer: "a"
      },
      {
        question: "What is the difference between AC and DC circuits?",
        answers: {
          a: "AC changes direction periodically, while DC flows in one direction",
          b: "AC flows in one direction, while DC changes direction periodically",
          c: "AC and DC are the same"
        },
        correctAnswer: "a"
      }
    ],
    'Robotics': [
      {
        question: "Which sensor is commonly used in robotics for distance measurement?",
        answers: {
          a: "Temperature Sensor",
          b: "Ultrasonic Sensor",
          c: "Light Sensor"
        },
        correctAnswer: "b"
      },
      {
        question: "What is PID control in robotics?",
        answers: {
          a: "Proportional-Integral-Derivative control for precise control of mechanisms",
          b: "A type of sensor used for positioning",
          c: "A programming language for robots"
        },
        correctAnswer: "a"
      },
      {
        question: "What is the purpose of a servo motor in robotics?",
        answers: {
          a: "To provide feedback to the control system",
          b: "To convert electrical energy into mechanical energy",
          c: "To actuate robotic joints and limbs"
        },
        correctAnswer: "c"
      },
      {
        question: "What is the difference between open-loop and closed-loop control systems in robotics?",
        answers: {
          a: "Open-loop systems do not use feedback, while closed-loop systems use feedback",
          b: "Closed-loop systems do not use feedback, while open-loop systems use feedback",
          c: "Open-loop and closed-loop systems are the same"
        },
        correctAnswer: "a"
      },
      {
        question: "What is kinematics in robotics?",
        answers: {
          a: "The study of robot motion without considering forces or torques",
          b: "The study of robot control algorithms",
          c: "The study of robot perception"
        },
        correctAnswer: "a"
      }
    ],
    'Signal Processing': [
      {
        question: "What is the purpose of Fourier transform in signal processing?",
        answers: {
          a: "To convert time-domain signals to frequency-domain signals",
          b: "To amplify signals",
          c: "To filter out noise"
        },
        correctAnswer: "a"
      },
      {
        question: "What is the Nyquist theorem?",
        answers: {
          a: "A theorem stating that the maximum frequency of a sampled signal is half the sampling frequency",
          b: "A theorem stating that every periodic signal can be represented by a sum of sinusoidal signals",
          c: "A theorem stating that the amplitude of a signal is proportional to its frequency"
        },
        correctAnswer: "a"
      },
      {
        question: "What is the purpose of convolution in signal processing?",
        answers: {
          a: "To combine two signals to produce a third signal",
          b: "To convert analog signals to digital signals",
          c: "To measure the energy of a signal"
        },
        correctAnswer: "a"
      },
      {
        question: "What is the difference between analog and digital signals?",
        answers: {
          a: "Analog signals are continuous, while digital signals are discrete",
          b: "Digital signals are continuous, while analog signals are discrete",
          c: "Analog and digital signals are the same"
        },
        correctAnswer: "a"
      },
      {
        question: "What is the purpose of a low-pass filter in signal processing?",
        answers: {
          a: "To allow low-frequency signals to pass through while attenuating high-frequency signals",
          b: "To allow high-frequency signals to pass through while attenuating low-frequency signals",
          c: "To remove noise from a signal"
        },
        correctAnswer: "a"
      }
    ]
  };

  const [currentTopic, setCurrentTopic] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showScorePopup, setShowScorePopup] = useState(false);

  const selectTopic = (topic) => {
    setCurrentTopic(topic);
    setCurrentQuestion(0);
    setScore(0);
    setShowScorePopup(false);
  };

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const checkAnswer = () => {
    if (selectedAnswer === quizzes[currentTopic][currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedAnswer('');
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizzes[currentTopic].length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScorePopup(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScorePopup(false);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Navbar />
      <div style={{ maxWidth: '600px', marginTop: '100px', marginBottom: '100px', marginLeft: 'auto', marginRight: 'auto' }}>
        <h2 style={{ color: '#F1E3C8', marginBottom: '20px' }}>Choose a Topic</h2>
        <div>
          {topics.map((topic) => (
            <button key={topic} style={{ background: '#F1E3C8', color: '#333', border: 'none', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer', margin: '5px' }} onClick={() => selectTopic(topic)}>{topic}</button>
          ))}
        </div>
        {currentTopic && (
          <div>
            <div className="glassmorphism-container" style={{ marginTop:'20px', padding: '20px', background: 'transparent', borderRadius: '10px',borderColor:'F1E3C8', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ color: '#F1E3C8', marginBottom: '20px' }}>Quiz Time: {currentTopic}</h3>
              <p style={{ color: '#F1E3C8', marginBottom: '20px' }}>{quizzes[currentTopic][currentQuestion].question}</p>
              <div>
                {Object.entries(quizzes[currentTopic][currentQuestion].answers).map(([option, answer]) => (
                  <div key={option}>
                    <input
                      type="radio"
                      id={`answer-${option}`}
                      name="answer"
                      value={option}
                      checked={selectedAnswer === option}
                      onChange={() => handleAnswerSelection(option)}
                    />
                    <label htmlFor={`answer-${option}`}>{answer}</label>
                  </div>
                ))}
              </div>
              <button style={{ marginTop: '20px', background: '#F1E3C8', color: '#333', border: 'none', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer' }} onClick={checkAnswer}>Submit Answer</button>
            </div>
            {showScorePopup && (
              <div style={{ marginTop: '20px' }}>
                <div className="glassmorphism-container" style={{ padding: '20px', background: '#F1E3C8', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                  <h3 style={{ color: '#333' }}>{score === quizzes[currentTopic].length ? 'Congratulations! Perfect score!' : score >= quizzes[currentTopic].length / 2 ? 'Good job! Keep it up!' : 'Try again next time!'}</h3>
                  <p style={{ color: '#333', marginBottom: '15px' }}>Score: {score}/{quizzes[currentTopic].length}</p>
                  <button style={{ background: '#393D32', color: '#F1E3C8', border: 'none', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer' }} onClick={restartQuiz}>Restart Quiz</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Quiz;
