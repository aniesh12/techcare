import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ y: -10 }}
    >
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to="/services" className="service-link">
        Learn More &rarr;
      </Link>

      <style>{`
        .service-card {
          background: #fff;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          text-align: center;
          transition: all 0.3s ease;
          border-bottom: 3px solid transparent;
        }

        .service-card:hover {
          border-bottom: 3px solid var(--primary);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .service-icon {
          font-size: 3rem;
          color: var(--primary);
          margin-bottom: 20px;
        }

        .service-card h3 {
          font-size: 1.5rem;
          margin-bottom: 15px;
          color: var(--text-dark);
        }

        .service-card p {
          color: var(--text-light);
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .service-link {
          color: var(--primary);
          font-weight: 600;
          font-size: 0.9rem;
          transition: margin-left 0.3s;
        }

        .service-link:hover {
          margin-left: 5px;
        }
      `}</style>
    </motion.div>
  );
};

export default ServiceCard;
