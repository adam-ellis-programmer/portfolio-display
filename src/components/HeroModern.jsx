import { useEffect, useState } from 'react'
import HeroButtons from './HeroButtons'
import SocialLinks from './SocialLinks'
import HeroImg from './HeroImg'

// Skill tags — edit here instead of repeating markup
const SKILLS = [
  { icon: 'fa-bookmark', label: 'Software engineer' },
  { icon: 'fa-layer-group', label: 'Full-stack developer' },
  { icon: 'fa-robot', label: 'AI integration' },
  { icon: 'fa-palette', label: 'Systems design' },
  { icon: 'fa-user-check', label: 'Agentic training' },
  { icon: 'fa-sitemap', label: 'Multi-tenant apps' },
  { icon: 'fa-hexagon-nodes', label: 'RAG applications' },
  { icon: 'fa-mobile-screen', label: 'Web & mobile' },
  { icon: 'fa-building', label: 'Enterprise-grade apps' },
]

// All colours are driven by the isDarkMode prop (not Tailwind's dark: variant),
// so text always matches the theme your NavBar toggle sets.
const getTheme = (isDarkMode) =>
  isDarkMode
    ? {
        heading: 'text-white',
        sub: 'text-slate-300',
        body: 'text-slate-300',
        muted: 'text-slate-400',
        pill: 'border-white/15 bg-white/5 text-slate-200',
        skill:
          'border-sky-300/25 bg-sky-300/10 text-sky-50 hover:bg-sky-300/20',
        skillIcon: 'text-sky-300',
        accent: 'text-sky-300',
        wash: 'bg-[#6D84B0]/20',
        frame: 'bg-[#6D84B0]/60',
        ring: 'ring-white/10',
        skeleton: 'bg-slate-800',
        quote: 'text-slate-200',
      }
    : {
        heading: 'text-slate-900',
        sub: 'text-slate-600',
        body: 'text-slate-600',
        muted: 'text-slate-500',
        pill: 'border-slate-200 bg-white/70 text-slate-600',
        skill:
          'border-sky-200 bg-sky-50 text-slate-700 hover:border-sky-300 hover:bg-[#bae6fd]',
        skillIcon: 'text-[#6D84B0]',
        accent: 'text-[#6D84B0]',
        wash: 'bg-[#bae6fd]/40',
        frame: 'bg-[#bae6fd]',
        ring: 'ring-black/5',
        skeleton: 'bg-slate-200',
        quote: 'text-slate-700',
      }

// Shared placeholder shown while profile images preload
const ImageSkeleton = ({ className = '', t }) => (
  <div
    className={`relative overflow-hidden rounded-3xl ${t.skeleton} ${className}`}
    role='status'
    aria-live='polite'
  >
    <div className='absolute inset-0 animate-pulse bg-white/10 motion-reduce:animate-none' />
    <div className='relative flex h-full flex-col items-center justify-center gap-3'>
      <div className='h-9 w-9 animate-spin rounded-full border-[3px] border-sky-400 border-t-transparent motion-reduce:animate-none' />
      <span className={`text-sm ${t.muted}`}>Loading profile image…</span>
    </div>
  </div>
)

// Offset frame around the portrait
const FramedImage = ({ isDarkMode, profileImgs, t }) => (
  <div className='relative'>
    <div
      aria-hidden='true'
      className={`absolute -right-4 -bottom-4 h-full w-full rounded-3xl ${t.frame}`}
    />
    <div className={`relative overflow-hidden rounded-3xl ring-1 ${t.ring}`}>
      <HeroImg isDarkMode={isDarkMode} profileImgs={profileImgs} />
    </div>
  </div>
)

