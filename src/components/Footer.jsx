import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--footer-bg)', color: 'var(--footer-text)' }}>
      <div
        className="container footer-grid"
        style={{
          padding: '72px 40px 40px',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1.1fr',
          gap: 40,
        }}
      >
        <div>
          <Logo dark />
          <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--footer-text-2)', margin: '20px 0 0', maxWidth: 280 }}>
            Low-voltage technology design for senior living &amp; healthcare. Based in Atlanta, GA.
          </p>
          <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
            {['X', 'In', 'Fb'].map((s) => (
              <span
                key={s}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 8,
                  border: '1px solid #2c2e33',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 11,
                  fontWeight: 600,
                  color: '#aab0b8',
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: 'var(--footer-text-2)', marginBottom: 18 }}>
            SERVICES
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Link to="/services" style={{ fontSize: 14, color: 'var(--footer-text-3)', textDecoration: 'none' }}>Low-Voltage Systems Design</Link>
            <Link to="/services" style={{ fontSize: 14, color: 'var(--footer-text-3)', textDecoration: 'none' }}>Wi-Fi &amp; Network Design</Link>
            <Link to="/services" style={{ fontSize: 14, color: 'var(--footer-text-3)', textDecoration: 'none' }}>Security &amp; Access Control</Link>
            <Link to="/services" style={{ fontSize: 14, color: 'var(--footer-text-3)', textDecoration: 'none' }}>Emergency Call Systems</Link>
            <Link to="/services" style={{ fontSize: 14, color: 'var(--footer-text-3)', textDecoration: 'none' }}>Construction Administration</Link>
          </div>
        </div>

        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: 'var(--footer-text-2)', marginBottom: 18 }}>
            COMPANY
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Link to="/markets" style={{ fontSize: 14, color: 'var(--footer-text-3)', textDecoration: 'none' }}>Markets</Link>
            <Link to="/process" style={{ fontSize: 14, color: 'var(--footer-text-3)', textDecoration: 'none' }}>Our Process</Link>
            <Link to="/about" style={{ fontSize: 14, color: 'var(--footer-text-3)', textDecoration: 'none' }}>About</Link>
            <Link to="/contact" style={{ fontSize: 14, color: 'var(--footer-text-3)', textDecoration: 'none' }}>Contact</Link>
          </div>
        </div>

        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: 'var(--footer-text-2)', marginBottom: 18 }}>
            CONTACT
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href="mailto:info@cydahtelecom.com" style={{ fontSize: 14, color: 'var(--footer-text-3)', textDecoration: 'none' }}>info@cydahtelecom.com</a>
            <a href="tel:4705452345" style={{ fontSize: 14, color: 'var(--footer-text-3)', textDecoration: 'none' }}>470-545-2345</a>
            <Link to="/" style={{ fontSize: 14, color: 'var(--footer-text-3)', textDecoration: 'none' }}>cydahtelecom.com</Link>
          </div>
          <Link
            to="/contact"
            style={{
              display: 'inline-block',
              marginTop: 20,
              fontSize: 13.5,
              fontWeight: 600,
              color: '#fff',
              background: 'linear-gradient(150deg,#a32121,#7c1717)',
              padding: '12px 20px',
              borderRadius: 10,
              textDecoration: 'none',
            }}
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--footer-border)' }}>
        <div
          className="container"
          style={{
            padding: '22px 40px',
            display: 'flex',
            justifyContent: 'space-between',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <span style={{ fontSize: 12.5, color: 'var(--footer-text-2)' }}>
            © 2026 Cydah Network Services LLC. All rights reserved.
          </span>
          <span style={{ fontSize: 12.5, color: 'var(--footer-text-2)' }}>
            cydahtelecom.com — Low-voltage technology design for senior living &amp; healthcare.
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 520px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
