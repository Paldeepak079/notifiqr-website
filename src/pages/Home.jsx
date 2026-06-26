import { useEffect } from 'react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Features from '../components/Features'
import Screenshots from '../components/Screenshots'
import HowItWorks from '../components/HowItWorks'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import DownloadCTA from '../components/DownloadCTA'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'

const Home = () => {
  // After navigating back to home from a legal page, scroll to the requested section
  useEffect(() => {
    const target = sessionStorage.getItem('scrollTo')
    if (target) {
      sessionStorage.removeItem('scrollTo')
      // Wait for all sections to mount before scrolling
      setTimeout(() => {
        const el = document.getElementById(target)
        if (el) {
          const navbarHeight = 80
          const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }, 150)
    }
  }, [])

  return (
    <main>
      <Hero />
      <Stats />
      <Features />
      <Screenshots />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <DownloadCTA />
      <FAQ />
      <Contact />
    </main>
  )
}

export default Home
