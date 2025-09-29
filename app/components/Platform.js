'use client'

export default function Platform() {
  return (
    <section id="platform" className="section section-dark">
      <div className="container">
        <h2 className="text-center mb-8">ASSETRA PLATFORM</h2>
        <div className="text-center mb-6">
          <p className="fade-in-up" style={{fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto'}}>
            We believe that the simple things of life give wings to great imaginations, making it possible for humans to achieve the superlative.
          </p>
        </div>
        <div className="platform-grid">
          <div className="platform-card fade-in-up">
            <h4>Blockchain-based Ecosystem</h4>
            <p>Secure, transparent tokenization platform built on blockchain technology</p>
          </div>
          <div className="platform-card fade-in-up">
            <h4>Asset Tokenization</h4>
            <p>Convert real-world assets into regulated, tradable digital tokens</p>
          </div>
          <div className="platform-card fade-in-up">
            <h4>Built-in Compliance</h4>
            <p>Automated KYC/AML verification and tax reporting</p>
          </div>
          <div className="platform-card fade-in-up">
            <h4>Fractional Ownership</h4>
            <p>Democratize investing through fractional ownership models</p>
          </div>
          <div className="platform-card fade-in-up">
            <h4>Secondary Markets</h4>
            <p>Liquidity through seamless secondary market trading</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .platform-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .platform-card {
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        
        .platform-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.15);
          border-color: var(--accent-gold);
        }
        
        .platform-card h4 {
          color: var(--accent-gold);
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }
        
        .platform-card p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .platform-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .platform-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}