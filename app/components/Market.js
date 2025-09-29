'use client'

export default function Market() {
  const marketData = [
    {
      title: "TAM",
      value: "$16 Trillion",
      description: "Projected RWA tokenization industry by 2030"
    },
    {
      title: "SAM",
      value: "$500 Billion",
      description: "Tokenized assets in early adoption sectors"
    },
    {
      title: "SOM",
      value: "$5 Billion",
      description: "Entry-point market targeting Africa, UAE, EU corridors"
    }
  ]

  return (
    <section id="market" className="section section-dark">
      <div className="container">
        <h2 className="text-center mb-8">MARKET OPPORTUNITY</h2>
        <div className="market-grid">
          {marketData.map((item, index) => (
            <div key={index} className="market-card text-center fade-in-up">
              <h3 className="market-value">{item.value}</h3>
              <h4 className="market-title">{item.title}</h4>
              <p className="market-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .market-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .market-card {
          background: rgba(255, 255, 255, 0.1);
          padding: 2.5rem 2rem;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        
        .market-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.15);
          border-color: var(--accent-gold);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }
        
        .market-value {
          color: var(--accent-gold);
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1;
        }
        
        .market-title {
          color: var(--white);
          font-size: 1.3rem;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        
        .market-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .market-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .market-card {
            padding: 2rem 1.5rem;
          }
          
          .market-value {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  )
}