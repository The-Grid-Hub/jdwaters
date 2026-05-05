import { QUALITY_ITEMS, CSR_ITEMS, OUTLOOK_ITEMS } from '@/lib/constants'

function CheckItem({ text, color = '#17A8CE' }: { text: string; color?: string }) {
  return (
    <li className="flex gap-3 items-start">
      <span className="text-sm flex-shrink-0 mt-0.5 font-bold" style={{ color }} aria-hidden="true">✓</span>
      <span className="text-text-light text-sm leading-snug">{text}</span>
    </li>
  )
}

function ArrowItem({ text }: { text: string }) {
  return (
    <li className="flex gap-3 items-start">
      <span className="text-sm flex-shrink-0 mt-0.5" style={{ color: '#17A8CE' }} aria-hidden="true">▶</span>
      <span className="text-sm leading-snug" style={{ color: 'rgba(255,255,255,0.78)' }}>{text}</span>
    </li>
  )
}

export default function Quality() {
  return (
    <section id="quality" className="fp-section fp-section-light">
      <div className="content-wrap">

        <div className="section-header">
          <span className="section-label">Standards &amp; Commitments</span>
          <h2 className="section-title text-text">Quality, CSR &amp; Future Outlook</h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7">

          {/* Quality Assurance */}
          <div
            className="rounded-xl p-8 bg-white"
            style={{ border: '1px solid #E0E7EF', borderTop: '3px solid #17A8CE' }}
          >
            <div className="text-4xl mb-4" aria-hidden="true" style={{ color: '#17A8CE' }}>✅</div>
            <h3 className="font-heading font-bold text-text text-lg mb-4">Quality Assurance</h3>
            <ul className="space-y-3">
              {QUALITY_ITEMS.map(q => <CheckItem key={q} text={q} color="#17A8CE" />)}
            </ul>
          </div>

          {/* CSR */}
          <div
            className="rounded-xl p-8 bg-white"
            style={{ border: '1px solid #E0E7EF', borderTop: '3px solid #F5A623' }}
          >
            <div className="text-4xl mb-4" aria-hidden="true" style={{ color: '#F5A623' }}>🏠</div>
            <h3 className="font-heading font-bold text-text text-lg mb-3">Corporate Social Responsibility</h3>
            <p className="text-text-light text-sm mb-4">
              We actively contribute to the communities in which we operate.
            </p>
            <ul className="space-y-3">
              {CSR_ITEMS.map(c => <CheckItem key={c} text={c} color="#F5A623" />)}
            </ul>
          </div>

          {/* Future Outlook */}
          <div className="rounded-xl p-8" style={{ background: '#0D2040' }}>
            <div className="text-4xl mb-4" aria-hidden="true" style={{ color: '#F5A623' }}>🚀</div>
            <h3 className="font-heading font-bold text-white text-lg mb-3">Future Outlook</h3>
            <p className="text-sm mb-5" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Strategically positioned for growth within the evolving energy landscape. We are focused on:
            </p>
            <ul className="space-y-3">
              {OUTLOOK_ITEMS.map(o => <ArrowItem key={o} text={o} />)}
            </ul>
            <p className="text-xs mt-5 mb-0" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Our goal: remain a trusted partner in delivering sustainable and innovative energy solutions globally.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
