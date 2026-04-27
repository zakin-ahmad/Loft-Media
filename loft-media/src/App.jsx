import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Navbar from "./components/other-pages/Navbar";
import Footer from "./components/other-pages/Footer";
import Cursor from "./components/other-pages/Cursor";
import Preloader from "./components/other-pages/Preloader";

// Lazy pages
const Home = lazy(() => import("./pages/Home"));
const AIHouse = lazy(() => import("./pages/AIHouse"));
const OurTools = lazy(() => import("./pages/OurTools"));
const DigitalProducts = lazy(() => import("./pages/DigitalProducts"));
const InhouseProduction = lazy(() => import("./pages/InhouseProduction"));

export default function App() {
  return (
    <BrowserRouter>
      <Cursor />
      {/* <Preloader /> */}
      <Navbar />

      {/* Lazy loading wrapper */}
      <Suspense
        fallback={
            <Preloader /> 
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-house" element={<AIHouse />} />
          <Route path="/tools" element={<OurTools />} />
          <Route path="/products" element={<DigitalProducts />} />
          <Route path="/production" element={<InhouseProduction />} />
        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
}