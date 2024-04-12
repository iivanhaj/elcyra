import React from 'react';
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

const LandingPage = () => {
  return (
    <div style={{backgroundColor: '#393D32'}}>
      <Navbar/>
      <div className="flex-container">
        {/* Left side */}
        <div className="left-side">
          <div className="text">
            <p><b>Private</b></p>
            <p><b>Lessons</b></p>
            <p><b>Online</b></p>
          </div>
          <div className='textmid'>Enhance your understanding of electronics</div>
          <div className="buttons">
            <button className="transparent-button1">Start Learning</button>
            <button className="transparent-button2">Explore Courses</button>
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
          <button className="meet-tutors-button">Meet Your Tutors</button>
        </div>
        <div className="column">
          <div className="row">
              <div className="row-heading">Circuit Design</div>
              <img src={Book} alt="Book" className="row-image" />
              <p className="row-text" style={{ marginBottom: '34px' }}>Explore the fundamentals of circuit design and gain practical skills in building and analyzing electronic circuits.</p>
          </div>
          <div className="row">
              <div className="row-heading">Robotics</div>
              <img src={Science} alt="Science" className="row-image" />
              <p className="row-text">Discover the exciting field of robotics and learn to design, build, and program your own robots.</p>
          </div>
        </div>

        <div className="column">
          <div className="row">
              <div className="row-heading">Embedded Systems</div>
              <img src={Robot} alt="Robot" className="row-image" />
              <p className="row-text">Delve into the world of embedded systems and microcontrollers, and develop your understanding of programming and interfacing.</p>
          </div>
          <div className="row">
              <div className="row-heading">Signal Processing</div>
              <img src={image4} alt="Image 4" className="row-image" />
              <p className="row-text">Uncover the principles of signal processing and explore the applications of digital signal processing in electronic devices.</p>
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
              <img src={ExampleCarouselImage} alt="Second slide" />
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
          <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" cols="50"></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className='Submit-button'>Submit</button>
            </div>
          </form>
          <div className='thanks'>Thanks for submitting!</div>
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