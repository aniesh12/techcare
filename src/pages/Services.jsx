import React from 'react';
import { motion } from 'framer-motion';
import { FaBullhorn, FaSearch, FaMobileAlt, FaVideo, FaPenFancy, FaCode } from 'react-icons/fa';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
    const servicesList = [
        {
            icon: <FaBullhorn />,
            title: "Digital Marketing",
            description: "Comprehensive marketing strategies to grow your brand validity and reach your target audience effectively."
        },
        {
            icon: <FaSearch />,
            title: "SEO Optimization",
            description: "Improve your website ranking on search engines to drive organic traffic and increase conversions."
        },
        {
            icon: <FaMobileAlt />,
            title: "Social Media Management",
            description: "Engage your audience with compelling content and community management across diverse platforms."
        },
        {
            icon: <FaVideo />,
            title: "Video Editing",
            description: "Professional video production and editing to tell your brand story in a captivating way."
        },
        {
            icon: <FaPenFancy />,
            title: "Graphic Design",
            description: "Creative design solutions including logos, brochures, and branding materials that stand out."
        },
        {
            icon: <FaCode />,
            title: "Web Development",
            description: "Custom website development that ensures responsiveness, speed, and a great user experience."
        }
    ];

    return (
        <div className="services-page">
            <div className="page-header">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        We offer a wide range of digital solutions to help your business thrive.
                    </motion.p>
                </div>
            </div>

            <div className="container services-content">
                <div className="services-grid-page">
                    {servicesList.map((service, index) => (
                        <ServiceCard 
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>

            <style>{`
                .page-header {
                    background: linear-gradient(135deg, var(--secondary), var(--primary));
                    color: white;
                    padding: 80px 0;
                    text-align: center;
                }

                .page-header h1 {
                    font-size: 3rem;
                    margin-bottom: 15px;
                }

                .services-content {
                    padding: 80px 20px;
                }

                .services-grid-page {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
                    gap: 30px;
                }
            `}</style>
        </div>
    );
};

export default Services;
