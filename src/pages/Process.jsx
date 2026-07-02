import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { processSteps } from '../data.jsx'

export default function Process() {
  return (
    <>
      <PageHero
        eyebrow="HOW WE WORK"
        title="A clear process from concept to closeout."
        description="A structured, owner-aligned workflow that takes low-voltage design from discovery through construction administration."
      />

      <section className="container" style={{ padding: '80px 40px' }}>
        <div className="three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
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
      </section>

      <CtaBand />

      <style>{`
        @media (max-width: 900px) {
          .three-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
