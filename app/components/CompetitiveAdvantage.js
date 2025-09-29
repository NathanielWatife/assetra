'use client'

export default function CompetitiveAdvantage() {
  const advantages = [
    "Regulatory-first approach (multi-jurisdictional compliance baked-in)",
    "Multi-asset class adaptability",
    "Institutional-grade security",
    "Proprietary compliance algorithms & smart contracts"
  ]

  return (
    <section className="section section-dark">
      <div className="container">
        <h2 className="text-center mb-8">COMPETITIVE ADVANTAGE</h2>
        <div className="advantage-grid">
          {advantages.map((advantage, index) => (
            <div key={index} className="advantage-card fade-in-up">
              <div className="advantage-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4>{advantage}</h4>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .advantage-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }
        
        .advantage-card {
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        
        .advantage-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.15);
          border-color: var(--accent-gold);
        }
        
        .advantage-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
          margin-top: 0.25rem;
        }
        
        .advantage-card h4 {
          color: var(--white);
          margin: 0;
          font-size: 1.1rem;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .advantage-grid {
            grid-template-columns: 1fr;
          }
          
          .advantage-card {
            padding: 1.5rem;
          }
          
          .advantage-card h4 {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  )
}