const Hero = ({ showcase, isDarkMode, profileImgs }) => {
  const [preloadComplete, setPreloadComplete] = useState(false)
  const t = getTheme(isDarkMode)

  useEffect(() => {
    if (!profileImgs || profileImgs.length === 0) {
      setPreloadComplete(true)
      return
    }

    let cancelled = false
    let completedImages = 0
    const totalImages = profileImgs.length
    const links = []

    const checkAllLoaded = () => {
      completedImages++
      if (completedImages === totalImages && !cancelled) {
        setPreloadComplete(true)
      }
    }

    // Preload via <link rel="preload"> and wait for completion
    profileImgs.forEach((img) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = img.url
      link.onload = checkAllLoaded
      link.onerror = () => {
        console.warn(`Failed to preload: ${img.url}`)
        checkAllLoaded() // still count as complete to avoid hanging
      }
      document.head.appendChild(link)
      links.push(link)
    })

    return () => {
      cancelled = true
      links.forEach((link) => link.remove())
    }
  }, [profileImgs])

  return (
    <section className='relative overflow-hidden' aria-labelledby='hero-title'>
      {/* soft background wash (sits behind content) */}
      <div
        aria-hidden='true'
        className={`pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full blur-3xl ${t.wash}`}
      />

      <div className='relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-start gap-14 px-6 pt-12 pb-20 sm:px-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:pt-20'>
        {/* ---------- Left column ---------- */}
        <div>
          <p
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm backdrop-blur ${t.pill}`}
          >
            <i className={`fa-solid fa-location-dot ${t.accent}`} aria-hidden='true'></i>
            Based in London
          </p>

          <h1
            id='hero-title'
            className={`mt-6 text-5xl leading-[1.02] font-bold tracking-tight sm:text-6xl lg:text-7xl ${t.heading}`}
          >
            Adam Ellis
          </h1>
          <h2
            className={`mt-4 text-2xl font-light tracking-tight sm:text-3xl ${t.sub}`}
          >
            Programmer &amp; designer, taking products from design to launch.
          </h2>

          {/* Mobile image */}
          <div className='mt-10 md:hidden'>
            {preloadComplete ? (
              <div className='max-w-sm pr-4 pb-4'>
                <FramedImage isDarkMode={isDarkMode} profileImgs={profileImgs} t={t} />
              </div>
            ) : (
              <ImageSkeleton className='h-[312px] max-w-sm' t={t} />
            )}
          </div>

          {/* Skills */}
          <ul className='mt-10 flex flex-wrap gap-2' aria-label='Skills'>
            {SKILLS.map(({ icon, label }) => (
              <li
                key={label}
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition-colors ${t.skill}`}
              >
                <i className={`fa-solid ${icon} text-xs ${t.skillIcon}`} aria-hidden='true'></i>
                <span>{label}</span>
              </li>
            ))}
          </ul>

          {/* Bio */}
          <div className='mt-10 max-w-[62ch]'>
            <h3 className={`flex items-center gap-2 text-lg font-semibold ${t.heading}`}>
              <i className={`fa-solid fa-circle-info ${t.accent}`} aria-hidden='true'></i>
              Quick bio
            </h3>
            <section aria-label='Professional biography'>
              <p className={`mt-3 text-base leading-relaxed ${t.body}`}>
                Adam is a seasoned technology professional with over ten years
                of design experience and more than six years of programming
                expertise. Throughout his career, he has developed a unique
                blend of creative vision and technical implementation skills,
                allowing him to bridge the gap between aesthetic design and
                functional code. His extensive background in design provides
                him with a deep understanding of user experience principles,
                visual communication, and interface aesthetics, while his
                programming skills enable him to bring complex digital concepts
                to life. Adam&apos;s dual expertise makes him particularly
                valuable in creating cohesive, user-centered, data driven
                digital solutions that are both visually compelling and
                technically robust.
              </p>
            </section>
          </div>

          <div className='mt-8'>
            <HeroButtons showcase={showcase} />
          </div>
          <div className='mt-6'>
            <SocialLinks />
          </div>
        </div>

        {/* ---------- Right column (desktop image + quote) ---------- */}
        <div className='hidden md:sticky md:top-24 md:block'>
          {preloadComplete ? (
            <div className='pr-4 pb-4'>
              <FramedImage isDarkMode={isDarkMode} profileImgs={profileImgs} t={t} />
            </div>
          ) : (
            <ImageSkeleton className='h-[452px] w-full' t={t} />
          )}

          <blockquote className='mt-12 border-l-4 border-[#6D84B0] pl-5'>
            <p className={`text-lg leading-relaxed italic ${t.quote}`}>
              Your work is going to fill a large part of your life, and the only
              way to be truly satisfied is to do what you believe is great work.
              And the only way to do great work is to love what you do. If you
              haven&apos;t found it yet, keep looking. Don&apos;t settle.
            </p>
            <cite className={`mt-3 block text-sm not-italic ${t.muted}`}>
              Steve Jobs
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default Hero