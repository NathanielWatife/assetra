'use client'

export default function BusinessModel() {
  const revenueStreams = [
    "Asset tokenization service fees",
    "Marketplace transaction fees",
    "SaaS licensing for compliance/analytics tools",
    "White-label solutions for asset managers & institutions"
  ]

  return (
    <section className="section section-light">
      <div className="container">
        <h2 className="text-center mb-8">Business Model</h2>
        <div className="grid grid-2">
          {revenueStreams.map((stream, index) => (
            <div key={index} className="card fade-in-up">
              <h4>{stream}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}