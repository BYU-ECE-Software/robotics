// @/components/general/states/ComingSoonPage.tsx
type ComingSoonPageProps = {
  pageName?: string;
};

const PARTICLE_POSITIONS = [
  [12, 8],
  [55, 15],
  [80, 10],
  [92, 30],
  [8, 45],
  [70, 5],
  [30, 20],
  [85, 55],
  [5, 70],
  [60, 80],
  [40, 90],
  [95, 75],
  [20, 85],
  [75, 92],
  [48, 12],
  [18, 55],
  [65, 40],
  [88, 18],
  [35, 72],
  [33, 50],
];

// Circuit node colors, BYU blue/navy palette with electric accents
const NODE_COLORS = ['#002E5D', '#0062B8', '#4A90D9', '#00A3E0', '#FFB300'];

/* -------------------------------------------------------------------------- */
/*  Assembly animation timeline                                               */
/*                                                                            */
/*  One loop = CYCLE_S seconds. All times below are percentages of the loop.  */
/*  The arm grabs a part from the bin, carries it to the build platform,      */
/*  the part snaps in with a spark, repeat x4. Then the robot powers on,      */
/*  waves, and the whole thing fades out and restarts.                        */
/* -------------------------------------------------------------------------- */

const CYCLE_S = 14;
const POWER_ON = 64;
const FADE_START = 90;
const FADE_END = 96;

type Frame = [number, string];
type Pose = [upperArmDeg: number, forearmDeg: number];

// Joint angles (degrees) from inverse kinematics for a 2-segment arm
// (shoulder at 70,205 / segment lengths 100 + 95). Tweak these to re-aim the arm.
const REST: Pose = [-80, 70];
const PICK: Pose = [-62.7, 138];
const STEPS: { place: Pose; y: number; at: number }[] = [
  { place: [-31.3, 64.4], y: 205, at: 10 }, // legs
  { place: [-40.8, 60.7], y: 172, at: 24 }, // body
  { place: [-45.4, 49.2], y: 140, at: 38 }, // head
  { place: [-42.8, 27.5], y: 112, at: 52 }, // antenna
];

const kf = (name: string, frames: Frame[]) =>
  `@keyframes ${name} { ${frames.map(([p, body]) => `${p}% { ${body} }`).join(' ')} }`;

const armFrames = (joint: 0 | 1): Frame[] => {
  const rot = (deg: number): string => `transform: rotate(${deg}deg)`;
  const frames: Frame[] = [[0, rot(REST[joint])]];
  STEPS.forEach(({ place, at }) => {
    frames.push(
      [at - 6, rot(PICK[joint])],
      [at - 5, rot(PICK[joint])],
      [at, rot(place[joint])],
      [at + 2, rot(place[joint])]
    );
  });
  frames.push([64, rot(REST[joint])], [100, rot(REST[joint])]);
  return frames;
};

const HIDDEN = 'opacity: 0; transform: translateY(-16px)';
const SHOWN = 'opacity: 1; transform: translateY(0)';

