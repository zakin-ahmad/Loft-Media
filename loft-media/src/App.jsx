import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import OurTools from "./pages/OurTools"
import DigitalProducts from "./pages/DigitalProducts"
import InhouseProduction from "./pages/InhouseProduction"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Cursor from "./components/Cursor"
import Preloader from "./components/Preloader"

export default function App() {
  return (
    <BrowserRouter>
      
      {/* Global UI (always visible) */}
      <Cursor />
      <Preloader />
      <Navbar />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<OurTools />} />
        <Route path="/products" element={<DigitalProducts />} />
        <Route path="/production" element={<InhouseProduction />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}