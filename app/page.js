import Hero from "@/components/hero/Hero"
import About from "@/components/about/About"
import PitahayaLabs from "@/components/pitahaya-labs/PitahayaLabs"
import Projects from "@/components/projects/Projects"
import Contact from "@/components/contact/Contact"

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <PitahayaLabs />
      <Projects />
      <Contact />
    </div>
  )
}
