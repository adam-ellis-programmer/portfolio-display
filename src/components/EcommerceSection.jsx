// EcommerceSection.jsx — three e-commerce builds, three different stacks
// Colours follow the isDarkMode prop (same pattern as Hero.jsx / CRMSection.jsx)
// Fill in liveUrl / repoUrl for each project below. Buttons only show when a URL is set.

const PROJECTS = [
  {
    id: 'python-react',
    number: '01',
    category: 'Marketplace',
    categoryIcon: 'fa-solid fa-store',
    name: 'Python + React',
    tagline: 'An Amazon-style marketplace on a Python REST API',
    description:
      'A multi-category online shop in the style of Amazon. A Python backend handles products, users, orders and payments behind a REST API, and a React single-page app delivers a fast, app-like shopping experience.',
    highlights: [
      'Multi-category catalogue',
      'Cart & checkout',
      'Order tracking',
    ],
    flow: ['React', 'REST API', 'Python', 'Database'],
    stack: ['Python', 'React', 'REST API', 'JWT auth'],
    icon: 'fa-brands fa-python',
    liveUrl: '',
    repoUrl: '',
  },
  {
    id: 'mern',
    number: '02',
    category: 'Marketplace',
    categoryIcon: 'fa-solid fa-store',
    name: 'MERN stack',
    tagline: 'An Amazon-style marketplace in JavaScript end to end',
    description:
      'A second large-catalogue store, built with MongoDB, Express, React and Node. One language across the whole stack, with a flexible document database suited to varied product data.',
    highlights: [
      'Product search & filters',
      'Cart & checkout',
      'Admin product management',
    ],
    flow: ['React', 'Express', 'Node', 'MongoDB'],
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Mongoose'],
    icon: 'fa-brands fa-node-js',
    liveUrl: '',
    repoUrl: '',
  },
  {
    id: 'nextjs',
    number: '03',
    category: 'Travel',
    categoryIcon: 'fa-solid fa-plane-departure',
    name: 'Next.js',
    tagline: 'A travel booking site with server-rendered pages',
    description:
      'A travel site where customers browse destinations and trips, then book and pay online. Server-rendered pages load fast and are fully indexable, which matters when travellers find you through search.',
    highlights: [
      'Destination browsing',
      'Online booking & payment',
      'SEO-friendly pages',
    ],
    flow: ['Pages', 'Server rendering', 'API routes', 'Database'],
    stack: ['Next.js', 'React', 'Server components', 'API routes'],
    icon: 'fa-solid fa-n',
    liveUrl: '',
    repoUrl: '',
  },
]

const SHARED_FEATURES = [
  { icon: 'fa-magnifying-glass', label: 'Search & filters' },
  { icon: 'fa-cart-shopping', label: 'Basket / booking flow' },
  { icon: 'fa-credit-card', label: 'Secure checkout' },
  { icon: 'fa-user-lock', label: 'User accounts' },
  { icon: 'fa-box', label: 'Order history' },
  { icon: 'fa-gauge', label: 'Admin dashboard' },
  { icon: 'fa-shield-halved', label: 'Authentication' },
  { icon: 'fa-mobile-screen', label: 'Fully responsive' },
]

const getTheme = (isDarkMode) =>
  isDarkMode
    ? {
        heading: 'text-white',
        body: 'text-slate-300',
        muted: 'text-slate-400',
        eyebrow: 'border-white/15 bg-white/5 text-sky-200',
        card: 'border-white/10 bg-white/[0.04] hover:border-sky-300/30',
        number: 'text-white/10',
        iconWrap: 'bg-sky-300/15 text-sky-300',
        flowStep: 'bg-white/5 text-slate-200 border-white/10',
        arrow: 'text-slate-500',
        chip: 'border-white/10 bg-white/5 text-slate-300',
        featureStrip: 'border-white/10 bg-white/[0.03]',
        featureIcon: 'text-sky-300',
        secondaryBtn: 'border-white/20 text-white hover:bg-white/10',
        divider: 'bg-white/10',
        badge: 'bg-white/10 text-slate-200',
        check: 'text-emerald-300',
      }
    : {
        heading: 'text-slate-900',
        body: 'text-slate-600',
        muted: 'text-slate-500',
        eyebrow: 'border-slate-200 bg-white/70 text-[#6D84B0]',
        card: 'border-slate-200 bg-white hover:border-sky-300 hover:shadow-xl hover:shadow-sky-100',
        number: 'text-slate-100',
        iconWrap: 'bg-[#bae6fd] text-[#3f5683]',
        flowStep: 'bg-slate-50 text-slate-700 border-slate-200',
        arrow: 'text-slate-400',
        chip: 'border-slate-200 bg-slate-50 text-slate-600',
        featureStrip: 'border-slate-200 bg-white',
        featureIcon: 'text-[#6D84B0]',
        secondaryBtn: 'border-slate-300 text-slate-800 hover:bg-slate-100',
        divider: 'bg-slate-200',
        badge: 'bg-slate-100 text-slate-700',
        check: 'text-emerald-600',
      }

