'use client'

export default function GTMStrategy() {
  const strategies = [
    "Pilot projects in Nigeria, UAE, and EU",
    "Partnerships with asset managers, regulators, and exchanges",
    "Community-driven adoption through early investor access programs"
  ]

  return (
    <section className="section section-dark">
      <div className="container">
        <h2 className="text-center mb-8">Go-to-Market Strategy</h2>
        <div className="grid grid-3">
          {strategies.map((strategy, index) => (
            <div key={index} className="card fade-in-up">
              <h4>{strategy}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}