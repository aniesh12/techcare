import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Empowering businesses with innovative digital strategies.
          </motion.p>
        </div>
      </div>

      <div className="container about-content">
        <section className="intro-section">
          <motion.div 
            className="intro-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>Who We Are</h2>
            <p>
              Techcaresolution is a premier digital marketing agency dedicated to helping businesses 
              navigate the complex digital landscape. Founded with a vision to simplify digital growth, 
              we combine creativity, technology, and data-driven insights to deliver exceptional results.
            </p>
            <p>
              Our team consists of passionate marketers, designers, and developers who work collaboratively 
              to turn your business goals into reality. Whether you are a startup looking for visibility 
              or an established brand aiming for expansion, we have the right solutions for you.
            </p>
          </motion.div>
          <motion.div 
            className="intro-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="image-placeholder">
              <span>About Techcaresolution</span>
            </div>
          </motion.div>
        </section>

        <section className="mission-vision">
          <motion.div 
            className="mv-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Our Mission</h3>
            <p>
              To empower businesses of all sizes with affordable, effective, and innovative digital 
              marketing solutions that drive measurable growth and long-term success.
            </p>
          </motion.div>
          <motion.div 
            className="mv-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Our Vision</h3>
            <p>
              To be the leading digital transformation partner globally, known for our commitment to quality, 
              integrity, and result-oriented approach.
            </p>
          </motion.div>
        </section>
      </div>

      <style>{`
        .page-header {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          padding: 80px 0;
          text-align: center;
        }

        .page-header h1 {
          font-size: 3rem;
          margin-bottom: 15px;
        }

        .page-header p {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        .about-content {
          padding-top: 60px;
          padding-bottom: 60px;
        }

        .intro-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
          margin-bottom: 80px;
        }

        .intro-text h2 {
          color: var(--primary);
          font-size: 2rem;
          margin-bottom: 25px;
        }

        .intro-text p {
          color: var(--text-light);
          margin-bottom: 20px;
          line-height: 1.8;
          font-size: 1.05rem;
        }

        .image-placeholder {
          width: 100%;
          height: 350px;
          background-color: #eee;
          border-radius: 15px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          color: #aaa;
          font-size: 1.5rem;
          background-image: linear-gradient(45deg, #f3f3f3 25%, #eeeeee 25%, #eeeeee 50%, #f3f3f3 50%, #f3f3f3 75%, #eeeeee 75%, #eeeeee 100%);
          background-size: 20px 20px;
        }

        .mission-vision {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .mv-card {
          background: #fff;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
          text-align: center;
          border-top: 4px solid var(--primary);
        }

        .mv-card h3 {
          color: var(--text-dark);
          margin-bottom: 20px;
        }

        .mv-card p {
          color: var(--text-light);
        }

        @media (max-width: 768px) {
          .intro-section, .mission-vision {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
