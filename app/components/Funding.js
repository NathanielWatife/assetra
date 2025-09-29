'use client'

export default function Funding() {
  const allocations = [
    { category: "Development & Security", percentage: "40%" },
    { category: "Regulatory Licensing & Compliance", percentage: "30%" },
    { category: "Market Entry & Growth", percentage: "20%" },
    { category: "Team Expansion", percentage: "10%" }
  ]

  return (
    <section className="section section-light">
      <div className="container">
        <h2 className="text-center mb-8">Funding Requirements</h2>
        <div className="text-center mb-6">
          <h3 style={{color: 'var(--accent-gold)', fontSize: '2.5rem'}}>$2M</h3>
          <p style={{fontSize: '1.2rem'}}>Seed Round</p>
        </div>
        <div className="grid grid-2">
          {allocations.map((allocation, index) => (
            <div key={index} className="card fade-in-up">
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h4>{allocation.category}</h4>
                <span style={{fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-gold)'}}>
                  {allocation.percentage}
                </span>
              </div>
              <div style={{
                marginTop: '10px',
                height: '8px',
                background: 'var(--light-bg)',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: allocation.percentage,
                  height: '100%',
                  background: 'var(--accent-gold)',
                  borderRadius: '4px'
                }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}