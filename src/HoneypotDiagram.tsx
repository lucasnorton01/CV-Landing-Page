type Labels = { subnet: string; flows: string[]; caption: string }

export function HoneypotDiagram({ labels }: { labels: Labels }) {
  return (
    <figure className="diagram">
      <svg viewBox="0 0 560 380" role="img" aria-labelledby="hp-cap">
        <g transform="translate(48 0)">
        <rect className="diagram__zone" x="64" y="20" width="440" height="340" rx="4" />
        <text className="diagram__zone-label" x="80" y="42">
          {labels.subnet}
        </text>

        <g className="diagram__node">
          <rect x="96" y="64" width="136" height="56" />
          <text x="112" y="90">Cowrie</text>
          <text className="diagram__small" x="112" y="108">honeypot</text>
        </g>

        <g className="diagram__node diagram__node--hub">
          <rect x="296" y="64" width="192" height="168" />
          <text x="312" y="90">n8n</text>
          {labels.flows.map((flow, i) => (
            <text key={flow} className="diagram__small" x="312" y={118 + i * 26}>
              {String(i + 1).padStart(2, '0')} {flow}
            </text>
          ))}
        </g>

        <g className="diagram__node">
          <rect x="96" y="176" width="136" height="56" />
          <text x="112" y="202">PostgreSQL</text>
          <text className="diagram__small" x="112" y="220">IoCs</text>
        </g>

        <g className="diagram__node">
          <rect x="96" y="288" width="136" height="56" />
          <text x="112" y="314">Node.js API</text>
          <text className="diagram__small" x="112" y="332">dashboard</text>
        </g>

        <g className="diagram__node">
          <rect x="296" y="288" width="192" height="56" />
          <text x="312" y="314">Python</text>
          <text className="diagram__small" x="312" y="332">services</text>
        </g>

        <path className="diagram__flow" d="M232 92H296" />
        <path className="diagram__flow" d="M296 204H232" />
        <path className="diagram__flow" d="M164 232V288" />
        <path className="diagram__flow" d="M392 288V232" />
        </g>
        <path className="diagram__flow" d="M4 92H144" />
        <text className="diagram__small" x="4" y="80">
          SSH/Telnet
        </text>
      </svg>
      <figcaption id="hp-cap">{labels.caption}</figcaption>
    </figure>
  )
}
