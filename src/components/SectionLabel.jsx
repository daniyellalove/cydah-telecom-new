export default function SectionLabel({ children, center }) {
  return (
    <div
      style={{
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '0.18em',
        color: '#a32121',
        textAlign: center ? 'center' : 'left',
      }}
    >
      {children}
    </div>
  )
}
