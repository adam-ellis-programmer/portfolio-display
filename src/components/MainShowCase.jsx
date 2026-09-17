// components/LexoShowcase.jsx
//
// A showcase section for the Lexo legal RAG app.
// Self-contained: Tailwind classes only, no images, no extra dependencies.
// Dark mode uses the same `dark:` class strategy as the rest of the site.
//
// The centrepiece is a working miniature of the real product: tick which
// documents the assistant may read, ask a question, see a cited answer.
// Ticking different documents genuinely changes the answer, which is the
// whole idea behind the app.

import { useEffect, useRef, useState } from 'react'

/* ------------------------------------------------------------------ */
/* Demo data                                                          */
/* ------------------------------------------------------------------ */

const DOCS = [
  {
    id: 'letter',
    kind: 'case',
    name: 'Letter of claim — Brackenfield & Rowe',
    meta: '2 Sept 2026 · 6 passages',
  },
  {
    id: 'deed',
    kind: 'case',
    name: 'Conveyance, 14 March 1987',
    meta: 'Scanned · 11 passages',
  },
  {
    id: 'handbook',
    kind: 'law',
    name: 'Property boundaries handbook',
    meta: 'Firm library · 7 passages',
  },
  {
    id: 'crime',
    kind: 'law',
    name: 'Crime and Policing Act 2026',
    meta: 'Firm library · 1,650 passages',
  },
]

// Each question knows which documents it actually needs. The answer is
// assembled from whichever of those the visitor has ticked.
const QUESTIONS = [
  {
    id: 'adverse',
    label: 'How strong is our client’s adverse possession argument?',
    parts: {
      letter: {
        heading: 'What the file says',
        body: 'The neighbour’s solicitors put the fence at April 2014, roughly 2.5m inside their client’s garden, and say it was agreed as temporary.',
        cite: 'letter',
      },
      handbook: {
        heading: 'What the law says',
        body: 'Ten years’ possession can found a claim over a general boundary, but only where the possessor reasonably believed the land was theirs throughout.',
        cite: 'handbook',
      },
      deed: {
        heading: 'What the deed says',
        body: 'The 1987 conveyance bounds the land “by the hawthorn hedge and ditch”, and its plan is marked for identification only.',
        cite: 'deed',
      },
    },
    verdicts: {
      full: 'So the twelve-year period is met on the dates, and the argument turns on the disputed “temporary fence” conversation rather than on the deed.',
      factsOnly:
        'Tick a law book and the assistant can weigh those dates against the ten-year test.',
      lawOnly:
        'Tick the client’s file and the assistant can apply that test to the actual dates.',
    },
  },
  {
    id: 'reference',
    label: 'What reference are they using for this matter?',
    parts: {
      letter: {
        heading: 'Their file reference',
        body: 'BR/SMI/2026/0417, given at the head of the letter, with the internal case code KESTREL-BOUNDARY-0417 at paragraph 6.',
        cite: 'letter',
      },
    },
    verdicts: {
      full: '',
      factsOnly: '',
      lawOnly:
        'Nothing in the ticked law books carries a file reference. Tick the letter of claim.',
    },
  },
]

/* ------------------------------------------------------------------ */
/* Small pieces                                                       */
/* ------------------------------------------------------------------ */

function KindMark({ kind }) {
  const isCase = kind === 'case'
  return (
    <span
      aria-hidden='true'
      className={[
        'mt-1.5 h-2 w-2 shrink-0 rounded-[1px]',
        isCase ? 'bg-rose-800' : 'bg-teal-700 dark:bg-teal-500',
      ].join(' ')}
    />
  )
}

function Citation({ n }) {
  return (
    <sup className='ml-0.5 rounded-[2px] bg-slate-900/10 px-1 text-[0.65rem] font-semibold text-slate-700 dark:bg-white/15 dark:text-slate-200'>
      {n}
    </sup>
  )
}

/* ------------------------------------------------------------------ */
/* The interactive demo                                               */
/* ------------------------------------------------------------------ */

