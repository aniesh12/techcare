import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Techcaresolution</h3>
                        <p>Grow Your Business with Smart Digital Solutions.</p>
                        <div className="social-icons">
                            <a href="#" className="social-icon"><FaFacebook /></a>
                            <a href="#" className="social-icon"><FaTwitter /></a>
                            <a href="#" className="social-icon"><FaInstagram /></a>
                            <a href="#" className="social-icon"><FaLinkedin /></a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/services">Services</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <div className="contact-item">
                            <FaPhone className="icon" />
                            <span>9487020819</span>
                        </div>
                        <div className="contact-item">
                            <FaEnvelope className="icon" />
                            <span>techcaresolution02@gmail.com</span>
                        </div>
                        <div className="contact-item">
                            <FaMapMarkerAlt className="icon" />
                            <span>5-129, Ellu vilai, Rajakkamangalam, Kanyakumari, Tamil Nadu</span>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Techcaresolution. All rights reserved.</p>
                </div>
            </div>

            <style>{`
                .footer {
                    background-color: #1a1a1a;
                    color: #fff;
                    padding: 60px 0 20px;
                    margin-top: auto;
                }

                .footer-content {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 40px;
                    margin-bottom: 40px;
                }

                .footer-section h3 {
                    color: var(--secondary);
                    margin-bottom: 20px;
                    font-size: 1.5rem;
                }

                .footer-links li {
                    margin-bottom: 10px;
                }

                .footer-links a {
                    color: #ccc;
                    transition: color 0.3s;
                }

                .footer-links a:hover {
                    color: var(--secondary);
                }

                .contact-item {
                    display: flex;
                    align-items: flex-start;
                    margin-bottom: 15px;
                    color: #ccc;
                }

                .contact-item .icon {
                    margin-right: 10px;
                    margin-top: 5px;
                    color: var(--secondary);
                }

                .social-icons {
                    display: flex;
                    gap: 15px;
                    margin-top: 20px;
                }

                .social-icon {
                    color: #fff;
                    background: rgba(255, 255, 255, 0.1);
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    transition: all 0.3s;
                }

                .social-icon:hover {
                    background: var(--primary);
                    transform: translateY(-3px);
                }

                .footer-bottom {
                    text-align: center;
                    padding-top: 20px;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    color: #888;
                }
            `}</style>
        </footer>
    );
};

export default Footer;
