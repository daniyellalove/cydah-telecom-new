import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { services } from '../data.jsx'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="WHAT WE DESIGN"
        title="Core service areas."
        description="Low-voltage technology design services tailored for senior living communities and healthcare facilities, from first sketch through construction closeout."
      />

      <section className="container" style={{ padding: '80px 40px' }}>
        <div className="three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
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

      <CtaBand />

      <style>{`
        @media (max-width: 900px) {
          .three-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
