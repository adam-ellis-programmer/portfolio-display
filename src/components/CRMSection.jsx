// CRMSection.jsx — showcase for the Firebase CRM project
// Colours follow the isDarkMode prop (same pattern as Hero.jsx)

const REPO_URL =
  'https://github.com/adam-ellis-programmer/firebase-crm-updated'

const FEATURES = [
  {
    icon: 'fa-user-shield',
    title: 'Role-based permissions',
    text: 'CEO, manager and agent roles enforced with Firebase Auth custom claims. Admins can change access levels and reporting lines live, and the claims stay synced to Firestore.',
  },
  {
    icon: 'fa-building',
    title: 'Multi-tenant organisations',
    text: 'Each paid sign-up creates its own organisation with scoped IDs, so agents, managers and data are kept separate per company.',
  },
  {
    icon: 'fa-envelope-open-text',
    title: 'Templated email',
    text: 'Branded emails rendered server-side with Handlebars and sent through Nodemailer, including automated welcome emails for new agents.',
  },
  {
    icon: 'fa-eye',
    title: 'Email open tracking',
    text: 'A tracking-pixel HTTP function records every open with atomic counters in Firestore, so agents can see when a customer read their message.',
  },
  {
    icon: 'fa-credit-card',
    title: 'Payments',
    text: 'PayPal checkout handled server-side, with OAuth tokens generated in Cloud Functions so credentials never reach the browser.',
  },
  {
    icon: 'fa-chart-line',
    title: 'Dashboards & maps',
    text: 'Manager dashboards built with Recharts, plus Leaflet maps for customer locations.',
  },
]

const STACK = [
  'React',
  'Firebase Cloud Functions v2',
  'Firebase Admin',
  'Firestore',
  'Firebase Auth',
  'MongoDB',
  'Mongoose',
  'Nodemailer',
  'Handlebars',
  'Google APIs',
  'PayPal API',
  'Tailwind CSS',
]

// The role hierarchy shown in the visual panel
const ROLES = [
  { role: 'CEO', level: 'Full access', width: 'w-full' },
  { role: 'Manager', level: 'Team + reports', width: 'w-[82%]' },
  { role: 'Agent', level: 'Own customers', width: 'w-[64%]' },
]

const getTheme = (isDarkMode) =>
  isDarkMode
    ? {
        heading: 'text-white',
        body: 'text-slate-300',
        muted: 'text-slate-400',
        eyebrow: 'border-white/15 bg-white/5 text-sky-200',
        card: 'border-white/10 bg-white/[0.04] hover:border-sky-300/30 hover:bg-white/[0.07]',
        iconWrap: 'bg-sky-300/15 text-sky-300',
        panel: 'border-white/10 bg-slate-900/80',
        panelRow: 'bg-white/5',
        chip: 'border-white/10 bg-white/5 text-slate-200',
        code: 'text-sky-300',
        secondaryBtn: 'border-white/20 text-white hover:bg-white/10',
      }
    : {
        heading: 'text-slate-900',
        body: 'text-slate-600',
        muted: 'text-slate-500',
        eyebrow: 'border-slate-200 bg-white/70 text-[#6D84B0]',
        card: 'border-slate-200 bg-white hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100',
        iconWrap: 'bg-[#bae6fd] text-[#3f5683]',
        panel: 'border-slate-200 bg-white shadow-xl shadow-slate-200/60',
        panelRow: 'bg-slate-50',
        chip: 'border-slate-200 bg-slate-50 text-slate-700',
        code: 'text-[#6D84B0]',
        secondaryBtn: 'border-slate-300 text-slate-800 hover:bg-slate-100',
      }

