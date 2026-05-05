import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center min-h-screen overflow-hidden"
      aria-label="Hero Banner"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(105deg, rgba(13,32,64,0.9) 0%, rgba(27,54,104,0.65) 100%)' }}
        role="presentation"
      />

      {/* Content */}
      <div className="content-wrap relative z-[2] py-[120px]">
        <div className="max-w-[700px]">
          <p
            className="section-label mb-5"
            style={{ color: 'rgba(255,255,255,0.72)', letterSpacing: '0.2em' }}
          >
            Integrated Oilfield Development &amp; Energy Services
          </p>

          <h1
            className="font-heading font-bold text-white leading-[1.08] mb-6"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
          >
            Advancing Innovation,<br />
            <span style={{ color: '#17A8CE' }}>Powering Energy</span>
            <span style={{ color: '#F5A623' }}> Solutions</span>
          </h1>

          <p
            className="text-[1.05rem] leading-[1.8] mb-10 max-w-[580px]"
            style={{ color: 'rgba(255,255,255,0.78)' }}
          >
            JD Waters Energy Limited delivers technically sound, cost-efficient, and sustainable energy
            projects across the upstream and midstream value chain — from field development planning to
            production operations.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#services" className="btn btn-amber btn-lg">
              Our Services
            </a>
            <a href="#contacts" className="btn btn-outline btn-lg">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
