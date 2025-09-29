'use client'

export default function Features() {
  const features = [
    {
      title: "Asset Tokenizer Module",
      description: "Tokenize assets instantly with our streamlined process"
    },
    {
      title: "Compliance Hub",
      description: "Automated verification & regulatory reporting"
    },
    {
      title: "Liquidity Pools & Marketplaces",
      description: "Seamless trading experience for tokenized assets"
    },
    {
      title: "Multi-chain Deployment",
      description: "Ethereum + Polygon for optimal performance"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time asset performance monitoring"
    }
  ]

  return (
    <section className="section section-light">
      <div className="container">
        <h2 className="text-center mb-8">PRODUCT & FEATURES</h2>
        <div className="grid grid-3">
          {features.map((feature, index) => (
            <div key={index} className="card fade-in-up">
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}