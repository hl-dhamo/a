export const PRODUCTS = [
  {
    id: 'hex-bolts',
    type: 'bolt',
    grades: ['201', '202', '304', '316'],
    title: 'Hex Bolts',
    description: 'Full & half-thread hex bolts, M4–M36, DIN 933/931. High tensile, mirror or matte finish.',
    icon: (
      <svg className="icon" viewBox="0 0 80 80">
        <path d="M22 10 L58 10 L64 18 L64 26 L16 26 L16 18 Z" fill="#C8D2DE" stroke="#2c3744" strokeWidth="2" />
        <rect x="32" y="26" width="16" height="42" rx="3" fill="#9aa7b6" stroke="#2c3744" strokeWidth="2" />
        <g stroke="#39434f" strokeWidth="2">
          <path d="M32 34 L48 37" /><path d="M32 42 L48 45" /><path d="M32 50 L48 53" /><path d="M32 58 L48 61" />
        </g>
      </svg>
    ),
  },
  {
    id: 'hex-nuts',
    type: 'nut',
    grades: ['201', '202', '304', '316'],
    title: 'Hex Nuts',
    description: 'Standard, nyloc & dome nuts, M4–M36, DIN 934. Precise threading for zero slippage.',
    icon: (
      <svg className="icon" viewBox="0 0 80 80">
        <polygon points="40,8 66,23 66,55 40,70 14,55 14,23" fill="#C8D2DE" stroke="#2c3744" strokeWidth="2.5" />
        <circle cx="40" cy="39" r="13" fill="#1A365D" stroke="#2c3744" strokeWidth="2.5" />
        <circle cx="40" cy="39" r="7" fill="none" stroke="#9aa7b6" strokeWidth="2" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    id: 'flat-washers',
    type: 'washer',
    grades: ['202', '304', '316'],
    title: 'Flat Washers',
    description: 'Plain & heavy-duty washers, DIN 125. Uniform thickness for perfect load distribution.',
    icon: (
      <svg className="icon" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="28" fill="#C8D2DE" stroke="#2c3744" strokeWidth="2.5" />
        <circle cx="40" cy="40" r="12" fill="#1A365D" stroke="#2c3744" strokeWidth="2.5" />
        <path d="M18 30 A28 28 0 0 1 40 12" stroke="#fff" strokeWidth="4" fill="none" opacity=".5" />
      </svg>
    ),
  },
  {
    id: 'spring-washers',
    type: 'spring',
    grades: ['202', '304'],
    title: 'Spring Washers',
    description: 'Single-coil spring lock washers, DIN 127B. Constant tension that defeats vibration.',
    icon: (
      <svg className="icon" viewBox="0 0 80 80">
        <path d="M14 44 A26 26 0 1 1 40 66" fill="none" stroke="#C8D2DE" strokeWidth="11" />
        <path d="M14 44 A26 26 0 1 1 40 66" fill="none" stroke="#2c3744" strokeWidth="11" strokeDasharray="2 130" />
        <path d="M36 60 L48 72" stroke="#FF6B3D" strokeWidth="5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'threaded-rods',
    type: 'rod',
    grades: ['201', '304', '316'],
    title: 'Threaded Rods',
    description: 'Fully threaded studs & rods, M6–M42, lengths up to 3 m, DIN 975/976.',
    icon: (
      <svg className="icon" viewBox="0 0 80 80">
        <rect x="10" y="32" width="60" height="16" rx="8" fill="#C8D2DE" stroke="#2c3744" strokeWidth="2.5" />
        <g stroke="#39434f" strokeWidth="2">
          <path d="M18 33 L18 47" /><path d="M26 33 L26 47" /><path d="M34 33 L34 47" />
          <path d="M42 33 L42 47" /><path d="M50 33 L50 47" /><path d="M58 33 L58 47" />
        </g>
      </svg>
    ),
  },
  {
    id: 'allen-csk-bolts',
    type: 'bolt',
    grades: ['304', '316'],
    title: 'Allen / CSK Bolts',
    description: 'Socket head & countersunk bolts for flush, high-strength marine-grade fastening.',
    icon: (
      <svg className="icon" viewBox="0 0 80 80">
        <circle cx="40" cy="18" r="12" fill="#C8D2DE" stroke="#2c3744" strokeWidth="2.5" />
        <polygon points="40,11 46,21 34,21" fill="#1A365D" />
        <rect x="33" y="29" width="14" height="40" rx="3" fill="#9aa7b6" stroke="#2c3744" strokeWidth="2" />
        <g stroke="#39434f" strokeWidth="2">
          <path d="M33 38 L47 41" /><path d="M33 48 L47 51" /><path d="M33 58 L47 61" />
        </g>
      </svg>
    ),
  },
];