const ROBOT_CSS = [
  // Pulse + zap are kept from the original page
  kf('pulse-node', [
    [0, 'opacity: 0.15; transform: scale(0.6)'],
    [50, 'opacity: 1; transform: scale(1)'],
    [100, 'opacity: 0.15; transform: scale(0.6)'],
  ]),
  kf('zap', [
    [0, 'opacity: 1; transform: rotate(0deg) scale(1)'],
    [85, 'opacity: 1; transform: rotate(0deg) scale(1)'],
    [90, 'opacity: 0.3; transform: rotate(-15deg) scale(1.4)'],
    [95, 'opacity: 1; transform: rotate(8deg) scale(0.9)'],
    [100, 'opacity: 1; transform: rotate(0deg) scale(1)'],
  ]),

  kf('rb-arm1', armFrames(0)),
  kf('rb-arm2', armFrames(1)),

  // Part carried in the claw: visible from pick-up until it is placed
  kf('rb-cube', [
    [0, 'opacity: 0'],
    ...STEPS.flatMap(({ at }): Frame[] => [
      [at - 6, 'opacity: 0'],
      [at - 5.9, 'opacity: 1'],
      [at - 0.1, 'opacity: 1'],
      [at, 'opacity: 0'],
    ]),
    [100, 'opacity: 0'],
  ]),

  // Each robot part drops onto the platform when the arm delivers it
  ...STEPS.map(({ at }, i) =>
    kf(`rb-part-${i}`, [
      [0, HIDDEN],
      [at - 0.5, HIDDEN],
      [at + 1.5, SHOWN],
      [FADE_START, SHOWN],
      [FADE_END, 'opacity: 0; transform: translateY(0)'],
      [100, HIDDEN],
    ])
  ),

  // Weld spark at each placement
  ...STEPS.map(({ at }, i) =>
    kf(`rb-spark-${i}`, [
      [0, 'opacity: 0; transform: scale(0.3)'],
      [at - 0.2, 'opacity: 0; transform: scale(0.3)'],
      [at, 'opacity: 1; transform: scale(1)'],
      [at + 3, 'opacity: 0; transform: scale(1.8)'],
      [100, 'opacity: 0; transform: scale(1.8)'],
    ])
  ),

  // Power-on: eyes light up and blink, bulb glows, robot waves
  kf('rb-eye', [
    [0, 'fill: #002E5D; transform: scaleY(1)'],
    [POWER_ON - 1, 'fill: #002E5D; transform: scaleY(1)'],
    [POWER_ON, 'fill: #FFB300; transform: scaleY(1)'],
    [74, 'fill: #FFB300; transform: scaleY(1)'],
    [75, 'fill: #FFB300; transform: scaleY(0.1)'],
    [76.5, 'fill: #FFB300; transform: scaleY(1)'],
    [82, 'fill: #FFB300; transform: scaleY(1)'],
    [83, 'fill: #FFB300; transform: scaleY(0.1)'],
    [84.5, 'fill: #FFB300; transform: scaleY(1)'],
    [100, 'fill: #FFB300; transform: scaleY(1)'],
  ]),
  kf('rb-bulb', [
    [0, 'fill: #4A90D9'],
    [POWER_ON - 1, 'fill: #4A90D9'],
    [POWER_ON, 'fill: #FFB300'],
    [100, 'fill: #FFB300'],
  ]),
  kf('rb-halo', [
    [0, 'opacity: 0; transform: scale(0.6)'],
    [POWER_ON, 'opacity: 0; transform: scale(0.6)'],
    [70, 'opacity: 0.6; transform: scale(1.4)'],
    [76, 'opacity: 0.15; transform: scale(1)'],
    [82, 'opacity: 0.6; transform: scale(1.4)'],
    [88, 'opacity: 0; transform: scale(1)'],
    [100, 'opacity: 0; transform: scale(1)'],
  ]),
  kf('rb-wave', [
    [0, 'transform: rotate(0deg)'],
    [66, 'transform: rotate(0deg)'],
    [68, 'transform: rotate(-120deg)'],
    [72, 'transform: rotate(-150deg)'],
    [76, 'transform: rotate(-110deg)'],
    [80, 'transform: rotate(-150deg)'],
    [84, 'transform: rotate(-120deg)'],
    [88, 'transform: rotate(0deg)'],
    [100, 'transform: rotate(0deg)'],
  ]),

  `
  .rb-anim {
    animation-duration: ${CYCLE_S}s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
  .rb-arm1 { animation-name: rb-arm1; }
  .rb-arm2 { animation-name: rb-arm2; }
  .rb-cube { animation-name: rb-cube; animation-timing-function: linear; }
  .rb-eye  { animation-name: rb-eye; transform-box: fill-box; transform-origin: center; }
  .rb-bulb { animation-name: rb-bulb; }
  .rb-halo { animation-name: rb-halo; transform-box: fill-box; transform-origin: center; }
  .rb-wave { animation-name: rb-wave; }
  .anim-pulse { animation: pulse-node 3s ease-in-out infinite; }
  .anim-zap { animation: zap 3s ease-in-out infinite; }

  /* Reduced motion: show the finished, powered-on robot with the arm parked */
  @media (prefers-reduced-motion: reduce) {
    .rb-anim, .anim-pulse, .anim-zap { animation: none !important; }
    .rb-arm1 { transform: rotate(${REST[0]}deg); }
    .rb-arm2 { transform: rotate(${REST[1]}deg); }
    .rb-eye, .rb-bulb { fill: #FFB300; }
  }
  `,
].join('\n');

const BLUE_STROKE = { stroke: '#002E5D', strokeWidth: 2 } as const;
const THIN_STROKE = { stroke: '#002E5D', strokeWidth: 1.5 } as const;
const ORIGIN_VIEWBOX = { transformBox: 'view-box' } as const;