const CRMSection = ({ isDarkMode, liveUrl, repoUrl = REPO_URL }) => {
  const t = getTheme(isDarkMode)

  return (
    <section
      id='crm'
      aria-labelledby='crm-title'
      className='relative overflow-hidden'
    >
      <div className='relative mx-auto max-w-6xl px-6 py-20 sm:px-10 md:py-28'>
        {/* ---------- Intro + visual ---------- */}
        <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16'>
          <div>
            <p
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium ${t.eyebrow}`}
            >
              <i className='fa-solid fa-star text-xs' aria-hidden='true'></i>
              Featured project
            </p>

            <h2
              id='crm-title'
              className={`mt-6 text-4xl leading-tight font-bold tracking-tight sm:text-5xl ${t.heading}`}
            >
              A multi-tenant CRM, built on a serverless Firebase backend
            </h2>

            <p className={`mt-5 max-w-[58ch] text-lg leading-relaxed ${t.body}`}>
              A full customer relationship manager for sales teams. Companies
              sign up, invite their agents and control exactly what each person
              can see and do. Agents send branded emails to customers and know
              when they&apos;ve been opened. All of the business logic runs in
              secure Cloud Functions.
            </p>

            <div className='mt-8 flex flex-wrap gap-3'>
              {liveUrl && (
                <a
                  href={liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 rounded-full bg-[#6D84B0] px-5 py-2.5 font-medium text-white transition-colors hover:bg-[#5a7099]'
                >
                  <i className='fa-solid fa-arrow-up-right-from-square' aria-hidden='true'></i>
                  Live demo
                </a>
              )}
              <a
                href={repoUrl}
                target='_blank'
                rel='noopener noreferrer'
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 font-medium transition-colors ${t.secondaryBtn}`}
              >
                <i className='fa-brands fa-github' aria-hidden='true'></i>
                View the code
              </a>
            </div>
          </div>

          {/* Visual: role hierarchy + email tracking snapshot */}
          <div
            className={`rounded-3xl border p-6 sm:p-8 ${t.panel}`}
            aria-hidden='true'
          >
            <div className='flex items-center justify-between'>
              <span className={`text-sm font-semibold ${t.heading}`}>
                Access levels
              </span>
              <span className={`font-mono text-xs ${t.code}`}>
                customClaims.role
              </span>
            </div>

            <div className='mt-5 space-y-3'>
              {ROLES.map(({ role, level, width }) => (
                <div key={role} className={`${width} ml-auto`}>
                  <div
                    className={`flex items-center justify-between rounded-xl px-4 py-3 ${t.panelRow}`}
                  >
                    <span className={`font-medium ${t.heading}`}>{role}</span>
                    <span className={`text-sm ${t.muted}`}>{level}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className='my-6 h-px bg-current opacity-10' />

            <div className='flex items-center justify-between'>
              <span className={`text-sm font-semibold ${t.heading}`}>
                Sent emails
              </span>
              <span className={`font-mono text-xs ${t.code}`}>
                trackEmailOpen()
              </span>
            </div>

            <ul className='mt-5 space-y-3'>
              {[
                { subject: 'Your quote is ready', opens: 3, read: true },
                { subject: 'Welcome aboard', opens: 1, read: true },
                { subject: 'Follow-up on our call', opens: 0, read: false },
              ].map(({ subject, opens, read }) => (
                <li
                  key={subject}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 ${t.panelRow}`}
                >
                  <span className={`truncate pr-3 text-sm ${t.body}`}>
                    {subject}
                  </span>
                  <span
                    className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      read
                        ? 'bg-emerald-500/15 text-emerald-600'
                        : `${t.muted} bg-slate-500/10`
                    } ${read && isDarkMode ? 'text-emerald-300' : ''}`}
                  >
                    <i
                      className={`fa-solid ${read ? 'fa-envelope-open' : 'fa-envelope'}`}
                    ></i>
                    {read ? `Opened ×${opens}` : 'Not opened'}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---------- Feature grid ---------- */}
        <ul className='mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {FEATURES.map(({ icon, title, text }) => (
            <li
              key={title}
              className={`rounded-2xl border p-6 transition-all duration-200 ${t.card}`}
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${t.iconWrap}`}
              >
                <i className={`fa-solid ${icon}`} aria-hidden='true'></i>
              </div>
              <h3 className={`mt-4 text-lg font-semibold ${t.heading}`}>
                {title}
              </h3>
              <p className={`mt-2 leading-relaxed ${t.body}`}>{text}</p>
            </li>
          ))}
        </ul>

        {/* ---------- Tech stack ---------- */}
        <div className='mt-16'>
          <h3
            className={`text-sm font-semibold tracking-widest uppercase ${t.muted}`}
          >
            Built with
          </h3>
          <ul className='mt-4 flex flex-wrap gap-2' aria-label='Tech stack'>
            {STACK.map((tech) => (
              <li
                key={tech}
                className={`rounded-full border px-3.5 py-1.5 text-sm ${t.chip}`}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default CRMSection