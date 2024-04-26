import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ExampleCarouselImage from '../images/carousel1.png';
import '../styles/footer.css';

const Footer = () => {
    return (
    <div className="glassmorphism-container">
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
              <button type="submit">Submit</button>
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

export default Footer;