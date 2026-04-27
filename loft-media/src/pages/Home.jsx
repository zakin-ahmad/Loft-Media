import HomeCard from "../components/HomeCard";
import HomeHero from "../components/HomeHero";
import HomeNavBar from "../components/HomeNavBar";
import { useEffect } from "react";

import { FiLayers } from "react-icons/fi";
import { HiCube } from "react-icons/hi";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

export default function Home() {

    useEffect(() => {
        // Disable browser scroll restoration (important for refresh)
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual'
        } else {
            // Default → always go to top (including refresh)
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
        }
    }, [])

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <HomeHero />
            </motion.div>


            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                {/* Header */}
                <div className="flex flex-col justify-center items-center mt-8">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[#b49fff] border border-[#7c58ff]/30 px-4 py-1.5 inline-block mb-5">
                        OUR TWO HOUSES
                    </span>

                    <h2 className="font-syne text-center font-extrabold text-3xl md:text-5xl tracking-tight mb-5 text-[#e8e8ff]">
                        Choose Your Creative Path
                    </h2>

                    <p className="text-[#aab0d6]/70 text-center font-light text-sm md:text-lg max-w-lg mx-auto leading-relaxed">
                        Two specialized studios, one unified vision -built for the future of digital production.
                    </p>
                </div>
            </motion.div>


            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-6">
                    <HomeCard
                        title="Loft Media AI House"
                        tag="AI Division"
                        route="/ai-house"
                        icon={<FiLayers className="text-purple-300 w-6 h-6" />}
                        description="Intelligent systems and production pipelines built for scalable creative execution."
                        features={[
                            "AI Automation Solutions",
                            "Smart Content Creation",
                            "AI Tools & SaaS Products",
                            "Business Intelligence Systems",
                            "Future-ready Innovation"
                        ]}
                    />

                    <HomeCard
                        title="Loft Media 3D House"
                        tag="3D Division"
                        route="/3d-house"
                        icon={<HiCube className="text-blue-300 w-6 h-6" />}
                        description="Cinematic 3D production, photorealistic visualization, and world-class visual storytelling."
                        features={[
                            "3D Modeling & Animation",
                            "Product Visualization",
                            "Game Assets & Environments",
                            "Cinematic Rendering",
                            "Creative Visual Production"
                        ]}
                    />

                </section>
            </motion.div>
        </div>
    );
}