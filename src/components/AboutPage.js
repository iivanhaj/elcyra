import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer2';
import '../styles/AboutPage.css'; 
import videoSrc from '../images/landing2.mp4'; 
const AboutPage = () => {
  return (
    <div className="about-container">
      <Navbar/>
      <div className="about-content">
        <div className="about-left">
          <div style={{ marginLeft: '40px', marginTop:'100px', fontWeight:'bold', fontSize:'54px'}}>Welcome </div>
          <div style={{marginLeft: '40px', fontWeight:'bold', fontSize:'54px'}}> to Elcyra - </div>
          <div style={{marginLeft: '40px', fontWeight:'bold', fontSize:'54px'}}>Your Electronics </div>
          <div style={{marginLeft: '40px', marginBottom: '20px',fontWeight:'bold', fontSize:'54px'}}> Tutor</div>
          <p style = {{marginLeft: '50px'}}>Welcome to Elcyra, your go-to platform for mastering the art of electronics.</p>
          <p style = {{marginLeft: '50px'}}>Our interactive and engaging courses are designed to provide you with a </p>
          <p style = {{marginLeft: '50px'}}>comprehensive understanding of electronic devices and their internal workings. </p>
          <p style = {{marginLeft: '50px'}}>Join us on this exciting learning journey and unlock a world of opportunities in the field of electronics.</p>
        </div>
        <div className="about-right" style={{marginTop:'100px'}}>
            <video className="video1" autoPlay loop muted>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>        
        </div>
      </div>
      <div className="about-content-2">
        <div className="about-left-2">
          <h1>About Elcyra</h1>
        </div>
        <div className="about-right-2">
          <p>At Elcyra, we are dedicated to making electronics education accessible and enjoyable for students of all levels. Our team is committed to providing top-notch courses and personalized learning paths tailored to your preferences and learning history. We believe in the power of interactive learning experiences and aim to create a supportive and engaging environment for all our students.</p>
        </div>
      </div>
      <div className="about-content-2">
        <div className="about-left-2">
          <h1>Our Expertise</h1>
        </div>
        <div className="about-right-2">
        <hr style={{ marginBottom: '20px', borderTop: '5px solid #F1E3C8' }} />
          <div className='heading-about-3'>Mastering Electronics</div>
          <p style={{marginBottom:'30px'}}>Beginner to Advanced</p>
          <p>Our team of experts holds a wealth of knowledge in the field of electronics. With years of experience and a passion for teaching, we are dedicated to guiding our students through every aspect of electronics, from the basics to advanced concepts.</p>
          <hr style={{ marginTop: '20px', borderTop: '5px solid #F1E3C8' }} />
          <div className='heading-about-3' style={{marginTop:'20px'}}>Hands-On Learning</div>
          <p style={{marginBottom:'30px'}}>Practical Application</p>
          <p style={{marginBottom:'100px'}}>We believe in the importance of hands-on learning. Our courses are designed to incorporate practical exercises and real-world applications, ensuring that our students gain valuable skills that can be applied in various electronic projects and endeavors.</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutPage;
