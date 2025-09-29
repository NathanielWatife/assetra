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
          <div className="grid grid-3">
            <div className="card fade-in-up">
              <h4>Blockchain-based Ecosystem</h4>
              <p>Secure, transparent tokenization platform built on blockchain technology</p>
            </div>
            <div className="card fade-in-up">
              <h4>Asset Tokenization</h4>
              <p>Convert real-world assets into regulated, tradable digital tokens</p>
            </div>
            <div className="card fade-in-up">
              <h4>Built-in Compliance</h4>
              <p>Automated KYC/AML verification and tax reporting</p>
            </div>
            <div className="card fade-in-up">
              <h4>Fractional Ownership</h4>
              <p>Democratize investing through fractional ownership models</p>
            </div>
            <div className="card fade-in-up">
              <h4>Secondary Markets</h4>
              <p>Liquidity through seamless secondary market trading</p>
            </div>
          </div>
        </div>
      </section>
    )
  }