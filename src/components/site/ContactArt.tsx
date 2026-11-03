/**
 * Contact illustration (original): an open envelope, a paper plane flying out on a looping
 * dashed trail, a speech bubble and a mug of coffee, in the site's colourful pen-sketch style.
 */
export function ContactArt() {
  const ink = "#1C1B19";
  const s = { stroke: ink, strokeWidth: 2.2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg className="contact-art" viewBox="0 0 420 270" role="img" aria-label="Illustration: a paper plane flying out of an open envelope">
      {/* soft background blob */}
      <path d="M52 168c-14-60 34-118 108-124 52-4 74 22 124 14 58-9 104 26 92 84-10 52-58 82-132 86-62 3-92 14-134 2-34-10-52-30-58-62Z" fill="#F6E1D3" stroke={ink} strokeWidth="1.2" strokeDasharray="3 5" />

      {/* dashed flight trail */}
      <path className="contact-art__trail" d="M150 176c30-34 4-70-24-58-26 11-10 46 26 44 44-2 82-58 132-86" fill="none" stroke={ink} strokeWidth="1.6" strokeDasharray="5 6" strokeLinecap="round" />

      {/* envelope */}
      <g>
        <path d="M70 160h150v84H70z" fill="#DCE1F7" {...s} />
        <path d="M80 160V122h130v38" fill="#FBF9F4" {...s} />
        <path d="M94 136h86M94 148h62" fill="none" {...s} strokeWidth={1.6} />
        <path d="M70 160l75 50 75-50" fill="none" {...s} />
        <path d="M70 244l58-42M220 244l-58-42" fill="none" {...s} strokeWidth={1.6} />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <path key={i} d={`M${78 + i * 18} 236l10-8`} stroke={ink} strokeWidth="1" opacity=".35" />
        ))}
      </g>

      {/* paper plane */}
      <g className="contact-art__plane">
        <path d="M284 66l70-34-24 74-16-22z" fill="#F6E3B8" {...s} />
        <path d="M284 66l30 18 40-52" fill="none" {...s} />
        <path d="M314 84l0 22 16-22" fill="#E8C66E" {...s} />
      </g>

      {/* speech bubble */}
      <g transform="translate(250 150) rotate(4)">
        <path d="M0 8a8 8 0 0 1 8-8h70a8 8 0 0 1 8 8v26a8 8 0 0 1-8 8H30l-12 12 2-12H8a8 8 0 0 1-8-8z" fill="#FBF9F4" {...s} strokeWidth={1.8} />
        <text x="43" y="27" textAnchor="middle" fontSize="15" fontWeight="700" fill="#2E7346" style={{ fontFamily: "var(--body)" }}>
          Say hi!
        </text>
      </g>

      {/* mug */}
      <g>
        <path d="M318 214h44l-5 42h-34z" fill="#D6EEDC" {...s} />
        <path d="M362 222c14 0 14 22 -3 22" fill="none" {...s} />
        <path className="contact-art__steam" d="M330 204c-6-8 6-12 0-20M346 204c-6-8 6-12 0-20" fill="none" stroke={ink} strokeWidth="1.6" strokeLinecap="round" />
      </g>

      {/* sparkles */}
      {[
        [64, 92, 1, "#A8481A"],
        [236, 40, 0.8, "#2C5BA8"],
        [392, 128, 0.7, "#B5458A"],
        [236, 112, 0.6, "#2E7346"],
      ].map(([x, y, k, c], i) => (
        <path key={i} className="contact-art__spark" style={{ animationDelay: `${-i * 0.5}s` }} transform={`translate(${x} ${y}) scale(${k})`} d="M0 -10l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill={c as string} stroke={ink} strokeWidth=".8" />
      ))}

      {/* ground lines */}
      <path d="M60 256h300M96 263h220" stroke={ink} strokeWidth="1" opacity=".4" />
    </svg>
  );
}
