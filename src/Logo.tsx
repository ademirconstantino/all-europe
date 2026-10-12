type LogoProps = {
  className?: string;
  onClick?: () => void;
};

const archesX = Array.from({ length: 9 }, (_, i) => 263 + i * 39.3);

const arch = (x: number, y: number, h: number) =>
  `M ${x} ${y + h} V ${y + 13} A 13 13 0 0 1 ${x + 26} ${y + 13} V ${y + h} Z`;

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="20 25 820 550"
      aria-hidden="true"
      focusable="false"
    >
      {/* sol */}
      <path d="M 155 548 A 275 275 0 0 1 705 548 Z" fill="var(--logo-sun, #f4c352)" />

      <g fill="var(--logo-ink, #213a5f)">
        {/* Torre Eiffel */}
        <rect x="130" y="30" width="8" height="48" rx="4" />
        <path d="M 134 75 L 152 197 L 116 197 Z" />
        <rect x="97" y="196" width="74" height="16" rx="6" />
        <path d="M 114 212 L 155 212 L 164 321 L 104 321 Z" />
        <rect x="73" y="321" width="121" height="19" rx="6" />
        <path d="M 106 340 L 162 340 Q 185 450 240 548 L 193 548 Q 165 470 134 467 Q 103 470 75 548 L 27 548 Q 85 440 106 340 Z" />

        {/* Coliseu */}
        <path d="M 239 397 Q 420 357 593 377 L 593 410 L 631 410 L 631 548 L 239 548 Z" />

        {/* Big Ben */}
        <rect x="728" y="60" width="7" height="46" rx="3.5" />
        <path d="M 676 220 L 731 103 L 787 220 Z" />
        <rect x="687" y="218" width="88" height="44" />
        <rect x="672" y="258" width="119" height="84" rx="8" />
        <rect x="686" y="340" width="91" height="210" />

        {/* chão */}
        <rect x="24" y="548" width="812" height="20" rx="10" />
      </g>

      <g fill="var(--logo-cut, #fff4e0)">
        <rect x="239" y="469" width="392" height="7" />
        {archesX.map((x) => (
          <path key={`t${x}`} d={arch(x, 419, 44)} />
        ))}
        {archesX.map((x) => (
          <path key={`b${x}`} d={arch(x, 481, 57)} />
        ))}
        <circle cx="731" cy="300" r="29" />
        <rect x="700" y="374" width="15" height="40" rx="5" />
        <rect x="747" y="374" width="15" height="40" rx="5" />
        <rect x="700" y="447" width="15" height="40" rx="5" />
        <rect x="747" y="447" width="15" height="40" rx="5" />
      </g>

      <path
        d="M 731 283 V 302 L 744 310"
        fill="none"
        stroke="var(--logo-ink, #213a5f)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Logo({ className = "", onClick }: LogoProps) {
  return (
    <a
      href="#home"
      className={`ae-logo ${className}`}
      onClick={onClick}
      aria-label="ALL EUROPE Language School"
    >
      <LogoMark className="ae-logo-mark" />
      <span className="ae-logo-text">
        <span className="ae-logo-name">ALL EUROPE</span>
        <small>LANGUAGE SCHOOL</small>
      </span>
    </a>
  );
}

export default Logo;
