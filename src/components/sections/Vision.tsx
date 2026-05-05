import Image from 'next/image'

const CARDS = [
  {
    image: '/images/vision-mission-bg.jpg',
    imageAlt: 'Vision — JD Waters Energy',
    labelColor: '#17A8CE',
    label: 'Vision',
    title: 'Leading Oilfield Development Partner',
    desc: 'To be a leading oilfield development and energy infrastructure partner, delivering innovative, efficient, and sustainable solutions across global energy markets.',
  },
  {
    image: '/images/vision-img.jpg',
    imageAlt: 'Mission — JD Waters Energy',
    labelColor: '#F5A623',
    label: 'Mission',
    title: 'Long-Term Value Through Operational Excellence',
    desc: 'To create long-term value for our clients and stakeholders by delivering safe, reliable, and cost-effective oilfield development services through advanced technologies, technical expertise, and operational excellence.',
  },
]

export default function Vision() {
  return (
    <section id="vision" className="fp-section fp-section-light">
      <div className="content-wrap">

        <div className="section-header">
          <span className="section-label">Purpose &amp; Direction</span>
          <h2 className="section-title text-text">Our Vision &amp; Mission</h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {CARDS.map(card => (
            <div
              key={card.label}
              className="rounded-xl overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-xl"
              style={{ background: '#fff', border: '1px solid #E0E7EF' }}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <span
                  className="font-heading text-xs font-bold tracking-[0.18em] uppercase block mb-3"
                  style={{ color: card.labelColor }}
                >
                  {card.label}
                </span>
                <h3 className="font-heading font-bold text-text text-xl mb-3">{card.title}</h3>
                <p className="text-text-light text-[0.95rem] leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