function ScopeDemo() {
  const [ticked, setTicked] = useState(() => new Set(['letter', 'handbook']))
  const [asked, setAsked] = useState(QUESTIONS[0])
  const [state, setState] = useState('idle') // idle | searching | answered
  const timer = useRef(null)

  // Re-run whenever the question or the ticked documents change.
  useEffect(() => {
    setState('searching')
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setState('answered'), 450)
    return () => clearTimeout(timer.current)
  }, [asked, ticked])

  function toggle(id) {
    setTicked((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  // Which of this question's sources are actually available?
  const used = Object.keys(asked.parts).filter((id) => ticked.has(id))
  const sources = used.map((id) => DOCS.find((d) => d.id === id))
  const hasCase = sources.some((d) => d.kind === 'case')
  const hasLaw = sources.some((d) => d.kind === 'law')
  const ignored = [...ticked].filter((id) => !used.includes(id))

  const verdict =
    hasCase && hasLaw
      ? asked.verdicts.full
      : hasCase
        ? asked.verdicts.factsOnly
        : hasLaw
          ? asked.verdicts.lawOnly
          : ''

  return (
    <div  className='overflow-hidden rounded-lg border border-slate-300 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900'>
      {/* Window bar, styled like the case header in the app */}
      <div className='flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-slate-200 bg-slate-100 px-4 py-3 dark:border-slate-700 dark:bg-slate-800/60'>
        <span className='font-serif text-base text-slate-900 dark:text-slate-100'>
          Smith v Johnson
        </span>
        <span className='rounded-full bg-white px-2 py-0.5 text-xs text-slate-600 ring-1 ring-slate-300 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-700'>
          boundary dispute
        </span>
        <span className='ml-auto text-xs text-slate-500 dark:text-slate-400'>
          3 people on this case
        </span>
      </div>

      <div className='grid gap-0 md:grid-cols-[minmax(0,17rem)_1fr]'>
        {/* Left: what the assistant is allowed to read */}
        <div className='border-b border-slate-200 p-4 md:border-b-0 md:border-r dark:border-slate-700'>
          <p className='mb-3 text-sm font-medium text-slate-900 dark:text-slate-100'>
            Read from
          </p>

          <ul className='space-y-1'>
            {DOCS.map((doc) => {
              const on = ticked.has(doc.id)
              return (
                <li key={doc.id}>
                  <label className='flex cursor-pointer items-start gap-2.5 rounded p-1.5 hover:bg-slate-50 dark:hover:bg-slate-800'>
                    <input
                      type='checkbox'
                      checked={on}
                      onChange={() => toggle(doc.id)}
                      className='mt-0.5 h-4 w-4 accent-slate-900 dark:accent-slate-300'
                    />
                    <KindMark kind={doc.kind} />
                    <span className='min-w-0'>
                      <span className='block text-sm leading-snug text-slate-800 dark:text-slate-200'>
                        {doc.name}
                      </span>
                      <span className='block text-xs text-slate-500 dark:text-slate-400'>
                        {doc.meta}
                      </span>
                    </span>
                  </label>
                </li>
              )
            })}
          </ul>

          <p className='mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-slate-200 pt-3 text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400'>
            <span className='flex items-center gap-1.5'>
              <span className='h-2 w-2 rounded-[1px] bg-rose-800' />
              Client’s file
            </span>
            <span className='flex items-center gap-1.5'>
              <span className='h-2 w-2 rounded-[1px] bg-teal-700 dark:bg-teal-500' />
              Firm library
            </span>
          </p>
        </div>

        {/* Right: question and answer */}
        <div className='p-4'>
          <p className='mb-2 text-sm font-medium text-slate-900 dark:text-slate-100'>
            Ask
          </p>

          <div className='mb-4 flex flex-wrap gap-2'>
            {QUESTIONS.map((q) => (
              <button
                key={q.id}
                type='button'
                onClick={() => setAsked(q)}
                aria-pressed={asked.id === q.id}
                className={[
                  'rounded border px-2.5 py-1.5 text-left text-xs leading-snug transition-colors',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500',
                  asked.id === q.id
                    ? 'border-slate-900 bg-slate-900 text-white dark:border-slate-200 dark:bg-slate-100 dark:text-slate-900'
                    : 'border-slate-300 text-slate-600 hover:border-slate-400 dark:border-slate-600 dark:text-slate-300',
                ].join(' ')}
              >
                {q.label}
              </button>
            ))}
          </div>

          <div
            aria-live='polite'
            className='min-h-[13rem] rounded border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50'
          >
            {state === 'searching' ? (
              <p className='text-sm text-slate-500 dark:text-slate-400'>
                Searching {ticked.size} document{ticked.size === 1 ? '' : 's'}…
              </p>
            ) : sources.length === 0 ? (
              <p className='text-sm text-slate-600 dark:text-slate-300'>
                Nothing in the ticked documents answers this. The assistant says so
                rather than filling the gap from memory.
              </p>
            ) : (
              <div className='space-y-3'>
                {used.map((id, i) => {
                  const part = asked.parts[id]
                  return (
                    <p
                      key={id}
                      className='text-sm leading-relaxed text-slate-700 dark:text-slate-200'
                    >
                      <span className='font-medium text-slate-900 dark:text-slate-100'>
                        {part.heading}.{' '}
                      </span>
                      {part.body}
                      <Citation n={i + 1} />
                    </p>
                  )
                })}

                {verdict && (
                  <p className='text-sm leading-relaxed text-slate-700 dark:text-slate-200'>
                    {verdict}
                  </p>
                )}

                <ul className='space-y-1 border-t border-slate-200 pt-3 dark:border-slate-700'>
                  {sources.map((doc, i) => (
                    <li
                      key={doc.id}
                      className='flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400'
                    >
                      <span className='font-semibold text-slate-600 dark:text-slate-300'>
                        {i + 1}
                      </span>
                      <KindMark kind={doc.kind} />
                      <span className='underline decoration-slate-300 underline-offset-2'>
                        {doc.name}
                      </span>
                    </li>
                  ))}
                  {ignored.length > 0 && (
                    <li className='pt-1 text-xs text-slate-400 dark:text-slate-500'>
                      {ignored.length} ticked document
                      {ignored.length === 1 ? '' : 's'} held nothing close enough
                      to the question to quote.
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Supporting sections                                                */
/* ------------------------------------------------------------------ */

function WhoSeesWhat() {
  const rows = [
    {
      ring: 'The firm',
      holds: 'Statutes, textbooks, internal know-how',
      rule: 'Everyone who signs in',
    },
    {
      ring: 'The case',
      holds: 'Deeds, correspondence, attendance notes',
      rule: 'Only the people put on that case',
    },
    {
      ring: 'The question',
      holds: 'Whatever is ticked, and nothing else',
      rule: 'Re-checked in the database on every request',
    },
  ]

  return (
    <div className='rounded-lg border border-slate-200 p-5 dark:border-slate-700'>
      <h3 className='font-serif text-lg text-slate-900 dark:text-slate-100'>
        A junior on one case cannot read another
      </h3>
      <p className='mt-2 max-w-prose text-sm leading-relaxed text-slate-600 dark:text-slate-300'>
        Firms are required to keep matters apart. Access narrows three times before
        any text reaches the model, and a person outside a case gets the same “not
        found” page as a stranger, so the case’s existence stays private too.
      </p>

      <dl className='mt-4 space-y-3'>
        {rows.map((row, i) => (
          <div
            key={row.ring}
            className='flex flex-col gap-1 border-l-2 pl-3 sm:flex-row sm:items-baseline sm:gap-4'
            style={{ marginLeft: `${i * 0.75}rem` }}
          >
            <dt className='w-24 shrink-0 text-sm font-medium text-slate-900 dark:text-slate-100'>
              {row.ring}
            </dt>
            <dd className='text-sm text-slate-600 dark:text-slate-300'>
              {row.holds}
              <span className='mt-0.5 block text-xs text-slate-500 dark:text-slate-400'>
                {row.rule}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

function Pipeline() {
  const steps = [
    ['Upload', 'PDF text is pulled out and cut into overlapping passages.'],
    ['Embed', 'Each passage becomes a 1,024-number vector from Voyage.'],
    ['Retrieve', 'Postgres ranks passages by cosine distance, with a quota per document so a long statute can’t drown a two-page letter.'],
    ['Answer', 'Claude reads the passages and writes with numbered citations.'],
    ['Record', 'The question, the documents and the reader go into the audit log.'],
  ]

  return (
    <div  className='rounded-lg border border-slate-200 p-5 dark:border-slate-700'>
      <h3 className='font-serif text-lg text-slate-900 dark:text-slate-100'>
        What happens between the question and the answer
      </h3>
      <ol className='mt-4 space-y-3'>
        {steps.map(([name, detail], i) => (
          <li key={name} className='flex gap-3'>
            <span className='mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-300 text-[0.7rem] font-semibold text-slate-600 dark:border-slate-600 dark:text-slate-300'>
              {i + 1}
            </span>
            <p className='text-sm leading-relaxed text-slate-600 dark:text-slate-300'>
              <span className='font-medium text-slate-900 dark:text-slate-100'>
                {name}.{' '}
              </span>
              {detail}
            </p>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Built() {
  const items = [
    ['Next.js 15', 'App Router, server components, server actions'],
    ['Postgres + pgvector', 'Cosine search over 1,024-dimension embeddings'],
    ['Drizzle ORM', 'Typed schema and migrations'],
    ['Clerk', 'Sign-in, organisations, per-firm isolation'],
    ['Voyage voyage-4', 'Embeddings for passages and questions'],
    ['Claude Sonnet', 'Streamed answers, grounded in retrieved text'],
  ]

  return (
    <ul className='grid gap-x-8 gap-y-3 sm:grid-cols-2'>
      {items.map(([name, role]) => (
        <li key={name} className='border-t border-slate-200 pt-2 dark:border-slate-700'>
          <span className='block text-sm font-medium text-slate-900 dark:text-slate-100'>
            {name}
          </span>
          <span className='block text-sm text-slate-500 dark:text-slate-400'>
            {role}
          </span>
        </li>
      ))}
    </ul>
  )
}

/* ------------------------------------------------------------------ */
/* The section                                                        */
/* ------------------------------------------------------------------ */

export default function LexoShowcase({ repoUrl = '#', liveUrl = '#' }) {
  return (
    <section
      id='lexo'
      aria-labelledby='lexo-heading'
      className='bg-white py-20 text-slate-900 dark:bg-slate-950 dark:text-slate-100'
    >
      <div className='mx-auto max-w-5xl'>
        {/* Opening */}
        <div className='max-w-2xl'>
          <h2
            id='lexo-heading'
            className='font-serif text-3xl leading-tight sm:text-4xl'
          >
            Lexo reads a case file and shows its working
          </h2>
          <p className='mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300'>
            A research assistant for small law firms, in the mould of Harvey. A
            solicitor opens a case, chooses which client documents and which law
            books the assistant may read, and asks a question in plain English. The
            answer weaves the client’s facts together with the relevant law, and
            every sentence carries a link back to the passage it came from.
          </p>
        </div>

        {/* The demo carries the idea better than any description */}
        <div className='mt-10'>
          <ScopeDemo />
          <p className='mt-3 text-sm text-slate-500 dark:text-slate-400'>
            Try it: untick the client’s letter and ask again. Scope is the whole
            point, so an answer can only ever be as good as what it was allowed to
            read.
          </p>
        </div>

        {/* Why it is built this way */}
        <div className='mt-14 grid gap-6 md:grid-cols-2'>
          <WhoSeesWhat />
          <Pipeline />
        </div>

        {/* The rest of the product, briefly */}
        <div className='mt-14 grid gap-10 md:grid-cols-[1fr_1fr]'>
          <div>
            <h3 className='font-serif text-lg'>Also in the build</h3>
            <ul className='mt-4 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300'>
              <li>
                <span className='font-medium text-slate-900 dark:text-slate-100'>
                  Clients and cases.
                </span>{' '}
                Onboard a client, open a matter, and add colleagues to the team with
                admin and member roles.
              </li>
              <li>
                <span className='font-medium text-slate-900 dark:text-slate-100'>
                  A reader for long documents.
                </span>{' '}
                Paged text with search and jump-to-page, so a 500-page statute loads
                one screen at a time.
              </li>
              <li>
                <span className='font-medium text-slate-900 dark:text-slate-100'>
                  An audit trail.
                </span>{' '}
                Every upload, view, question and change of access is recorded with a
                name and a timestamp.
              </li>
              <li>
                <span className='font-medium text-slate-900 dark:text-slate-100'>
                  No answer without a source.
                </span>{' '}
                Passages below a relevance threshold are dropped, and the assistant
                says when the ticked documents don’t cover the question.
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-serif text-lg'>Built with</h3>
            <div className='mt-4'>
              <Built />
            </div>
          </div>
        </div>

        {/* Links */}
        <div className='mt-12 flex flex-wrap gap-3'>
          <a
            href={liveUrl}
            className='rounded bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white'
          >
            Open the live app
          </a>
          <a
            href={repoUrl}
            className='rounded border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-900 hover:border-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 dark:border-slate-600 dark:text-slate-100'
          >
            Read the code
          </a>
        </div>
      </div>
    </section>
  )
}