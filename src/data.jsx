export const services = [
  {
    title: 'Low-Voltage Systems Design',
    description: 'Structured cabling, network rooms, and low-voltage systems aligned with owner standards.',
    icon: (
      <path d="M3 12h4l3 8 4-16 3 8h4" />
    ),
  },
  {
    title: 'Wi-Fi & Network Coordination',
    description: 'AP layouts and coordination based on predictive designs provided by IT or wireless partners.',
    icon: (
      <>
        <path d="M5 12.5a10 10 0 0 1 14 0" />
        <path d="M8.5 16a5 5 0 0 1 7 0" />
        <circle cx="12" cy="19" r="1" />
      </>
    ),
  },
  {
    title: 'Security, Access & Surveillance',
    description: 'Device layouts and infrastructure for access control and cameras that enhance safety.',
    icon: (
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
    ),
  },
  {
    title: 'Emergency Call & Life-Safety',
    description: 'Coordination of e-call and related life-safety technologies in senior living and healthcare settings.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v4M12 16h.01" />
      </>
    ),
  },
  {
    title: 'Construction Administration',
    description: 'Ongoing support during construction to maintain design intent and address field conditions.',
    icon: (
      <>
        <path d="M4 22V8l8-5 8 5v14" />
        <path d="M9 22v-6h6v6" />
      </>
    ),
  },
  {
    title: 'Carrier & ISP / Cellular Coordination',
    description: 'Support for carrier demarc, ISP coordination, and infrastructure for cellular boosting / DAS partners.',
    icon: (
      <>
        <path d="M5 9a8 8 0 0 1 14 0" />
        <path d="M8 11a4 4 0 0 1 8 0" />
        <circle cx="12" cy="13" r="1.5" />
        <path d="M12 14.5V21" />
      </>
    ),
  },
]

export const processSteps = [
  {
    number: '01',
    label: 'DISCOVERY & PLANNING',
    title: 'Understand your environment.',
    description:
      'Review program requirements, owner standards, and existing conditions to understand how technology supports operations, care models, and growth.',
  },
  {
    number: '02',
    label: 'DESIGN (SD, DD, CD)',
    title: 'Develop coordinated drawings.',
    description:
      'Develop and refine technology drawings and documentation that integrate with architectural and MEP sets, providing coordinated information for bidding and construction.',
  },
  {
    number: '03',
    label: 'CONSTRUCTION SUPPORT',
    title: 'Stay engaged through closeout.',
    description:
      'Remain engaged through construction administration to interpret the design, respond to field questions, and verify low-voltage systems are installed as intended.',
  },
]

export const markets = [
  {
    eyebrow: 'SENIOR LIVING & ASSISTED LIVING',
    title: 'Technology that supports residents, families & staff.',
    description: 'Design for independent living, assisted living, and memory care communities.',
    bullets: [
      'E-call / emergency call and pull-cords',
      'Wander management and elopement prevention',
      'Access control for perimeter & sensitive spaces',
      'Video surveillance for entries, parking, common areas',
      'Resident-grade Wi-Fi and staff network coverage',
    ],
    icon: (
      <>
        <path d="M3 11l9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M10 20v-6h4v6" />
      </>
    ),
  },
  {
    eyebrow: 'HEALTHCARE FACILITIES',
    title: 'Low-voltage design for clinical environments.',
    description: 'Coordination with owners, IT, and design teams for hospitals, clinics, imaging suites, and medical office buildings.',
    bullets: [
      'Structured cabling, MDF/IDF layouts & pathways',
      'Wi-Fi & network design aligned with clinical workflows',
      'Access control and surveillance for sensitive areas',
      'Integration with hospital standards & life-safety requirements',
      'Coordination with nurse call, RTLS, and other systems',
    ],
    icon: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
  },
]

export const stats = [
  { value: 'SD–CD', label: 'Full design lifecycle' },
  { value: '6+', label: 'System types designed' },
  { value: '5', label: 'Markets served' },
  { value: 'ATL', label: 'Based in Atlanta, GA' },
]
