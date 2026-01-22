import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required";
        if (!formData.email.trim()) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is invalid";
        }
        if (!formData.phone.trim()) tempErrors.phone = "Phone is required";
        if (!formData.message.trim()) tempErrors.message = "Message is required";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Simulate form submission
            console.log("Form Submitted", formData);
            setSubmitted(true);
            setFormData({ name: '', email: '', phone: '', message: '' });
            setTimeout(() => setSubmitted(false), 5000);
        }
    };

    return (
        <div className="contact-page">
            <div className="page-header">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Get in touch with us for any inquiries or to start a project.
                    </motion.p>
                </div>
            </div>

            <div className="container contact-content">
                <div className="contact-grid">
                    <motion.div 
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Contact Information</h2>
                        <p>Fill out the form or contact us directly using the information below.</p>
                        
                        <div className="info-item">
                            <div className="icon-circle"><FaPhone /></div>
                            <div>
                                <h3>Phone</h3>
                                <p>9487020819</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-circle"><FaEnvelope /></div>
                            <div>
                                <h3>Email</h3>
                                <p>techcaresolution02@gmail.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-circle"><FaMapMarkerAlt /></div>
                            <div>
                                <h3>Address</h3>
                                <p>5-129, Ellu vilai, Rajakkamangalam,<br />Kanyakumari, Tamil Nadu</p>
                            </div>
                        </div>

                        <div className="map-container">
                             {/* Google Maps Embed */}
                             <iframe 
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15797.77884483726!2d77.38!3d8.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDknMDAuMCJOIDc3wrAyMicyNC4wIkU!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                                width="100%" 
                                height="250" 
                                style={{border:0, borderRadius: '10px'}} 
                                allowFullScreen="" 
                                loading="lazy">
                            </iframe>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="contact-form-container"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Send us a Message</h2>
                        {submitted ? (
                            <div className="success-message">
                                <h3>Thank you!</h3>
                                <p>Your message has been sent successfully. We will get back to you soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        value={formData.name} 
                                        onChange={handleChange} 
                                        placeholder="Your Name"
                                        className={errors.name ? 'error-input' : ''}
                                    />
                                    {errors.name && <span className="error-text">{errors.name}</span>}
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        placeholder="Your Email"
                                        className={errors.email ? 'error-input' : ''}
                                    />
                                    {errors.email && <span className="error-text">{errors.email}</span>}
                                </div>

                                <div className="form-group">
                                    <label>Phone</label>
                                    <input 
                                        type="tel" 
                                        name="phone" 
                                        value={formData.phone} 
                                        onChange={handleChange} 
                                        placeholder="Your Phone Number"
                                        className={errors.phone ? 'error-input' : ''}
                                    />
                                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                                </div>

                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea 
                                        name="message" 
                                        value={formData.message} 
                                        onChange={handleChange} 
                                        placeholder="Your Message"
                                        rows="5"
                                        className={errors.message ? 'error-input' : ''}
                                    ></textarea>
                                    {errors.message && <span className="error-text">{errors.message}</span>}
                                </div>

                                <button type="submit" className="btn btn-primary submit-btn">
                                    Send Message <FaPaperPlane className="btn-icon" />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>

            <style>{`
                .page-header {
                    background: linear-gradient(135deg, var(--text-dark), var(--primary));
                    color: white;
                    padding: 80px 0;
                    text-align: center;
                }

                .contact-content {
                    padding: 80px 20px;
                }

                .contact-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.5fr;
                    gap: 60px;
                }

                .contact-info h2, .contact-form-container h2 {
                    margin-bottom: 30px;
                    color: var(--text-dark);
                }

                .info-item {
                    display: flex;
                    align-items: center;
                    margin-bottom: 30px;
                }

                .icon-circle {
                    width: 50px;
                    height: 50px;
                    background: rgba(19, 114, 231, 0.1);
                    color: var(--primary);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2rem;
                    margin-right: 20px;
                    flex-shrink: 0;
                }

                .info-item h3 {
                    font-size: 1.1rem;
                    margin-bottom: 5px;
                    color: var(--text-dark);
                }

                .info-item p {
                    color: var(--text-light);
                    font-size: 0.95rem;
                }

                .map-container {
                    margin-top: 40px;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                }

                .contact-form-container {
                    background: #fff;
                    padding: 40px;
                    border-radius: 10px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.05);
                }

                .form-group {
                    margin-bottom: 25px;
                }

                .form-group label {
                    display: block;
                    margin-bottom: 8px;
                    color: var(--text-dark);
                    font-weight: 500;
                }

                .form-group input, .form-group textarea {
                    width: 100%;
                    padding: 12px 15px;
                    border: 1px solid #ddd;
                    border-radius: 6px;
                    font-family: inherit;
                    font-size: 1rem;
                    transition: border-color 0.3s;
                }

                .form-group input:focus, .form-group textarea:focus {
                    border-color: var(--primary);
                    outline: none;
                }

                .form-group input.error-input, .form-group textarea.error-input {
                    border-color: #ff4d4f;
                }

                .error-text {
                    color: #ff4d4f;
                    font-size: 0.85rem;
                    margin-top: 5px;
                    display: block;
                }

                .submit-btn {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                }

                .success-message {
                    background: #f6ffed;
                    border: 1px solid #b7eb8f;
                    padding: 30px;
                    border-radius: 8px;
                    text-align: center;
                }

                .success-message h3 {
                    color: #52c41a;
                    margin-bottom: 10px;
                }

                @media (max-width: 960px) {
                    .contact-grid {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }

                    .contact-info {
                        order: 2;
                    }

                    .contact-form-container {
                        order: 1;
                    }
                }
            `}</style>
        </div>
    );
};

export default Contact;
