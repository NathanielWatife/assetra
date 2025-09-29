import './globals.css';import './globals.css'

export const metadata = {
  title: 'ASSETRA - Tokenizing The Future',
  description: 'Secure, Compliant, Accessible Asset Tokenization Platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}