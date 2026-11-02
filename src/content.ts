export type Lang = 'es' | 'en'

export const contact = {
  name: 'Lucas Eduardo Norton',
  email: 'nortonlucas01@gmail.com',
  phone: '+54 9 261 518-4477',
  phoneHref: 'tel:+5492615184477',
  github: 'github.com/lucasnorton01',
  githubHref: 'https://github.com/lucasnorton01',
  city: 'Guaymallén, Mendoza, Argentina',
  certsHref: 'https://drive.google.com/drive/folders/1tJgOSbEpc6CvrXVSE1v32xtR94ClOJw6?usp=drive_link',
}

type Lot = { value: string; label: string }
type Job = { role: string; org: string; period: string; points: string[] }
type Project = {
  name: string
  context: string
  period: string
  status: string
  role?: string
  points: string[]
  stack: string[]
  repo: string
}
type SkillGroup = { name: string; items: string[] }
type Study = { title: string; org: string; period: string; current?: boolean }
type Cert = { name: string; org: string; year: string; links?: { label: string; href: string }[] }

export type Content = {
  meta: { title: string; description: string }
  nav: { id: string; label: string }[]
  langSwitch: string
  hero: {
    role: [string, string]
    lede: string
    streets: [string, string, string, string]
    lots: Lot[]
    ctaEmail: string
    ctaCall: string
    ctaGithub: string
  }
  profile: { title: string; body: string[]; interest: string }
  experience: { title: string; jobs: Job[] }
  projects: {
    title: string
    honeypotDiagram: { subnet: string; flows: string[]; caption: string }
    list: Project[]
    repoLabel: string
  }
  skills: { title: string; groups: SkillGroup[] }
  education: {
    title: string
    studies: Study[]
    currentLabel: string
    certsTitle: string
    certsLink: string
    certs: Cert[]
    languagesTitle: string
    languages: { name: string; level: string }[]
  }
  contactSection: {
    title: string
    body: string
    copy: string
    copied: string
    copyFailed: string
    labels: { email: string; phone: string; github: string; city: string }
  }
  flowLabel: string
  footer: string
}

