'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <Image src="/assets/logo.png" width={50} height={40} priority />
            <h2>ASSETRA</h2>
            <span>TECHNOLOGIES</span>
          </div>
          
          <div className={`nav-links ${isMenuOpen ? 'nav-links-active' : ''}`}>
            <a href="#problem">Problem</a>
            <a href="#platform">Platform</a>
            <a href="#market">Market</a>
            <a href="#team">Team</a>
            <a href="#contact" className="btn btn-primary">Get Started</a>
          </div>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
      <style jsx>{`
        .header {
          background:rgba(27, 85, 129, 0.78);
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
        }
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
        }
        .logo {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: 700;
        }
        .logo h2 {
          color: var(--primary-blue);
          margin: 0;
        }
        .logo span {
          color: var(--text-light);
          font-size: 0.8rem;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .nav-links a {
          text-decoration: none;
          color: var(--text-dark);
          font-weight: 500;
          transition: color 0.3s ease;
        }
        .nav-links a:hover {
          color: var(--accent-gold);
        }
        .menu-toggle {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
        }
        .menu-toggle span {
          width: 25px;
          height: 3px;
          background: var(--primary-blue);
          margin: 3px 0;
          transition: 0.3s;
        }

        @media (max-width: 768px) {
          .menu-toggle {
            display: flex;
          }
          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: var(--white);
            flex-direction: column;
            padding: 2rem;
            box-shadow: 0 5px 10px rgba(0,0,0,0.1);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }
          .nav-links-active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
        }
      `}</style>
    </header>
  )
}