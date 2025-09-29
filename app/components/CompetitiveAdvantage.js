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
        <div className="grid grid-2">
          {advantages.map((advantage, index) => (
            <div key={index} className="card fade-in-up">
              <h4>{advantage}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}