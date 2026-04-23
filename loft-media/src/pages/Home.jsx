import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import Ticker from '../components/Ticker'
import Services from '../components/Services'
import About from '../components/About'
import WhyUs from '../components/WhyUs'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const Home = () => {
    const location = useLocation()

    useEffect(() => {
        // Disable browser scroll restoration (important for refresh)
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual'
        }

        if (location.hash) {
            // remove hash from URL on refresh/load
            window.history.replaceState({}, '', location.pathname)
        }

        if (location.state?.scrollTo) {
            const el = document.getElementById(location.state.scrollTo)

            if (el) {
                setTimeout(() => {
                    const yOffset = -80 // adjust for navbar height
                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset

                    window.scrollTo({ top: y, behavior: 'smooth' })
                }, 100)
            }
        } else {
            // Default → always go to top (including refresh)
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
        }
    }, [location])
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
