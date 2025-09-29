'use client'

export default function GTMStrategy() {
  const strategies = [
    {
      title: "Pilot Projects",
      description: "Nigeria, UAE, and EU",
      icon: "🚀"
    },
    {
      title: "Strategic Partnerships",
      description: "Asset managers, regulators, and exchanges",
      icon: "🤝"
    },
    {
      title: "Community Adoption",
      description: "Early investor access programs",
      icon: "👥"
    }
  ]

  return (
    <section className="section section-dark">
      <div className="container">
        <h2 className="text-center mb-8">Go-to-Market Strategy</h2>
        <div className="strategy-grid">
          {strategies.map((strategy, index) => (
            <div key={index} className="strategy-card fade-in-up">
              <div className="strategy-icon">{strategy.icon}</div>
              <div className="strategy-content">
                <h4>{strategy.title}</h4>
                <p>{strategy.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .strategy-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .strategy-card {
          background: rgba(255, 255, 255, 0.1);
          padding: 2.5rem 2rem;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          text-align: center;
        }
        
        .strategy-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.15);
          border-color: var(--accent-gold);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }
        
        .strategy-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }
        
        .strategy-content h4 {
          color: var(--accent-gold);
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }
        
        .strategy-content p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          font-size: 1rem;
          margin: 0;
        }

        @media (max-width: 768px) {
          .strategy-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .strategy-card {
            padding: 2rem 1.5rem;
          }
          
          .strategy-icon {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  )
}