import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import videoSrc from '../images/landing5.mp4'; 
import '../styles/LandingPage.css'; 
import Navbar from './Navbar';
import Book from '../images/image1.jpeg';
import Science from '../images/image1.jpeg';
import Robot from '../images/image1.jpeg';
import image4 from '../images/image1.jpeg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ExampleCarouselImage from '../images/carousel1.png';
import ExampleCarouselImage1 from '../images/student_story.jpg';

const LandingPage = () => {
  const [enhancement, setEnhancement] = useState('Enhance');
  const [gradientColor, setGradientColor] = useState('linear-gradient(to top, #FFCFC0, #F1E3C8)');
  const [submitted, setSubmitted] = useState(false); // State to track form submission
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Reset form error message when user starts typing
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const handleEnhancementChange = () => {
    switch (enhancement) {
      case 'Enhance':
        setEnhancement('Sharpen');
        setGradientColor('linear-gradient(to top, #FFA17F, #FFCFC0)');
        break;
      case 'Sharpen':
        setEnhancement('Cultivate');
        setGradientColor('linear-gradient(to top, #C4D79B, #FFCFC0)');
        break;
      case 'Cultivate':
        setEnhancement('Empower');
        setGradientColor('linear-gradient(to top, #9FE5D8, #C4D79B)');
        break;
      case 'Empower':
        setEnhancement('Enhance');
        setGradientColor('linear-gradient(to top, #FFCFC0, #F1E3C8)');
        break;
      default:
        setEnhancement('Enhance');
        setGradientColor('linear-gradient(to top, #FFCFC0, #F1E3C8)');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation logic
    let errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    // If there are errors, update state and prevent form submission
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // If form validation succeeds
    setSubmitted(true);
  };

  return (
    <div className='glassmorphism-container'>
      <Navbar/>
      <div className="flex-container">
        {/* Left side */}
        <div className="left-side" style={{ background: gradientColor }}>
          <div className="text">
            <p><b>Private</b></p>
            <p><b>Lessons</b></p>
            <p><b>Online</b></p>
          </div>
          <div className='textmid' onClick={handleEnhancementChange}>{enhancement} your understanding of electronics</div>
          <div className="buttons">
            <Link to="/services"> 
              <button className="transparent-button1">{enhancement === 'Enhance' ? 'Start Learning' : 'Get Started'}</button>
            </Link>
            <Link to="/packages"> 
              <button className="transparent-button2">{enhancement === 'Enhance' ? 'Explore Courses' : 'Discover Now'}</button>
            </Link>
          </div>
        </div>

        {/* Right side */}
        <div className="right-side">
          <video className="video" autoPlay loop muted>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="second-container">
        <div className="column">
          <h1><b>What Will You </b></h1>
          <h1><b>Learn?</b></h1>
          <p className="subtext">Our interactive courses cover a range of topics in electronics, from basic concepts to advanced principles. Dive into the world of electronic devices and circuits with our engaging learning materials.</p>
          <Link to="/meet-tutors" className="meet-tutors-button" style={{ textDecoration: 'none' }}>Meet Your Tutors</Link>
        </div>
        <div className="column">
          <div className="row">
              {/* Use Link instead of div for clickable container */}
              <Link to="/circuit" className="row-link" style={{ textDecoration: 'none' }}>
                <div className="row-heading">Circuit Design</div>
                <img src={Book} alt="Book" className="row-image" />
                <p className="row-text" style={{ marginBottom: '34px' }}>Explore the fundamentals of circuit design and gain practical skills in building and analyzing electronic circuits.</p>
              </Link>
          </div>
          <div className="row">
              {/* Use Link instead of div for clickable container */}
              <Link to="/robotics" className="row-link" style={{ textDecoration: 'none' }}>
                <div className="row-heading">Robotics</div>
                <img src={Science} alt="Science" className="row-image" />
                <p className="row-text">Discover the exciting field of robotics and learn to design, build, and program your own robots.</p>
              </Link>
          </div>
        </div>

        <div className="column">
          <div className="row">
              {/* Use Link instead of div for clickable container */}
              <Link to="/embedded" className="row-link" style={{ textDecoration: 'none' }}>
                <div className="row-heading">Embedded Systems</div>
                <img src={Robot} alt="Robot" className="row-image" />
                <p className="row-text">Delve into the world of embedded systems and microcontrollers, and develop your understanding of programming and interfacing.</p>
              </Link>
          </div>
          <div className="row">
              {/* Use Link instead of div for clickable container */}
              <Link to="/signal" className="row-link" style={{ textDecoration: 'none' }}>
                <div className="row-heading">Signal Processing</div>
                <img src={image4} alt="Image 4" className="row-image" />
                <p className="row-text">Uncover the principles of signal processing and explore the applications of digital signal processing in electronic devices.</p>
              </Link>
          </div>
        </div>
      </div>

      <div className="footer" style={{backgroundColor:'#AA3D1D'}}>
        <div className="column-footer">
          <div className='h1-text'><b>Student Stories </b></div>
          <p className="subtext-footer">Read what our students have to say</p>
          <p className="subtext-footer">about their learning experiences</p>
        </div>
        <div className="column-footer-1">
          <Carousel showArrows={false} showIndicators={false} autoPlay>
            <div>
              <img src={ExampleCarouselImage} alt="First slide" />
            </div>
            <div>
              <img src={ExampleCarouselImage1} alt="Second slide" />
            </div>
            <div>
              <img src={ExampleCarouselImage} alt="Third slide" />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="footer-2" style={{backgroundColor:'#AA3D1D'}}>
        <div className="column-footer-2">
          <div className='h1-text-2'><b>Contact Me & </b></div>
          <div className='h1-text-3'><b>Let's Get Started </b></div>
          <p className="subtext-footer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec urna vel.</p>
          <div className="introduction-call">
            <button className="introduction-call-button">Introduction Call</button>
          </div>
        </div>
        <div className="column-footer-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" onChange={handleChange} />
              {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" onChange={handleChange} />
              {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" onChange={handleChange} />
              {formErrors.email && <span className="error">{formErrors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" cols="50" onChange={handleChange}></textarea>
              {formErrors.message && <span className="error">{formErrors.message}</span>}
            </div>
            <div className="form-group">
              <button type="submit" className='Submit-button'>Submit</button>
            </div>
          </form>
          {submitted && <div className='thanks'>Thanks for submitting!</div>}
        </div>
      </div>
      <div className="footer-3" style={{backgroundColor:'#AA3D1D'}}>
        <div className="column-footer">
          <div className='h1-text'><b>Online Lessons </b></div>
        </div>
        <div className="column-footer-4">
          {/* First Column */}
          <div className="footer-column">
              <h3>About</h3>
              <p>Our Lessons</p>
              <p>Assignments</p>
              <p>Packages</p>
              <p>Learning Tools</p>
          </div>

          {/* Second Column */}
          <div className="footer-column-2">
              <h3>Contact</h3>
              <p>info@mysite.com</p>
              <p>123-456-7890</p>
          </div>

          {/* Third Column */}
          <div className="footer-column-3">
              <h3>Legal</h3>
              <p>© 2035 by Online Lessons.</p>
              <p>Powered and secured by Jahnavi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
