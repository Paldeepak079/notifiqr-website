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
