import { Link } from 'react-router-dom'

export default function CtaBand({
  title = 'Planning a new senior living or healthcare project?',
  description = "Let's talk about how low-voltage design can support resident experience, safety, and day-to-day operations — from the first sketch to project closeout.",
  buttonLabel = 'Schedule a Consultation',
  buttonTo = '/contact',
}) {
  return (
    <section style={{ position: 'relative', background: 'linear-gradient(135deg,#8e1a1a,#6e1313)', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="container" style={{ position: 'relative', maxWidth: 760, padding: '84px 40px', textAlign: 'center' }}>
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(26px, 4vw, 36px)',
            letterSpacing: '-0.02em',
            color: '#fff',
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          {title}
        </h2>
        <div style={{ width: 54, height: 3, background: 'rgba(255,255,255,0.6)', borderRadius: 2, margin: '22px auto 0' }} />
        <p style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,0.82)', margin: '22px 0 0' }}>
          {description}
        </p>
        <Link
          to={buttonTo}
          style={{
            display: 'inline-block',
            marginTop: 32,
            fontSize: 15,
            fontWeight: 600,
            color: '#8e1a1a',
            background: '#fff',
            padding: '15px 30px',
            borderRadius: 11,
            textDecoration: 'none',
            boxShadow: '0 14px 30px rgba(0,0,0,0.22)',
          }}
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  )
}