const es: Content = {
  meta: {
    title: 'Lucas Norton · Redes, seguridad y desarrollo',
    description:
      'Técnico Universitario en Programación. Soporte de redes e infraestructura en la Municipalidad de la Ciudad de Mendoza, laboratorio de honeypots y desarrollo full stack.',
  },
  nav: [
    { id: 'perfil', label: 'Perfil' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'formacion', label: 'Formación' },
    { id: 'contacto', label: 'Contacto' },
  ],
  langSwitch: 'Idioma',
  hero: {
    role: ['Técnico Universitario en Programación', 'Redes, seguridad y soporte técnico'],
    lede: 'Mantengo la red de datos, los servidores y la videovigilancia IP de la Municipalidad de la Ciudad de Mendoza. Lideré un laboratorio de honeypots y desarrollo aplicaciones full stack.',
    streets: ['Calle Infraestructura', 'Calle Seguridad', 'Calle Desarrollo', 'Calle Formación'],
    lots: [
      { value: '100', label: 'cámaras IP puestas en marcha y mantenidas' },
      { value: '20', label: 'switches Cisco, Aruba y UniFi configurados' },
      { value: '10', label: 'routers MikroTik configurados' },
      { value: '50+', label: 'PC del personal con soporte' },
      { value: 'WS 2019', label: 'Active Directory, DHCP, DNS y GPO' },
      { value: '5', label: 'subredes Docker aisladas en el Honeypot Lab' },
      { value: '4', label: 'workflows n8n de inteligencia de amenazas' },
      { value: 'UTN', label: 'título de Técnico en Programación' },
    ],
    ctaEmail: 'Enviar correo',
    ctaCall: 'Llamar',
    ctaGithub: 'Ver GitHub',
  },
  profile: {
    title: 'Perfil',
    body: [
      'Trabajo en soporte técnico y redes en la Municipalidad de la Ciudad de Mendoza: red de datos, Windows Server y videovigilancia IP.',
      'Me recibí de Técnico Universitario en Programación en la UTN con un laboratorio de honeypots cuyo equipo lideré, y curso la Licenciatura en Informática y Desarrollo de Software en la Universidad de Aconcagua.',
    ],
    interest: 'Me interesa el cruce entre infraestructura y seguridad.',
  },
  experience: {
    title: 'Experiencia',
    jobs: [
      {
        role: 'Soporte Técnico en Redes y Telecomunicaciones',
        org: 'Municipalidad de la Ciudad de Mendoza',
        period: '2025 – actualidad',
        points: [
          'Puse en marcha 100 cámaras IP de videovigilancia y me ocupo de su mantenimiento preventivo y correctivo.',
          'Configuré 10 routers MikroTik, 20 switches (Cisco, Aruba y UniFi) y los puntos de acceso de todas las dependencias.',
          'Doy soporte de hardware, software y conectividad a más de 50 PC del personal.',
          'Administro Windows Server 2019: Active Directory, DHCP, DNS y GPO.',
          'Implementé firewalls (MikroTik y Windows), ruteo, VLANs y VPNs para el acceso remoto.',
        ],
      },
      {
        role: 'Control y Manejo de Caja',
        org: 'Cinemacenter',
        period: '2024 – 2025',
        points: ['Apertura y cierre de caja. Atendí a más de 6000 personas en la temporada de invierno.'],
      },
    ],
  },
  projects: {
    title: 'Proyectos',
    honeypotDiagram: {
      subnet: '5 subredes Docker internas',
      flows: ['ingesta', 'extracción de IoCs', 'reporte diario', 'alertas Telegram'],
      caption: 'Arquitectura de despliegue del Honeypot Lab',
    },
    list: [
      {
        name: 'Honeypot Lab',
        context: 'Trabajo final de la Tecnicatura · UTN FRM',
        period: '2026',
        status: 'Validado',
        role: 'Líder de equipo (3 integrantes) y responsable de la arquitectura de despliegue.',
        points: [
          'Diseñé el despliegue de Cowrie (SSH/Telnet), n8n y PostgreSQL con Docker Compose para generar inteligencia de amenazas sin intervención manual.',
          'Separé la red en 5 subredes Docker internas, sin salida a Internet, y endurecí los contenedores: capacidades mínimas, límites de recursos, healthchecks y gestión de secretos.',
          'Armé 4 workflows en n8n (ingesta, extracción de IoCs, reporte diario y alertas por Telegram), servicios en Python y una API en Node.js con dashboard.',
          'Lo validamos en un entorno aislado con ataques simulados, evidencia con hashes SHA256 y una réplica independiente.',
        ],
        stack: ['Cowrie', 'n8n', 'PostgreSQL', 'Docker Compose', 'Python', 'Node.js'],
        repo: 'https://github.com/lucasnorton01/Honeypot_Final_Nocturne_Society',
      },
      {
        name: 'Food Store',
        context: 'Aplicación web full stack · proyecto universitario, equipo de 6',
        period: '2026',
        status: 'Entregado',
        points: [
          'Carrito y pedidos con pago por MercadoPago, seguimiento en tiempo real por WebSocket y panel de administración.',
        ],
        stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'JWT', 'WebSocket'],
        repo: 'https://github.com/lucasnorton01/Repositorio-TPI-NORTON-ESPETXE-SEVILLA',
      },
    ],
    repoLabel: 'Ver repositorio',
  },
  skills: {
    title: 'Habilidades',
    groups: [
      {
        name: 'Redes y seguridad',
        items: ['MikroTik', 'Cisco', 'Aruba', 'UniFi', 'VLANs', 'Ruteo', 'Modelo OSI', 'Firewalls', 'VPN', 'Cámaras IP', 'Honeypots (Cowrie)', 'Segmentación de red', 'Hardening', 'Threat intelligence (IoCs)'],
      },
      { name: 'Servidores y sistemas', items: ['Windows Server 2019', 'Active Directory', 'GPO', 'DNS', 'DHCP', 'Linux'] },
      {
        name: 'Desarrollo',
        items: ['React.js', 'Next.js', 'Node.js', 'Nest.js', 'Python', 'FastAPI', 'Java', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'APIs REST', 'Git', 'SQL', 'NoSQL'],
      },
      { name: 'Herramientas', items: ['Docker', 'Docker Compose', 'n8n', 'Kubernetes', 'Ansible', 'PowerShell', 'Bash'] },
      { name: 'Otros', items: ['Scrum', 'Excel'] },
    ],
  },
  education: {
    title: 'Formación',
    currentLabel: 'En curso',
    studies: [
      { title: 'Licenciatura en Informática y Desarrollo de Software', org: 'Universidad de Aconcagua', period: '2026 – en curso', current: true },
      { title: 'Técnico Universitario en Programación (título obtenido)', org: 'Universidad Tecnológica Nacional (UTN)', period: '2024 – 2026' },
      { title: 'Bachiller en Ciencias Naturales', org: 'Instituto Leonardo Murialdo', period: '2007 – 2018' },
    ],
    certsTitle: 'Certificaciones',
    certsLink: 'Ver certificados en Google Drive',
    certs: [
      { name: 'Networking Basics', org: 'Cisco Networking Academy', year: '2025', links: [{ label: 'Verificar en Credly', href: 'https://www.credly.com/earner/earned/badge/d8a8c5ec-769e-4412-b393-2959d216a896' }] },
      { name: 'Introductorio de seguridad en redes · Introducción a gestión de redes · Routing básico · IPv6 básico', org: 'LACNIC Campus', year: '2026' },
      { name: 'Claude 101 · Claude Code 101 · Model Context Protocol: Advanced Topics', org: 'Anthropic Academy', year: '2026', links: [{ label: 'Verificar Claude 101', href: 'https://academy.claude.com/verify/0a31f4cb677c3d10f22f95e9b9842f3a' }, { label: 'Verificar Claude Code 101', href: 'https://academy.claude.com/verify/b553f26fda4213644c13e2c26cac3432' }, { label: 'Verificar MCP Advanced Topics', href: 'https://academy.claude.com/verify/1321113eafc8e1be5b1cc922aaa38ec3' }] },
    ],
    languagesTitle: 'Idiomas',
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'B1+ intermedio, lectura técnica fluida' },
    ],
  },
  contactSection: {
    title: 'Contacto',
    body: 'Disponible para posiciones en redes, infraestructura, seguridad informática y desarrollo de software.',
    copy: 'Copiar correo',
    copied: 'Correo copiado',
    copyFailed: 'No se pudo copiar la dirección',
    labels: { email: 'Email', phone: 'Teléfono', github: 'GitHub', city: 'Ubicación' },
  },
  flowLabel: 'Recorrido de la página',
  footer: 'Hecho con React, TypeScript y Vite.',
}

