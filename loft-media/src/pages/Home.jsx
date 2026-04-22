import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import Ticker from '../components/Ticker'
import Services from '../components/Services'
import About from '../components/About'
import WhyUs from '../components/WhyUs'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

const Home = () => {
    return (
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
    )
}

export default Home
