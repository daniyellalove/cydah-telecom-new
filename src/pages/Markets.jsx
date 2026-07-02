import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { markets, stats } from '../data.jsx'

export default function Markets() {
  return (
    <>
      <PageHero
        eyebrow="OUR FOCUS"
        title="Built for senior living & healthcare."
        description="We work in highly regulated, technology-intensive environments where reliability, safety, and clear communication are non-negotiable."
      />

      <section style={{ background: '#f6f4f4', borderTop: '1px solid #ececec', borderBottom: '1px solid #ececec' }}>
        <div className="container stats-grid" style={{ padding: '38px 40px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{ textAlign: 'center', padding: '6px 0', borderRight: i < stats.length - 1 ? '1px solid #e3e0e0' : 'none' }}
            >
              <div style={{ fontFamily: "'Archivo',sans-serif", fontWeight: 800, fontSize: 34, color: i === 3 ? '#a32121' : '#14161a', letterSpacing: '-0.02em' }}>
                {s.value}
              </div>
              <div style={{ fontSize: 12.5, color: '#7c828a', marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container" style={{ padding: '88px 40px' }}>
        <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
          {markets.map((m) => (
            <div key={m.title} style={{ border: '1px solid #ececec', borderRadius: 18, padding: 38, background: 'linear-gradient(180deg,#fff,#fdfcfc)' }}>
              <span style={{ width: 48, height: 48, borderRadius: 12, background: '#fbeeee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a32121" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  {m.icon}
                </svg>
              </span>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: '#a32121', marginTop: 22 }}>{m.eyebrow}</div>
              <h3 style={{ fontWeight: 700, fontSize: 22, color: '#14161a', margin: '10px 0 0', letterSpacing: '-0.01em' }}>{m.title}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#666b72', margin: '12px 0 18px' }}>{m.description}</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                {m.bullets.map((b) => (
                  <li key={b} style={{ fontSize: 14, color: '#4c515a', display: 'flex', gap: 10 }}>
                    <span style={{ color: '#a32121' }}>•</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />

      <style>{`
        @media (max-width: 900px) {
          .two-col { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; row-gap: 24px; }
          .stats-grid > div:nth-child(2n) { border-right: none !important; }
        }
      `}</style>
    </>
  )
}
