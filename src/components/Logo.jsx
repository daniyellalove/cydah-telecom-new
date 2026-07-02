import { Link } from 'react-router-dom'
import cydahLogo from '../assets/cydah.png'

export default function Logo({/*{ dark }*/}) {
  return (
    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
      <img
        src={cydahLogo}
        alt="Cydah Telecommunications LLC"
        style={{ height: 48, width: 'auto' }}
      />
      {/*<span
        style={{
          width: 38,
          height: 38,
          borderRadius: 9,
          background: 'linear-gradient(150deg,#a32121,#7c1717)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(124,23,23,0.25)',
          flexShrink: 0,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M16.5 7.2A6.5 6.5 0 1 0 18 16" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
          <circle cx="12" cy="12" r="2.4" fill="#fff" />
        </svg>
      </span>
      <span style={{ lineHeight: 1, fontFamily: "'Archivo', sans-serif" }}>
        <span style={{ display: 'block', fontSize: 18, fontWeight: 800, letterSpacing: '0.04em', color: dark ? '#fff' : '#16181c' }}>
          CYDAH
        </span>
        <span style={{ display: 'block', fontSize: 9.5, fontWeight: 600, letterSpacing: '0.22em', color: dark ? '#7e838c' : '#8a9099', marginTop: 3 }}>
          NETWORK SERVICES LLC
        </span>
      </span>*/}
    </Link>
  )
}