function AssemblyScene() {
  return (
    <svg className="mb-4 w-full max-w-md" viewBox="0 0 360 250" aria-hidden="true">
      {/* Floor + build platform */}
      <line
        x1="10"
        y1="228"
        x2="350"
        y2="228"
        stroke="#002E5D"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.35"
      />
      <rect x="204" y="224" width="92" height="8" rx="2" fill="#002E5D" />
      <circle cx="212" cy="228" r="1.5" fill="#FFB300" />
      <circle cx="288" cy="228" r="1.5" fill="#FFB300" />

      {/* Parts bin with spare bits poking out */}
      <rect x="116" y="204" width="12" height="10" rx="2" fill="#4A90D9" {...THIN_STROKE} />
      <circle cx="140" cy="207" r="6" fill="#0062B8" {...THIN_STROKE} />
      <circle cx="140" cy="207" r="1.8" fill="#FFB300" />
      <rect x="150" y="205" width="10" height="9" rx="2" fill="#00A3E0" {...THIN_STROKE} />
      <rect x="106" y="212" width="60" height="16" rx="3" fill="#002E5D" />
      <rect x="106" y="218" width="60" height="3" fill="#FFB300" />

      {/* The robot being built (bottom-up) */}
      {/* 1. Legs */}
      <g className="rb-anim" style={{ animationName: 'rb-part-0' }}>
        <rect x="232" y="200" width="12" height="20" rx="2" fill="#002E5D" />
        <rect x="256" y="200" width="12" height="20" rx="2" fill="#002E5D" />
        <rect x="227" y="218" width="22" height="6" rx="3" fill="#0062B8" {...THIN_STROKE} />
        <rect x="251" y="218" width="22" height="6" rx="3" fill="#0062B8" {...THIN_STROKE} />
      </g>

      {/* 2. Body (+ one arm that waves at the end) */}
      <g className="rb-anim" style={{ animationName: 'rb-part-1' }}>
        <rect x="226" y="160" width="48" height="44" rx="7" fill="#0062B8" {...BLUE_STROKE} />
        <rect x="236" y="170" width="28" height="16" rx="3" fill="#002E5D" />
        <circle cx="243" cy="178" r="2.5" fill="#00A3E0" />
        <circle cx="250" cy="178" r="2.5" fill="#FFB300" />
        <circle cx="257" cy="178" r="2.5" fill="#4A90D9" />
        <rect x="236" y="192" width="28" height="3" rx="1.5" fill="#4A90D9" />
        <rect x="214" y="166" width="8" height="24" rx="4" fill="#4A90D9" {...THIN_STROKE} />
        <g
          className="rb-anim rb-wave"
          style={{ transformOrigin: '278px 168px', ...ORIGIN_VIEWBOX }}
        >
          <rect x="274" y="164" width="8" height="24" rx="4" fill="#4A90D9" {...THIN_STROKE} />
          <circle cx="278" cy="188" r="4" fill="#FFB300" {...THIN_STROKE} />
        </g>
      </g>

      {/* 3. Head */}
      <g className="rb-anim" style={{ animationName: 'rb-part-2' }}>
        <rect x="244" y="153" width="12" height="8" fill="#002E5D" />
        <rect x="232" y="124" width="36" height="30" rx="8" fill="#4A90D9" {...BLUE_STROKE} />
        <circle className="rb-anim rb-eye" cx="242" cy="137" r="4.2" fill="#002E5D" />
        <circle className="rb-anim rb-eye" cx="258" cy="137" r="4.2" fill="#002E5D" />
        <path
          d="M243 146 H257"
          stroke="#002E5D"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* 4. Antenna */}
      <g className="rb-anim" style={{ animationName: 'rb-part-3' }}>
        <line
          x1="250"
          y1="124"
          x2="250"
          y2="108"
          stroke="#002E5D"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle className="rb-anim rb-halo" cx="250" cy="104" r="9" fill="#FFB300" opacity="0" />
        <circle className="rb-anim rb-bulb" cx="250" cy="104" r="4.5" fill="#4A90D9" {...THIN_STROKE} />
      </g>

      {/* Weld sparks, one per placement */}
      {STEPS.map(({ y }, i) => (
        <g key={i} transform={`translate(244 ${y})`}>
          <g
            className="rb-anim"
            opacity="0"
            style={{
              animationName: `rb-spark-${i}`,
              animationTimingFunction: 'ease-out',
              transformBox: 'fill-box',
              transformOrigin: 'center',
            }}
          >
            <path
              d="M-11 0H11M0 -11V11M-8 -8L8 8M-8 8L8 -8"
              stroke="#FFB300"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        </g>
      ))}

      {/* Robot arm: base, upper arm, forearm + claw, shoulder cap */}
      <rect x="50" y="206" width="40" height="22" rx="4" fill="#002E5D" />
      <rect x="56" y="212" width="28" height="3" rx="1.5" fill="#00A3E0" />

      <g className="rb-anim rb-arm1" style={{ transformOrigin: '70px 205px', ...ORIGIN_VIEWBOX }}>
        <rect x="64" y="198" width="112" height="14" rx="7" fill="#0062B8" {...BLUE_STROKE} />
        <g className="rb-anim rb-arm2" style={{ transformOrigin: '170px 205px', ...ORIGIN_VIEWBOX }}>
          <rect x="164" y="199" width="103" height="12" rx="6" fill="#4A90D9" {...BLUE_STROKE} />
          <circle cx="170" cy="205" r="7" fill="#00A3E0" {...BLUE_STROKE} />
          {/* Claw */}
          <rect x="258" y="194" width="8" height="22" rx="3" fill="#002E5D" />
          <path
            d="M262 196 H276 M262 214 H276"
            stroke="#002E5D"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Part being carried */}
          <rect
            className="rb-anim rb-cube"
            x="266"
            y="200"
            width="10"
            height="10"
            rx="2"
            fill="#FFB300"
            opacity="0"
            {...THIN_STROKE}
          />
        </g>
      </g>
      <circle cx="70" cy="205" r="9" fill="#00A3E0" {...BLUE_STROKE} />
    </svg>
  );
}

