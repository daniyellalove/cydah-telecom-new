import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo.jsx'

const NAV = [
  { to: '/services', label: 'Services' },
  { to: '/markets', label: 'Markets' },
  { to: '/process', label: 'Our Process' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const linkStyle = ({ isActive }) => ({
  fontSize: 14.5,
  color: isActive ? '#a32121' : '#44484f',
  textDecoration: 'none',
  fontWeight: 500,
})

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(255,255,255,0.88)',
        backdropFilter: 'saturate(180%) blur(12px)',
        borderBottom: '1px solid #ececee',
      }}
    >
      <div
        className="container"
        style={{
          height: 76,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Logo />

        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 34 }}>
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} style={linkStyle}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="desktop-cta"
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: '#fff',
            background: 'linear-gradient(150deg,#a32121,#7c1717)',
            padding: '12px 22px',
            borderRadius: 10,
            textDecoration: 'none',
            boxShadow: '0 6px 18px rgba(124,23,23,0.28)',
          }}
        >
          Schedule a Consultation
        </Link>

        <button
          className="mobile-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'transparent',
            border: '1px solid #dfdcdc',
            borderRadius: 8,
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16181c" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <div
          className="mobile-menu"
          style={{
            borderTop: '1px solid #ececee',
            background: '#fff',
            padding: '16px 20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                fontSize: 16,
                fontWeight: 600,
                color: isActive ? '#a32121' : '#16181c',
                textDecoration: 'none',
              })}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: '#fff',
              background: 'linear-gradient(150deg,#a32121,#7c1717)',
              padding: '13px 20px',
              borderRadius: 10,
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Schedule a Consultation
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav, .desktop-cta { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
