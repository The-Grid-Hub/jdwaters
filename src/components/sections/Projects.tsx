import Image from 'next/image'
import { PROJECTS, CLIENTS } from '@/lib/constants'

export default function Projects() {
  return (
    <section id="projects" className="fp-section fp-section-dark">
      <div className="content-wrap">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-14">

          {/* Left: Key Projects */}
          <div>
            <span className="section-label">Track Record</span>
            <h2 className="section-title text-white">Key Projects &amp; Experience</h2>
            <div className="section-divider section-divider-left mb-7" />

            <p className="text-sm leading-relaxed mb-7" style={{ color: 'rgba(255,255,255,0.65)' }}>
              JD Waters Energy has developed a strong execution track record across energy projects spanning
              oilfield development, construction, and well services.
            </p>

            <div className="space-y-4">
              {PROJECTS.map(p => (
                <div key={p} className="flex gap-4 items-start">
                  <span className="project-bullet" />
                  <p className="text-sm leading-snug" style={{ color: 'rgba(255,255,255,0.8)' }}>{p}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Clients */}
          <div>
            <span className="section-label">Who We Work With</span>
            <h2 className="section-title text-white">Clients &amp; Partnerships</h2>
            <div className="section-divider section-divider-left mb-7" />

            <p className="text-sm leading-relaxed mb-7" style={{ color: 'rgba(255,255,255,0.65)' }}>
              We collaborate with a broad range of stakeholders within the energy sector, leveraging advanced
              technologies and integrated delivery models to execute complex projects efficiently.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {CLIENTS.map(c => (
                <span key={c} className="client-tag">{c}</span>
              ))}
            </div>

            <div className="relative rounded-xl overflow-hidden" style={{ height: '200px' }}>
              <Image
                src="/images/projects-img.jpg"
                alt="Oil platform operations"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
