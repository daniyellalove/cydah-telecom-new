import { Link } from 'react-router-dom'
import SectionLabel from '../components/SectionLabel.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { services, processSteps, markets, stats } from '../data.jsx'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          position: 'relative',
          background:
            'radial-gradient(900px 500px at 88% -10%, rgba(163,33,33,0.06), transparent 60%), linear-gradient(180deg,#ffffff,#fbfafa)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(#f1eded 1px, transparent 1px), linear-gradient(90deg,#f1eded 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.5), transparent 70%)',
            opacity: 0.6,
          }}
        />
        <div
          className="container hero-grid"
          style={{
            position: 'relative',
            padding: '84px 40px 96px',
            display: 'grid',
            gridTemplateColumns: '1.05fr 0.95fr',
            gap: 56,
            alignItems: 'center',
          }}
        >
          <div>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontSize: 11.5,
                fontWeight: 700,
                letterSpacing: '0.16em',
                color: '#9b1f1f',
                background: '#fbeeee',
                border: '1px solid #f3dada',
                padding: '8px 14px',
                borderRadius: 999,
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#a32121' }} /> LOW-VOLTAGE TECHNOLOGY DESIGN
            </span>
            <h1
              style={{
                fontWeight: 800,
                fontSize: 'clamp(34px, 5.5vw, 58px)',
                lineHeight: 1.04,
                letterSpacing: '-0.025em',
                margin: '26px 0 0',
                color: '#14161a',
              }}
            >
              Low-voltage solutions.
              <br />
              <span style={{ color: '#a32121' }}>High-stakes care.</span>
            </h1>
            <p style={{ fontSize: 17.5, lineHeight: 1.6, color: '#4c515a', maxWidth: 480, margin: '24px 0 0' }}>
              Cydah designs the wired and wireless backbone for senior living communities and healthcare facilities —
              structured cabling, access control, video surveillance, and emergency call systems engineered around
              residents, clinicians, and safety.
            </p>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, color: '#8a9099', maxWidth: 460, margin: '14px 0 0' }}>
              From concept to closeout: SD, DD, CD, and construction administration for mission-critical environments.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 34, flexWrap: 'wrap' }}>
              <Link
                to="/contact"
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#fff',
                  background: 'linear-gradient(150deg,#a32121,#7c1717)',
                  padding: '15px 26px',
                  borderRadius: 11,
                  textDecoration: 'none',
                  boxShadow: '0 10px 26px rgba(124,23,23,0.3)',
                }}
              >
                Schedule a Consultation
              </Link>
              <Link
                to="/services"
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#16181c',
                  background: '#fff',
                  border: '1px solid #dfdcdc',
                  padding: '15px 26px',
                  borderRadius: 11,
                  textDecoration: 'none',
                }}
              >
                View Services
              </Link>
            </div>
          </div>

          <div
            style={{
              background: '#fff',
              border: '1px solid #eceaea',
              borderRadius: 18,
              boxShadow: '0 30px 60px -24px rgba(20,22,26,0.25)',
              padding: 28,
              animation: 'cydFloat 7s ease-in-out infinite',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: '#a32121', marginBottom: 20 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#a32121' }} />
              TECHNOLOGY LAYOUT FOCUS AREAS
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 26 }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#14161a', marginBottom: 12 }}>Senior Living Floor</div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    'Wi-Fi APs for resident rooms & corridors',
                    'E-call pull stations in bedrooms & baths',
                    'Access control at perimeter & memory care',
                    'Cameras for entries, elevators, common areas',
                  ].map((t) => (
                    <li key={t} style={{ fontSize: 12.5, color: '#54595f', display: 'flex', gap: 8 }}>
                      <span style={{ color: '#a32121' }}>›</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#14161a', marginBottom: 12 }}>MDF / IDF Highlights</div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {['Rack and cable tray layouts', 'Copper & fiber backbone design', 'Carrier / ISP coordination'].map((t) => (
                    <li key={t} style={{ fontSize: 12.5, color: '#54595f', display: 'flex', gap: 8 }}>
                      <span style={{ color: '#a32121' }}>›</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p style={{ fontSize: 12, lineHeight: 1.55, color: '#8a9099', margin: '22px 0 0', paddingTop: 18, borderTop: '1px solid #f0eeee' }}>
              We align low-voltage design with clinical workflows, life-safety codes, and IT standards so facilities
              are ready for day-one operations and future growth.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: '#f6f4f4', borderTop: '1px solid #ececec', borderBottom: '1px solid #ececec' }}>
        <div className="container stats-grid" style={{ padding: '38px 40px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                textAlign: 'center',
                padding: '6px 0',
                borderRight: i < stats.length - 1 ? '1px solid #e3e0e0' : 'none',
              }}
            >
              <div style={{ fontFamily: "'Archivo',sans-serif", fontWeight: 800, fontSize: 34, color: i === 3 ? '#a32121' : '#14161a', letterSpacing: '-0.02em' }}>
                {s.value}
              </div>
              <div style={{ fontSize: 12.5, color: '#7c828a', marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MARKETS PREVIEW */}
      <section className="container" style={{ padding: '92px 40px' }}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
          <SectionLabel center>OUR FOCUS</SectionLabel>
          <h2 style={{ fontWeight: 800, fontSize: 'clamp(28px,4vw,40px)', letterSpacing: '-0.025em', color: '#14161a', margin: '16px 0 0', lineHeight: 1.1 }}>
            Built for senior living &amp; healthcare.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: '#565b63', margin: '18px 0 0' }}>
            We work in highly regulated, technology-intensive environments where reliability, safety, and clear
            communication are non-negotiable.
          </p>
        </div>

        <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginTop: 54 }}>
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

      {/* PROCESS PREVIEW */}
      <section style={{ background: '#f6f4f4', borderTop: '1px solid #ececec', borderBottom: '1px solid #ececec' }}>
        <div className="container" style={{ padding: '88px 40px' }}>
          <div style={{ textAlign: 'center' }}>
            <SectionLabel center>HOW WE WORK</SectionLabel>
            <h2 style={{ fontWeight: 800, fontSize: 'clamp(28px,4vw,40px)', letterSpacing: '-0.025em', color: '#14161a', margin: '16px 0 0', lineHeight: 1.1 }}>
              A clear process from concept to closeout.
            </h2>
            <div style={{ width: 54, height: 3, background: '#a32121', borderRadius: 2, margin: '22px auto 0' }} />
          </div>
          <div className="three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 52 }}>
            {processSteps.map((p) => (
              <div key={p.number} style={{ background: '#fff', border: '1px solid #ececec', borderRadius: 16, padding: 32 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: '#a32121' }}>
                  {p.number} · {p.label}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 20, color: '#14161a', margin: '14px 0 0' }}>{p.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.62, color: '#666b72', margin: '12px 0 0' }}>{p.description}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/process" style={{ fontSize: 14, fontWeight: 600, color: '#a32121', textDecoration: 'none' }}>
              See the full process overview →
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />

      {/* SERVICES PREVIEW */}
      <section className="container" style={{ padding: '92px 40px' }}>
        <div className="services-head" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <SectionLabel>WHAT WE DESIGN</SectionLabel>
            <h2 style={{ fontWeight: 800, fontSize: 'clamp(28px,4vw,40px)', letterSpacing: '-0.025em', color: '#14161a', margin: '14px 0 0', lineHeight: 1.1 }}>
              Core service areas.
            </h2>
            <div style={{ width: 54, height: 3, background: '#a32121', borderRadius: 2, margin: '18px 0 0' }} />
          </div>
          <Link
            to="/services"
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: '#16181c',
              background: '#fff',
              border: '1px solid #dfdcdc',
              padding: '13px 22px',
              borderRadius: 10,
              textDecoration: 'none',
            }}
          >
            View all services
          </Link>
        </div>

        <div className="three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 46 }}>
          {services.map((s) => (
            <div key={s.title} style={{ border: '1px solid #ececec', borderRadius: 16, padding: 30, background: 'linear-gradient(180deg,#fff,#fdfcfc)' }}>
              <span style={{ width: 46, height: 46, borderRadius: 12, background: '#fbeeee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a32121" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  {s.icon}
                </svg>
              </span>
              <h3 style={{ fontWeight: 700, fontSize: 18.5, color: '#14161a', margin: '20px 0 0', letterSpacing: '-0.01em' }}>{s.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: '#666b72', margin: '10px 0 0' }}>{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .two-col { grid-template-columns: 1fr !important; }
          .three-col { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; row-gap: 24px; }
          .stats-grid > div:nth-child(2n) { border-right: none !important; }
        }
      `}</style>
    </>
  )
}
