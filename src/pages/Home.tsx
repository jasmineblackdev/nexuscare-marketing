import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import WhatWeDo from '@/components/WhatWeDo'
import WhoItsFor from '@/components/WhoItsFor'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import DemoCTA from '@/components/DemoCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Nav />
      <main>
        <Hero />
        <WhatWeDo />
        <WhoItsFor />
        <Features />
        <Pricing />
        <DemoCTA />
      </main>
      <Footer />
    </div>
  )
}
