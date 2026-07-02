import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import SectionLabel from '../components/SectionLabel.jsx'
import { stats } from '../data.jsx'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT CYDAH"
        title="Low-voltage design partners for mission-critical environments."
        description="Cydah Network Services LLC is a low-voltage technology design firm based in Atlanta, GA, focused exclusively on senior living and healthcare facilities."
      />

      <section className="container" style={{ padding: '80px 40px' }}>
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 56, alignItems: 'start' }}>
          <div>
            <SectionLabel>OUR APPROACH</SectionLabel>
            <h2 style={{ fontWeight: 800, fontSize: 'clamp(26px,3.5vw,34px)', letterSpacing: '-0.02em', color: '#14161a', margin: '14px 0 0', lineHeight: 1.2 }}>
              Specialized expertise, built around the people who use these buildings every day.
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: '#4c515a', margin: '20px 0 0' }}>
              Senior living communities and healthcare facilities carry unique demands: residents and patients who
              depend on reliable systems, staff who need clear and fast communication tools, and regulatory
              standards that leave little room for error. Cydah focuses exclusively on these environments, which
              means every design decision — from AP placement to e-call coordination — is informed by how care
              teams actually work.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: '#4c515a', margin: '16px 0 0' }}>
              We coordinate closely with architects, MEP engineers, IT directors, and ownership groups throughout
              the design lifecycle, providing documentation that's ready for bidding and construction, and staying
              engaged through closeout to make sure systems are installed as intended.
            </p>
          </div>

          <div style={{ background: '#f6f4f4', border: '1px solid #ececec', borderRadius: 18, padding: 32 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: '#a32121', marginBottom: 18 }}>
              CYDAH AT A GLANCE
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <div style={{ fontFamily: "'Archivo',sans-serif", fontWeight: 800, fontSize: 28, color: '#14161a' }}>{s.value}</div>
                  <div style={{ fontSize: 12.5, color: '#7c828a', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: '#666b72', marginTop: 24, paddingTop: 18, borderTop: '1px solid #e3e0e0' }}>
              Based in Atlanta, GA — designing across the full SD–CD lifecycle for senior living and healthcare
              clients in multiple markets.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
