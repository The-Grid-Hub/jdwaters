import Hero       from '@/components/sections/Hero'
import About      from '@/components/sections/About'
import Vision     from '@/components/sections/Vision'
import Services   from '@/components/sections/Services'
import Stats      from '@/components/sections/Stats'
import Projects   from '@/components/sections/Projects'
import Features   from '@/components/sections/Features'
import HSSE       from '@/components/sections/HSSE'
import Technology from '@/components/sections/Technology'
import Quality    from '@/components/sections/Quality'
import Contacts   from '@/components/sections/Contacts'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Vision />
      <Services />
      <Stats />
      <Projects />
      <Features />
      <HSSE />
      <Technology />
      <Quality />
      <Contacts />
    </main>
  )
}
