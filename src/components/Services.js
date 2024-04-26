import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from './Navbar';
import Footer from './Footer2';
import quizImage from '../images/image1.jpeg';
import materialImage from '../images/image1.jpeg';
import chatbotImage from '../images/image1.jpeg';
import packagesImage from '../images/image1.jpeg';

const ServicePlacard = ({ imageUrl, serviceName, serviceDescription, linkTo }) => {
  const placardStyle = {
    backgroundColor: '#AA3D1D',
    color: '#F1E3C8',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    maxWidth: '300px',
    textDecoration: 'none', // Add textDecoration to remove default underline
    display: 'block' // Add display block to make the whole placard clickable
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px'
  };

  const descriptionStyle = {
    fontSize: '16px',
    marginBottom: '20px'
  };

  return (
    // Wrap the entire placard in a Link component
    <Link to={linkTo} style={placardStyle}>
      <img style={imageStyle} src={imageUrl} alt={serviceName} />
      <div style={{ padding: '20px' }}>
        <div style={titleStyle}>{serviceName}</div>
        <p style={descriptionStyle}>{serviceDescription}</p>
      </div>
    </Link>
  );
};

const ServicesPage = () => {
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '10px' }}>Our Services</h1>
        <p style={{ fontSize: '18px', marginBottom: '20px', color:'#F1E3C8' }}>Explore our range of services to enhance your learning experience.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', padding: '20px' }}>
        <ServicePlacard
          imageUrl={quizImage}
          serviceName="Quizzes"
          serviceDescription="Interactive quizzes to test your knowledge and enhance learning."
          linkTo="/quizzes" // Specify the route you want to redirect to on click
        />
        <ServicePlacard
          imageUrl={materialImage}
          serviceName="Online Material"
          serviceDescription="Downloadable study materials and resources to aid learning."
          linkTo="/online-material" // Specify the route you want to redirect to on click
        />
        <ServicePlacard
          imageUrl={chatbotImage}
          serviceName="Chatbot Support"
          serviceDescription="AI-powered chatbot available 24/7 for instant assistance with queries."
          linkTo="/chatbot" // Specify the route you want to redirect to on click
        />
        <ServicePlacard
          imageUrl={packagesImage}
          serviceName="Packages"
          serviceDescription="Tailored learning packages offering comprehensive study materials and support."
          linkTo="/packages" // Specify the route you want to redirect to on click
        />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
