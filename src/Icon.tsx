const paths: Record<string, React.ReactNode> = {
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </>
  ),
  phone: <path d="M6.5 3.5h3l1.5 4-2 1.3a11 11 0 0 0 6.2 6.2l1.3-2 4 1.5v3a2 2 0 0 1-2 2A16.5 16.5 0 0 1 4.5 5.5a2 2 0 0 1 2-2Z" />,
  github: (
    <path d="M9 19c-4.5 1.4-4.5-2.2-6.3-2.7M15 21.5v-3.4a3 3 0 0 0-.8-2.3c2.8-.3 5.6-1.4 5.6-6.1a4.8 4.8 0 0 0-1.3-3.3 4.4 4.4 0 0 0-.1-3.3s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.6 2.8 5.6 3.1 5.6 3.1a4.4 4.4 0 0 0-.1 3.3 4.8 4.8 0 0 0-1.3 3.3c0 4.7 2.8 5.8 5.6 6.1a3 3 0 0 0-.8 2.3v3.4" />
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  copy: (
    <>
      <rect x="8.5" y="8.5" width="11" height="11" rx="1.5" />
      <path d="M15.5 8.5V5.5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  // sluice gate struck through: the plan's "done" mark
  gate: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="1" />
      <path d="m7.5 7.5 9 9m0-9-9 9" />
    </>
  ),
}

export function Icon({ name }: { name: keyof typeof paths }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}