export default function ComingSoonPage({ pageName }: ComingSoonPageProps) {
  // No page name supplied → fall back to "This" in the headline's own navy (so
  // it blends into "This page is"); a real page name keeps the royal highlight.
  const isDefault = pageName === undefined;
  const label = isDefault ? 'This' : `'${pageName}'`;

  return (
    <div className="relative flex min-h-[calc(100vh-125px)] flex-col items-center justify-center overflow-hidden bg-linear-to-br from-slate-100 via-blue-50 to-slate-200 px-4 py-10">
      <style>{ROBOT_CSS}</style>

      {/* Floating circuit nodes */}
      <div className="pointer-events-none absolute inset-0">
        {PARTICLE_POSITIONS.map(([left, top], i) => {
          const size = 5 + (i % 4) * 3;
          const duration = `${2.5 + (i % 5) * 0.7}s`;
          const delay = `${(i * 0.35) % 3}s`;
          const color = NODE_COLORS[i % NODE_COLORS.length];
          const isSquare = i % 3 === 0;
          return (
            <span
              key={i}
              className="anim-pulse absolute"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
                background: color,
                borderRadius: isSquare ? '1px' : '50%',
                animationDuration: duration,
                animationDelay: delay,
              }}
            />
          );
        })}
      </div>

      {/* Robot assembly line */}
      <AssemblyScene />

      {/* Badge */}
      <span className="bg-byu-navy mb-5 inline-flex items-center gap-2 rounded-full border border-blue-700 px-4 py-1.5 text-xs tracking-widest text-blue-200 uppercase shadow-sm">
        <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
        Under construction
      </span>

      {/* Headline */}
      <h1 className="text-byu-navy text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        <span className={isDefault ? 'text-byu-navy' : 'text-byu-royal'}>{label}</span> page is
        <br />
        <span className="text-slate-500">coming soon</span>{' '}
        <span className="anim-zap inline-block">⚡</span>
      </h1>

      {/* Divider */}
      <div className="my-5 flex items-center gap-3 text-blue-300 opacity-50">
        <div className="h-px w-14 bg-blue-400" />
        ◆
        <div className="h-px w-14 bg-blue-400" />
      </div>

      {/* Description */}
      <p className="text-byu-navy max-w-md text-center text-base italic sm:text-lg">
        Our robots are still assembling this section, one part at a time. Check back soon for more
        features. 🔧🤖
      </p>

      <p className="mt-6 text-center text-xs text-blue-600/70">
        (In the meantime, feel free to explore the other pages that are already live.)
      </p>
    </div>
  );
}