import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/index.css';

import imgLogo from "../assets/logo.png"

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'active' : ''}`}>
        <div className="navbar-container container">
          <img src={imgLogo} width={90} style={{display:"inline-block"}}  loading='lazy' alt="logo-img"/>
          <Link
  to="/"
  className="navbar-logo hidden md:block"
  onClick={closeMobileMenu}
>
  Techcaresolution
</Link>
          <div className="menu-icon"  onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  'nav-links' + (isActive ? ' activated' : '')
                }
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  'nav-links' + (isActive ? ' activated' : '')
                }
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  'nav-links' + (isActive ? ' activated' : '')
                }
                onClick={closeMobileMenu}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  'nav-links' + (isActive ? ' activated' : '')
                }
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <style>{`
        .navbar {
          background: #fff;
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.2rem;
          position: sticky;
          top: 0;
          z-index: 999;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .navbar.active {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          height: 70px;
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
          width: 100%;
        }

        .navbar-logo {
          color: var(--primary);
          font-size: 1.5rem;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          letter-spacing: -0.5px;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          list-style: none;
          text-align: center;
          margin: 0;
          padding: 0;
        }

        .nav-item {
          height: 80px;
        }

        .nav-links {
          color: var(--text-dark);
          display: flex;
          align-items: center;
          padding: 0 1rem;
          height: 100%;
          font-weight: 500;
          font-size: 1rem;
          position: relative;
        }

        .nav-links:hover {
          color: var(--primary);
        }

        .nav-links.activated {
          color: var(--primary);
        }

        .nav-links.activated::after {
          content: '';
          position: absolute;
          bottom: 25px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 3px;
          background-color: var(--primary);
          border-radius: 2px;
        }

        .menu-icon {
          display: none;
          color: var(--text-dark);
          font-size: 1.8rem;
        }

        @media screen and (max-width: 960px) {
          .nav-menu {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 90vh;
            position: absolute;
            top: 80px;
            left: -100%;
            opacity: 1;
            transition: all 0.5s ease;
            background: #fff;
          }

          .nav-menu.active {
            background: #fff;
            left: 0;
            opacity: 1;
            transition: all 0.5s ease;
            z-index: 999;
          }

          .nav-links {
            text-align: center;
            padding: 2rem;
            width: 100%;
            display: table;
          }

          .nav-links:hover {
            color: var(--primary);
            transform: scale(1.05);
          }

          .menu-icon {
            display: block;
            cursor: pointer;
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(-100%, 60%);
          }
          
          .nav-links.activated::after {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
