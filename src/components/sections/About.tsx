import Image from 'next/image'

const FEATURES = [
  'Field development planning, engineering, procurement & construction (EPC)',
  'Drilling support, production operations & project management',
  'Committed to reliable energy infrastructure aligned with global sustainability standards',
  'Operating across Nigeria and key international energy markets',
]

export default function About() {
  return (
    <section id="about" className="fp-section fp-section-alt">
      <div className="content-wrap">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/images/about-bg.jpg"
                alt="JD Waters Energy operations"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            {/* Badge */}
            <div
              className="absolute -bottom-5 -right-5 xs:static xs:mt-4 flex flex-col items-center justify-center w-[100px] h-[100px] rounded-full text-white shadow-xl z-10"
              style={{ background: 'linear-gradient(135deg, #17A8CE, #0F8BAA)' }}
            >
              <span className="font-heading font-bold text-2xl leading-none">25+</span>
              <span className="font-heading text-xs font-semibold tracking-wider uppercase">Years</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="section-label">Company Overview</span>
            <h2 className="section-title text-text">
              Fully Integrated Oilfield Development &amp; Energy Services
            </h2>
            <div className="section-divider section-divider-left mb-6" />

            <p className="text-text-light mb-4">
              JD Waters Energy Limited is a fully integrated oilfield development and energy services company
              specializing in the exploration support, field development, and production optimization of oil
              and gas assets.
            </p>
            <p className="text-text-light mb-4">
              We provide end-to-end solutions across the upstream and midstream value chain, delivering
              technically sound, cost-efficient, and sustainable energy projects.
            </p>
            <p className="text-text-light mb-7">
              JD Waters Energy operates across Nigeria and key energy markets, serving National Oil Companies
              (NOCs), International Oil Companies (IOCs), marginal field operators, and independent energy
              investors.
            </p>

            <ul className="space-y-3 mb-8">
              {FEATURES.map(f => (
                <li key={f} className="flex gap-3 items-start">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5"
                    style={{ background: '#17A8CE' }}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span className="text-text-light text-sm leading-snug">{f}</span>
                </li>
              ))}
            </ul>

            <a href="#contacts" className="btn">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}
