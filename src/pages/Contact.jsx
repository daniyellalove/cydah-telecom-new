import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: 10,
  border: '1px solid #dfdcdc',
  fontSize: 14.5,
  fontFamily: 'inherit',
  color: '#16181c',
  background: '#fff',
}

const labelStyle = {
  fontSize: 13,
  fontWeight: 600,
  color: '#44484f',
  marginBottom: 6,
  display: 'block',
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="GET IN TOUCH"
        title="Let's talk about your project."
        description="Tell us a bit about your senior living or healthcare project and we'll follow up to schedule a consultation."
      />

      <section className="container" style={{ padding: '80px 40px' }}>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 56 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: '#a32121', marginBottom: 18 }}>
              CONTACT INFO
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#8a9099', marginBottom: 4 }}>Email</div>
                <a href="mailto:info@cydahtelecom.com" style={{ fontSize: 16, fontWeight: 600, color: '#16181c', textDecoration: 'none' }}>
                  info@cydahtelecom.com
                </a>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#8a9099', marginBottom: 4 }}>Phone</div>
                <a href="tel:4705452345" style={{ fontSize: 16, fontWeight: 600, color: '#16181c', textDecoration: 'none' }}>
                  470-545-2345
                </a>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#8a9099', marginBottom: 4 }}>Location</div>
                <div style={{ fontSize: 16, fontWeight: 600, color: '#16181c' }}>Atlanta, GA</div>
              </div>
            </div>

            <div style={{ marginTop: 36, border: '1px solid #ececec', borderRadius: 16, padding: 24, background: '#f6f4f4' }}>
              <p style={{ fontSize: 13.5, lineHeight: 1.6, color: '#666b72' }}>
                We typically respond within one business day. For urgent project timelines, please mention your
                target schedule in the message below.
              </p>
            </div>
          </div>

          <div>
            {submitted ? (
              <div
                style={{
                  border: '1px solid #ececec',
                  borderRadius: 16,
                  padding: 40,
                  textAlign: 'center',
                  background: 'linear-gradient(180deg,#fff,#fdfcfc)',
                }}
              >
                <h3 style={{ fontWeight: 700, fontSize: 22, color: '#14161a' }}>Thanks — message received.</h3>
                <p style={{ fontSize: 14.5, color: '#666b72', marginTop: 10 }}>
                  Someone from our team will follow up shortly to schedule your consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                  <div>
                    <label style={labelStyle}>Name</label>
                    <input required type="text" placeholder="Jane Doe" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input required type="email" placeholder="jane@company.com" style={inputStyle} />
                  </div>
                </div>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                  <div>
                    <label style={labelStyle}>Company</label>
                    <input type="text" placeholder="Company name" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Project Type</label>
                    <select style={inputStyle} defaultValue="Senior Living">
                      <option>Senior Living</option>
                      <option>Healthcare Facility</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Project Details</label>
                  <textarea required rows={6} placeholder="Tell us about your project, timeline, and scope." style={{ ...inputStyle, resize: 'vertical' }} />
                </div>
                <button
                  type="submit"
                  style={{
                    alignSelf: 'flex-start',
                    fontSize: 15,
                    fontWeight: 600,
                    color: '#fff',
                    background: 'linear-gradient(150deg,#a32121,#7c1717)',
                    padding: '14px 28px',
                    borderRadius: 11,
                    border: 'none',
                    boxShadow: '0 10px 26px rgba(124,23,23,0.3)',
                  }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
