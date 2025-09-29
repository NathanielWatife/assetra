'use client'

export default function Footer() {
  return (
    <footer className="footer section-dark">
      <div className="container">
        <div className="text-center">
          <h3>ASSETRA TECHNOLOGIES</h3>
          <p>TOKENIZING THE FUTURE. SECURE, COMPLIANT, ACCESSIBLE</p>
          <div style={{marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)'}}>
            <p>&copy; 2024 ASSETRA Technologies. All rights reserved.</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer {
          padding: 60px 0 40px;
          text-align: center;
        }
      `}</style>
    </footer>
  )
}