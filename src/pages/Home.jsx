import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBullhorn, FaSearch, FaMobileAlt } from 'react-icons/fa';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-headline">
              Grow Your Business with <span className="highlight">Smart Digital Solutions</span>
            </h1>
            <p className="hero-subhead">
              We help businesses transform and scale through innovative digital marketing, 
              SEO strategies, and cutting-edge web development.
            </p>
            <div className="hero-btns">
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
              <Link to="/services" className="btn btn-secondary">Our Services</Link>
            </div>
          </motion.div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Abstract Tech Illustration Placeholder using CSS shapes/gradients */}
            <div className="tech-illustration">
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
              <div className="card-mockup">
                <div className="card-line line-1"></div>
                <div className="card-line line-2"></div>
                <div className="card-line line-3"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Our Expertise</h2>
            <p>We provide comprehensive digital services to elevate your brand.</p>
          </motion.div>
          <div className="services-grid">
            <ServiceCard 
              icon={<FaBullhorn />}
              title="Digital Marketing"
              description="Strategic campaigns that drive engagement, lead generation, and measurable growth for your brand."
              delay={0.1}
            />
            <ServiceCard 
              icon={<FaSearch />}
              title="SEO Optimization"
              description="Boost your organic traffic and visibility with data-driven search engine optimization strategies."
              delay={0.2}
            />
            <ServiceCard 
              icon={<FaMobileAlt />}
              title="Social Media"
              description="Connect with your audience through creative social media management and community building."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      <style>{`
        /* Hero Section */
        .hero {
          padding: 120px 0;
          background: linear-gradient(135deg, #f0f8ff 0%, #ffffff 100%);
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .hero-headline {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 25px;
          color: var(--text-dark);
          line-height: 1.1;
        }

        .highlight {
          color: var(--primary);
        }

        .hero-subhead {
          font-size: 1.2rem;
          color: var(--text-light);
          margin-bottom: 40px;
          max-width: 500px;
        }

        .hero-btns {
          display: flex;
          gap: 20px;
        }

        /* Tech Illustration (CSS Only for lightweight visuals) */
        .tech-illustration {
          position: relative;
          width: 100%;
          height: 400px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .circle {
          position: absolute;
          border-radius: 50%;
        }

        .circle-1 {
          width: 300px;
          height: 300px;
          background: linear-gradient(45deg, rgba(19, 114, 231, 0.1), rgba(35, 197, 237, 0.2));
          top: 0;
          right: 20px;
          animation: float 6s ease-in-out infinite;
        }

        .circle-2 {
          width: 200px;
          height: 200px;
          background: linear-gradient(45deg, rgba(35, 197, 237, 0.2), rgba(19, 114, 231, 0.1));
          bottom: 20px;
          left: 20px;
          animation: float 8s ease-in-out infinite reverse;
        }

        .card-mockup {
          width: 280px;
          height: 180px;
          background: white;
          border-radius: 15px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          position: relative;
          z-index: 10;
          padding: 25px;
          animation: hover 5s ease-in-out infinite;
        }

        .card-line {
          height: 10px;
          background: #f0f0f0;
          border-radius: 5px;
          margin-bottom: 15px;
        }

        .line-1 { width: 60%; background: var(--secondary); opacity: 0.5; }
        .line-2 { width: 90%; }
        .line-3 { width: 80%; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes hover {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }

        /* Services Preview */
        .services-preview {
          background-color: var(--white);
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 2.5rem;
          color: var(--text-dark);
          margin-bottom: 15px;
        }

        .section-header p {
          color: var(--text-light);
          font-size: 1.1rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        @media (max-width: 960px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-content {
            order: 2;
          }

          .hero-image {
            order: 1;
            margin-bottom: 40px;
          }

          .hero-btns {
            justify-content: center;
          }

          .hero-headline {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
