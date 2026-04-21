import Cursor from './components/Cursor'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Ticker from './components/Ticker'
import Services from './components/Services'
import About from './components/About'
import WhyUs from './components/WhyUs'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Cursor/>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Ticker />
        <Services />
        <About />
        <WhyUs />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}