const ProjectCard = ({ project, t }) => {
  const {
    number,
    category,
    categoryIcon,
    name,
    tagline,
    description,
    highlights,
    flow,
    stack,
    icon,
    liveUrl,
    repoUrl,
  } = project

  return (
    <li
      className={`group relative flex flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-200 ${t.card}`}
    >
      {/* big background number */}
      <span
        aria-hidden='true'
        className={`pointer-events-none absolute -top-4 right-4 text-8xl font-bold select-none ${t.number}`}
      >
        {number}
      </span>

      <span
        className={`relative inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${t.badge}`}
      >
        <i className={categoryIcon} aria-hidden='true'></i>
        {category}
      </span>

      <div className='relative mt-4 flex items-center gap-3'>
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl text-xl ${t.iconWrap}`}
        >
          <i className={icon} aria-hidden='true'></i>
        </div>
        <h3 className={`text-2xl font-bold tracking-tight ${t.heading}`}>
          {name}
        </h3>
      </div>

      <p className={`relative mt-4 font-medium ${t.heading}`}>{tagline}</p>
      <p className={`relative mt-2 leading-relaxed ${t.body}`}>{description}</p>

      <ul className='relative mt-5 space-y-2'>
        {highlights.map((item) => (
          <li
            key={item}
            className={`flex items-center gap-2 text-sm font-medium ${t.heading}`}
          >
            <i
              className={`fa-solid fa-circle-check ${t.check}`}
              aria-hidden='true'
            ></i>
            {item}
          </li>
        ))}
      </ul>

      {/* architecture flow */}
      <div className='relative mt-6'>
        <p
          className={`text-xs font-semibold tracking-widest uppercase ${t.muted}`}
        >
          Architecture
        </p>
        <ol
          className='mt-3 flex flex-wrap items-center gap-1.5'
          aria-label={`${name} architecture`}
        >
          {flow.map((step, i) => (
            <li key={step} className='flex items-center gap-1.5'>
              <span
                className={`rounded-lg border px-2.5 py-1 text-xs font-medium ${t.flowStep}`}
              >
                {step}
              </span>
              {i < flow.length - 1 && (
                <i
                  className={`fa-solid fa-arrow-right text-[10px] ${t.arrow}`}
                  aria-hidden='true'
                ></i>
              )}
            </li>
          ))}
        </ol>
      </div>

      {/* stack chips */}
      <ul
        className='relative mt-5 flex flex-wrap gap-1.5'
        aria-label={`${name} tech stack`}
      >
        {stack.map((tech) => (
          <li
            key={tech}
            className={`rounded-full border px-3 py-1 text-xs ${t.chip}`}
          >
            {tech}
          </li>
        ))}
      </ul>

      {/* actions pinned to the bottom so cards line up */}
      {(liveUrl || repoUrl) && (
        <div className='relative mt-auto flex flex-wrap gap-2 pt-7'>
          {liveUrl && (
            <a
              href={liveUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-full bg-[#6D84B0] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#5a7099]'
            >
              <i
                className='fa-solid fa-arrow-up-right-from-square'
                aria-hidden='true'
              ></i>
              Visit store
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target='_blank'
              rel='noopener noreferrer'
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${t.secondaryBtn}`}
            >
              <i className='fa-brands fa-github' aria-hidden='true'></i>
              Code
            </a>
          )}
        </div>
      )}
    </li>
  )
}

const EcommerceSection = ({ isDarkMode }) => {
  const t = getTheme(isDarkMode)

  return (
    <section
      id='ecommerce'
      aria-labelledby='ecommerce-title'
      className='relative border-t border-gray-300'
    >
      <div className='mx-auto max-w-6xl px-6 py-20 sm:px-10 md:py-10'>
        {/* ---------- Intro ---------- */}
        <div className='max-w-3xl '>
          {/* <p
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium ${t.eyebrow}`}
          >
            <i className='fa-solid fa-bag-shopping text-xs' aria-hidden='true'></i>
            E-commerce
          </p> */}

          <h2 className='text-4xl  sm:text-5xl font-bold'>
            E Commerce Platforms
          </h2>
          <h3
            id='ecommerce-title'
            className={`mt-4 text-3xl leading-tight font-bold tracking-tight sm:text-3xl ${t.heading}`}
          >
            Marketplaces to travel bookings
          </h3>
          <p className={`mt-5 text-lg leading-relaxed ${t.body}`}>
            Multiple e-commerce sites on many different stacks of which include
            Amazon-style marketplaces and travel booking sites. Different
            products, different technologies, the same production-ready
            fundamentals.
          </p>
        </div>

        {/* ---------- Shared features ---------- */}
        <div
          className={`mt-12 rounded-3xl border p-6 sm:p-8 ${t.featureStrip}`}
        >
          <p
            className={`text-xs font-semibold tracking-widest uppercase ${t.muted}`}
          >
            Core features across all three
          </p>
          <ul className='mt-5 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4'>
            {SHARED_FEATURES.map(({ icon, label }) => (
              <li
                key={label}
                className={`flex items-center gap-2.5 text-sm font-medium ${t.heading}`}
              >
                <i
                  className={`fa-solid ${icon} w-4 text-center ${t.featureIcon}`}
                  aria-hidden='true'
                ></i>
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- Project cards ---------- */}
        <ul className='mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3'>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} t={t} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default EcommerceSection
