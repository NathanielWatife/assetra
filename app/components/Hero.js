'use client'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className="hero section-dark">
      <div className="container">
        <div className="hero-content">
          <h1 className="fade-in-up">TOKENIZING THE FUTURE.</h1>
          <p className="hero-subtitle fade-in-up">SECURE, COMPLIANT, ACCESSIBLE</p>
          <p className="hero-description fade-in-up">
            Democratizing access to high-value assets through blockchain technology. 
            Making real estate, carbon credits, and intellectual property accessible to all.
          </p>
          <h2>OLUWASEUN AYOBAMI AIYEJOTO ALABI</h2>
          <div className="hero-buttons fade-in-up">
            <a href="#platform" className="btn btn-primary">Explore Platform</a>
            <a href="#contact" className="btn btn-secondary">Contact Us</a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          padding: 160px 0 100px;
          text-align: center;
          background: var(--gradient);
        }
        .hero-content h1 {
          font-size: 4rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--accent-gold),rgb(138, 247, 240));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .container h2
        {
            color: var(--accent-gold);
            margin-bottom: 2rem;
            border-bottom: 1px solid rgba(255,255,255,0.3);
        }

        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        .hero-description {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto 3rem;
          opacity: 0.8;
          line-height: 1.8;
        }
        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }
          .hero-subtitle {
            font-size: 1.2rem;
          }
          .hero-description {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  )
}