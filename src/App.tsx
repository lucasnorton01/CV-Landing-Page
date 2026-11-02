import { useCallback, useEffect, useRef, useState } from 'react'
import { contact, content, type Lang } from './content'
import { Icon } from './Icon'
import { HoneypotDiagram } from './HoneypotDiagram'

const STORAGE_KEY = 'ln-lang'

function initialLang(): Lang {
  const fromQuery = new URLSearchParams(window.location.search).get('lang')
  if (fromQuery === 'es' || fromQuery === 'en') return fromQuery
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'es' || stored === 'en') return stored
  } catch {
    // storage blocked: fall back to the browser language
  }
  return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
}

type GateState = 'ahead' | 'open' | 'passed'

export default function App() {
  const [lang, setLang] = useState<Lang>(initialLang)
  const [gates, setGates] = useState<Record<string, GateState>>({})
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle')
  const planRef = useRef<HTMLDivElement>(null)
  const t = content[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // not persisted; the switch still works for this visit
    }
    const url = new URL(window.location.href)
    url.searchParams.set('lang', lang)
    window.history.replaceState(null, '', url)
  }, [lang, t])

  // The acequia fills down to a point just below the middle of the viewport;
  // each section's gate opens as the water reaches it.
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const plan = planRef.current
      if (!plan) return
      const planTop = plan.getBoundingClientRect().top + window.scrollY
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      const reach = atBottom ? plan.offsetHeight : window.scrollY + window.innerHeight * 0.6 - planTop
      plan.style.setProperty('--flow', `${Math.max(0, Math.min(reach, plan.offsetHeight))}px`)

      const sections = Array.from(plan.querySelectorAll<HTMLElement>('[data-gate]'))
      const next: Record<string, GateState> = {}
      sections.forEach((section, i) => {
        const top = section.offsetTop
        const following = sections[i + 1]?.offsetTop ?? plan.offsetHeight
        next[section.id] = reach < top ? 'ahead' : reach < following ? 'open' : 'passed'
      })
      if (atBottom) next[sections[sections.length - 1].id] = 'open'
      setGates((prev) => (JSON.stringify(prev) === JSON.stringify(next) ? prev : next))
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      cancelAnimationFrame(frame)
    }
  }, [lang])

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopyState('copied')
    } catch {
      setCopyState('failed')
    }
    window.setTimeout(() => setCopyState('idle'), 2600)
  }, [])

  const activeId = Object.entries(gates).find(([, state]) => state === 'open')?.[0]
  const gate = (id: string) => ({ id, 'data-gate': gates[id] ?? 'ahead' })
  const [h0, h1, h2, h3, h4, h5, h6, h7] = t.hero.lots

  return (
    <>
      <a className="skip" href="#perfil">
        {t.nav[0].label}
      </a>

      <header className="sign">
        <a className="sign__brand" href="#top" aria-label={contact.name}>
          <span className="sign__mono">LN</span>
          <span className="sign__name">Lucas Norton</span>
        </a>
        <nav className="sign__nav" aria-label={t.flowLabel}>
          {t.nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} aria-current={activeId === item.id ? 'location' : undefined}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="lang" role="group" aria-label={t.langSwitch}>
          {(['es', 'en'] as const).map((code) => (
            <button key={code} type="button" aria-pressed={lang === code} onClick={() => setLang(code)} lang={code}>
              {code.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      <main id="top">
        <section className="damero" aria-labelledby="hero-name">
          <Lot lot={h0} area="a" />
          <Lot lot={h1} area="b" />
          <Lot lot={h2} area="c" />
          <span className="street street--h street--n"><span>{t.hero.streets[0]}</span></span>
          <Lot lot={h3} area="d" />
          <span className="street street--v street--w"><span>{t.hero.streets[1]}</span></span>
          <div className="plaza">
            <h1 id="hero-name">{contact.name}</h1>
            <p className="plaza__role">
              <span>{t.hero.role[0]}</span>
              <span>{t.hero.role[1]}</span>
            </p>
            <p className="plaza__lede">{t.hero.lede}</p>
            <div className="plaza__actions">
              <a className="btn btn--solid" href={`mailto:${contact.email}`}>
                <Icon name="mail" />
                {t.hero.ctaEmail}
              </a>
              <a className="btn" href={contact.phoneHref}>
                <Icon name="phone" />
                {t.hero.ctaCall}
              </a>
              <a className="btn" href={contact.githubHref} target="_blank" rel="noreferrer">
                <Icon name="github" />
                {t.hero.ctaGithub}
              </a>
            </div>
            <p className="plaza__city">
              <Icon name="pin" />
              {contact.city}
            </p>
          </div>
          <span className="street street--v street--e"><span>{t.hero.streets[2]}</span></span>
          <Lot lot={h4} area="e" />
          <span className="street street--h street--s"><span>{t.hero.streets[3]}</span></span>
          <Lot lot={h5} area="f" />
          <Lot lot={h6} area="g" />
          <Lot lot={h7} area="h" />
        </section>

        <div className="plan" ref={planRef}>
          <div className="acequia" aria-hidden="true">
            <div className="acequia__water" />
          </div>

          <section className="block" {...gate('perfil')} aria-labelledby="perfil-h">
            <Band id="perfil-h" title={t.profile.title} />
            <div className="block__body profile">
              <div className="profile__text">
                {t.profile.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <p className="profile__interest">{t.profile.interest}</p>
            </div>
          </section>

          <section className="block" {...gate('experiencia')} aria-labelledby="exp-h">
            <Band id="exp-h" title={t.experience.title} />
            <div className="block__body jobs">
              {t.experience.jobs.map((job) => (
                <article key={job.org} className="job">
                  <header className="job__head">
                    <h3>{job.role}</h3>
                    <p className="job__org">{job.org}</p>
                    <p className="job__period">{job.period}</p>
                  </header>
                  <ul className="marks">
                    {job.points.map((point) => (
                      <li key={point}>
                        <Icon name="gate" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="block" {...gate('proyectos')} aria-labelledby="proj-h">
            <Band id="proj-h" title={t.projects.title} />
            <div className="block__body projects">
              {t.projects.list.map((project, i) => (
                <article key={project.name} className={`project${i === 0 ? ' project--lead' : ''}`}>
                  <div className="project__text">
                    <header className="project__head">
                      <h3>{project.name}</h3>
                      <p className="project__context">
                        {project.context} · {project.period}
                      </p>
                      <p className="status">
                        <Icon name="gate" />
                        {project.status}
                      </p>
                    </header>
                    {project.role && <p className="project__role">{project.role}</p>}
                    <ul className="marks">
                      {project.points.map((point) => (
                        <li key={point}>
                          <Icon name="gate" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="stack" aria-label="Stack">
                      {project.stack.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                    <a className="link" href={project.repo} target="_blank" rel="noreferrer">
                      {t.projects.repoLabel}
                      <Icon name="arrow" />
                    </a>
                  </div>
                  {i === 0 && <HoneypotDiagram labels={t.projects.honeypotDiagram} />}
                </article>
              ))}
            </div>
          </section>

          <section className="block" {...gate('habilidades')} aria-labelledby="skills-h">
            <Band id="skills-h" title={t.skills.title} />
            <div className="block__body skills">
              {t.skills.groups.map((group) => (
                <div key={group.name} className="parcel">
                  <h3>{group.name}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="block" {...gate('formacion')} aria-labelledby="edu-h">
            <Band id="edu-h" title={t.education.title} />
            <div className="block__body edu">
              <ol className="legend">
                {t.education.studies.map((study) => (
                  <li key={study.title}>
                    <span className="legend__period">{study.period}</span>
                    <span className="legend__title">
                      {study.title}
                      {study.current && <span className="status status--live">{t.education.currentLabel}</span>}
                    </span>
                    <span className="legend__org">{study.org}</span>
                  </li>
                ))}
              </ol>
              <div className="edu__side">
                <h3>{t.education.certsTitle}</h3>
                <ul className="certs">
                  {t.education.certs.map((cert) => (
                    <li key={cert.org}>
                      <span className="certs__name">{cert.name}</span>
                      <span className="certs__org">
                        {cert.org} · {cert.year}
                      </span>
                      {cert.links && (
                        <span className="certs__links">
                          {cert.links.map((l) => (
                            <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                              {l.label}
                            </a>
                          ))}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
                <a className="link" href={contact.certsHref} target="_blank" rel="noreferrer">
                  {t.education.certsLink}
                  <Icon name="arrow" />
                </a>
                <h3>{t.education.languagesTitle}</h3>
                <ul className="certs">
                  {t.education.languages.map((l) => (
                    <li key={l.name}>
                      <span className="certs__name">{l.name}</span>
                      <span className="certs__org">{l.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="block block--basin" {...gate('contacto')} aria-labelledby="contact-h">
            <Band id="contact-h" title={t.contactSection.title} />
            <div className="block__body basin">
              <p className="basin__body">{t.contactSection.body}</p>
              <a className="basin__email" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              <div className="basin__row">
                <button type="button" className="btn btn--solid" onClick={copyEmail}>
                  <Icon name={copyState === 'copied' ? 'check' : 'copy'} />
                  {t.contactSection.copy}
                </button>
                <span className="basin__status" role="status">
                  {copyState === 'copied' && t.contactSection.copied}
                  {copyState === 'failed' && t.contactSection.copyFailed}
                </span>
              </div>
              <dl className="basin__list">
                <div>
                  <dt>{t.contactSection.labels.phone}</dt>
                  <dd>
                    <a href={contact.phoneHref}>{contact.phone}</a>
                  </dd>
                </div>
                <div>
                  <dt>{t.contactSection.labels.github}</dt>
                  <dd>
                    <a href={contact.githubHref} target="_blank" rel="noreferrer">
                      {contact.github}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>{t.contactSection.labels.city}</dt>
                  <dd>{contact.city}</dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
      </main>

      <footer className="foot">
        <span>© 2026 {contact.name}</span>
        <span>{t.footer}</span>
      </footer>
    </>
  )
}

function Lot({ lot, area }: { lot: { value: string; label: string }; area: string }) {
  return (
    <div className={`lot lot--${area}`}>
      <span className="lot__value">{lot.value}</span>
      <span className="lot__label">{lot.label}</span>
    </div>
  )
}

function Band({ id, title }: { id: string; title: string }) {
  return (
    <div className="band">
      <span className="band__gate" aria-hidden="true" />
      <h2 id={id}>{title}</h2>
    </div>
  )
}
