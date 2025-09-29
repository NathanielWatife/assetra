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
        <div className="grid grid-3">
          {marketData.map((item, index) => (
            <div key={index} className="card text-center fade-in-up">
              <h3 className="mb-4" style={{color: 'var(--accent-gold)'}}>{item.value}</h3>
              <h4 className="mb-4">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}