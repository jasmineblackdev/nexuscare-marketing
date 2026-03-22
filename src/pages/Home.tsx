import Nav        from '@/components/Nav'
import Hero        from '@/components/Hero'
import WhatWeDo    from '@/components/WhatWeDo'
import HowItWorks  from '@/components/HowItWorks'
import WhoItsFor   from '@/components/WhoItsFor'
import Features    from '@/components/Features'
import Outcomes    from '@/components/Outcomes'
import Pricing     from '@/components/Pricing'
import DemoCTA     from '@/components/DemoCTA'
import Footer      from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <WhatWeDo />
        <HowItWorks />
        <WhoItsFor />
        <Features />
        <Outcomes />
        <Pricing />
        <DemoCTA />
      </main>
      <Footer />
    </div>
  )
}