const en: Content = {
  meta: {
    title: 'Lucas Norton · Networks, security and development',
    description:
      'University Programming Technician. Network and infrastructure support at the City of Mendoza municipality, a honeypot lab, and full-stack development.',
  },
  nav: [
    { id: 'perfil', label: 'Profile' },
    { id: 'experiencia', label: 'Experience' },
    { id: 'proyectos', label: 'Projects' },
    { id: 'habilidades', label: 'Skills' },
    { id: 'formacion', label: 'Education' },
    { id: 'contacto', label: 'Contact' },
  ],
  langSwitch: 'Language',
  hero: {
    role: ['University Programming Technician', 'Networks, security and IT support'],
    lede: 'I keep the data network, servers and IP video surveillance of the City of Mendoza municipality running. I led a honeypot lab and I build full-stack applications.',
    streets: ['Infrastructure St.', 'Security St.', 'Development St.', 'Education St.'],
    lots: [
      { value: '100', label: 'IP cameras deployed and maintained' },
      { value: '20', label: 'Cisco, Aruba and UniFi switches configured' },
      { value: '10', label: 'MikroTik routers configured' },
      { value: '50+', label: 'staff PCs supported' },
      { value: 'WS 2019', label: 'Active Directory, DHCP, DNS and GPO' },
      { value: '5', label: 'isolated Docker subnets in the Honeypot Lab' },
      { value: '4', label: 'n8n threat-intelligence workflows' },
      { value: 'UTN', label: 'Programming Technician degree' },
    ],
    ctaEmail: 'Send email',
    ctaCall: 'Call',
    ctaGithub: 'See GitHub',
  },
  profile: {
    title: 'Profile',
    body: [
      'I work in IT and network support at the City of Mendoza municipality: data network, Windows Server and IP video surveillance.',
      'I graduated as a University Programming Technician from UTN with a honeypot lab whose team I led, and I am studying for a Bachelor’s in Computer Science and Software Development at Universidad de Aconcagua.',
    ],
    interest: 'I am drawn to where infrastructure meets security.',
  },
  experience: {
    title: 'Experience',
    jobs: [
      {
        role: 'Network and Telecommunications Support',
        org: 'City of Mendoza Municipality',
        period: '2025 – present',
        points: [
          'Deployed 100 IP surveillance cameras and handle their preventive and corrective maintenance.',
          'Configured 10 MikroTik routers, 20 switches (Cisco, Aruba and UniFi) and the access points across every municipal office.',
          'Provide hardware, software and connectivity support for 50+ staff PCs.',
          'Administer Windows Server 2019: Active Directory, DHCP, DNS and GPO.',
          'Implemented firewalls (MikroTik and Windows), routing, VLANs and VPNs for remote access.',
        ],
      },
      {
        role: 'Cash Desk Operations',
        org: 'Cinemacenter',
        period: '2024 – 2025',
        points: ['Opened and closed the till. Served 6000+ customers during the winter season.'],
      },
    ],
  },
  projects: {
    title: 'Projects',
    honeypotDiagram: {
      subnet: '5 internal Docker subnets',
      flows: ['ingestion', 'IoC extraction', 'daily report', 'Telegram alerts'],
      caption: 'Honeypot Lab deployment architecture',
    },
    list: [
      {
        name: 'Honeypot Lab',
        context: 'Final degree project · UTN FRM',
        period: '2026',
        status: 'Validated',
        role: 'Team lead (3 members) and owner of the deployment architecture.',
        points: [
          'Designed the deployment of Cowrie (SSH/Telnet), n8n and PostgreSQL with Docker Compose to produce threat intelligence with no manual intervention.',
          'Split the network into 5 internal Docker subnets with no Internet egress and hardened the containers: minimal capabilities, resource limits, healthchecks and secrets management.',
          'Built 4 n8n workflows (ingestion, IoC extraction, daily report and Telegram alerts), Python services and a Node.js API with a dashboard.',
          'Validated it in an isolated environment with simulated attacks, SHA256-hashed evidence and an independent replica.',
        ],
        stack: ['Cowrie', 'n8n', 'PostgreSQL', 'Docker Compose', 'Python', 'Node.js'],
        repo: 'https://github.com/lucasnorton01/Honeypot_Final_Nocturne_Society',
      },
      {
        name: 'Food Store',
        context: 'Full-stack web app · university project, team of 6',
        period: '2026',
        status: 'Delivered',
        points: ['Cart and orders with MercadoPago payments, real-time tracking over WebSocket and an admin panel.'],
        stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'JWT', 'WebSocket'],
        repo: 'https://github.com/lucasnorton01/Repositorio-TPI-NORTON-ESPETXE-SEVILLA',
      },
    ],
    repoLabel: 'View repository',
  },
  skills: {
    title: 'Skills',
    groups: [
      {
        name: 'Networks and security',
        items: ['MikroTik', 'Cisco', 'Aruba', 'UniFi', 'VLANs', 'Routing', 'OSI model', 'Firewalls', 'VPN', 'IP cameras', 'Honeypots (Cowrie)', 'Network segmentation', 'Hardening', 'Threat intelligence (IoCs)'],
      },
      { name: 'Servers and systems', items: ['Windows Server 2019', 'Active Directory', 'GPO', 'DNS', 'DHCP', 'Linux'] },
      {
        name: 'Development',
        items: ['React.js', 'Next.js', 'Node.js', 'Nest.js', 'Python', 'FastAPI', 'Java', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'REST APIs', 'Git', 'SQL', 'NoSQL'],
      },
      { name: 'Tools', items: ['Docker', 'Docker Compose', 'n8n', 'Kubernetes', 'Ansible', 'PowerShell', 'Bash'] },
      { name: 'Other', items: ['Scrum', 'Excel'] },
    ],
  },
  education: {
    title: 'Education',
    currentLabel: 'In progress',
    studies: [
      { title: 'Bachelor’s in Computer Science and Software Development', org: 'Universidad de Aconcagua', period: '2026 – in progress', current: true },
      { title: 'University Programming Technician (degree earned)', org: 'Universidad Tecnológica Nacional (UTN)', period: '2024 – 2026' },
      { title: 'High school diploma, Natural Sciences', org: 'Instituto Leonardo Murialdo', period: '2007 – 2018' },
    ],
    certsTitle: 'Certifications',
    certsLink: 'View certificates on Google Drive',
    certs: [
      { name: 'Networking Basics', org: 'Cisco Networking Academy', year: '2025', links: [{ label: 'Verify on Credly', href: 'https://www.credly.com/earner/earned/badge/d8a8c5ec-769e-4412-b393-2959d216a896' }] },
      { name: 'Network security intro · Network management intro · Basic routing · Basic IPv6', org: 'LACNIC Campus', year: '2026' },
      { name: 'Claude 101 · Claude Code 101 · Model Context Protocol: Advanced Topics', org: 'Anthropic Academy', year: '2026', links: [{ label: 'Verify Claude 101', href: 'https://academy.claude.com/verify/0a31f4cb677c3d10f22f95e9b9842f3a' }, { label: 'Verify Claude Code 101', href: 'https://academy.claude.com/verify/b553f26fda4213644c13e2c26cac3432' }, { label: 'Verify MCP Advanced Topics', href: 'https://academy.claude.com/verify/1321113eafc8e1be5b1cc922aaa38ec3' }] },
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'B1+ intermediate, fluent technical reading' },
    ],
  },
  contactSection: {
    title: 'Contact',
    body: 'Available for positions in networking, infrastructure, information security and software development.',
    copy: 'Copy email',
    copied: 'Email copied',
    copyFailed: 'Could not copy the address',
    labels: { email: 'Email', phone: 'Phone', github: 'GitHub', city: 'Location' },
  },
  flowLabel: 'Page route',
  footer: 'Built with React, TypeScript and Vite.',
}

export const content: Record<Lang, Content> = { es, en }
