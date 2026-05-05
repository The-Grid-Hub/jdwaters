import Image from 'next/image'
import { TECH_ITEMS, SUSTAINABILITY_ITEMS } from '@/lib/constants'

export default function Technology() {
  return (
    <section id="technology" className="fp-section fp-section-alt">
      <div className="content-wrap">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-14 items-center">

          {/* Left: Tech content */}
          <div>
            <span className="section-label">Digital &amp; Innovation</span>
            <h2 className="section-title text-text">Technology &amp; Innovation</h2>
            <div className="section-divider section-divider-left mb-6" />

            <p className="text-text-light mb-6">
              We leverage modern technologies to enhance operational performance and project delivery.
              Our innovation strategy focuses on improving efficiency, reducing costs, and enhancing
              decision-making across operations.
            </p>

            <div className="space-y-4">
              {TECH_ITEMS.map(item => (
                <div key={item} className="flex gap-4 items-center">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: '#17A8CE' }}
                    aria-hidden="true"
                  />
                  <span className="text-text-light text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image + Sustainability box */}
          <div className="space-y-7">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/images/tech-img.jpg"
                alt="Technology &amp; Innovation"
                width={600}
                height={380}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            <div className="rounded-xl p-7" style={{ background: '#0D2040' }}>
              <span className="section-label mb-2">Energy Transition</span>
              <h3 className="font-heading font-bold text-white text-base mb-4">
                Sustainability &amp; Energy Transition
              </h3>
              <ul className="space-y-3">
                {SUSTAINABILITY_ITEMS.map(item => (
                  <li key={item} className="flex gap-3 items-start">
                    <span
                      className="text-sm flex-shrink-0 mt-0.5"
                      style={{ color: '#17A8CE' }}
                      aria-hidden="true"
                    >
                      ▶
                    </span>
                    <span className="text-sm leading-snug" style={{ color: 'rgba(255,255,255,0.78)' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs mt-4 mb-0" style={{ color: 'rgba(255,255,255,0.45)' }}>
                We aim to balance energy demand with environmental responsibility.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
