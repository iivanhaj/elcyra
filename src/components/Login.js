import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import Navbar from './Navbar';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /.{8,}/;

        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!passwordRegex.test(formData.password)) {
            alert('Please enter a password with at least 8 characters.');
            return;
        }

        console.log('Form submitted:', formData);
    };

    return (
        <div>
            <Navbar />
            <div className="container-signin">
                <div className="sign-up-container">
                    <form onSubmit={handleSubmit} style={{ backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '0 50px', height: '100%', textAlign: 'center' }}>
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="social">
                                <FaGooglePlusG />
                            </a>
                            <a href="#" className="social">
                                <FaLinkedinIn />
                            </a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" style={{ backgroundColor: '#eee', border: 'none', padding: '12px 15px', margin: '8px 0', width: '100%' }} />
                        <input type="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} style={{ backgroundColor: '#eee', border: 'none', padding: '12px 15px', margin: '8px 0', width: '100%' }} />
                        <input type="password" name="password" value={formData.password} placeholder="Password" onChange={handleChange} style={{ backgroundColor: '#eee', border: 'none', padding: '12px 15px', margin: '8px 0', width: '100%' }} />
                        <button type="submit">Sign In</button>
                    </form>
                </div>
                <div className="sign-in-container">
                    <form action="#" style={{ backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '0 50px', height: '100%', textAlign: 'center' }}>
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><FaFacebookF /></a>
                            <a href="#" className="social"><FaGooglePlusG /></a>
                            <a href="#" className="social"><FaLinkedinIn /></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" style={{ backgroundColor: '#eee', border: 'none', padding: '12px 15px', margin: '8px 0', width: '100%' }} />
                        <input type="password" placeholder="Password" style={{ backgroundColor: '#eee', border: 'none', padding: '12px 15px', margin: '8px 0', width: '100%' }} />
                        <a href="#">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp"><Link to="/register" style={{ color: '#F1E3C8' }}>Sign Up</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
