export default function PageHero({ eyebrow, title, description }) {
  return (
    <section
      style={{
        position: 'relative',
        background:
          'radial-gradient(900px 500px at 88% -10%, rgba(163,33,33,0.06), transparent 60%), linear-gradient(180deg,#ffffff,#fbfafa)',
        borderBottom: '1px solid #ececec',
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
      <div className="container" style={{ position: 'relative', padding: '64px 40px 64px', textAlign: 'center' }}>
        {eyebrow && (
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
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#a32121' }} />
            {eyebrow}
          </span>
        )}
        <h1
          style={{
            fontWeight: 800,
            fontSize: 'clamp(32px, 5vw, 48px)',
            lineHeight: 1.08,
            letterSpacing: '-0.025em',
            margin: '22px 0 0',
            color: '#14161a',
          }}
        >
          {title}
        </h1>
        {description && (
          <p
            style={{
              fontSize: 16.5,
              lineHeight: 1.6,
              color: '#4c515a',
              maxWidth: 640,
              margin: '20px auto 0',
            }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
