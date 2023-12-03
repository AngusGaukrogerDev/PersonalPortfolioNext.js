import Hero from "@/components/hero/Hero"
import About from "@/components/about/About"
import PitahayaLabs from "@/components/pitahaya-labs/PitahayaLabs"
import Projects from "@/components/projects/Projects"
import Contact from "@/components/contact/Contact"
import NavigationButton from "@/components/nav-button/NavigationButton"

export default function Home() {
  return (
    <>
      <NavigationButton />
      <Hero />
      <About />
      <PitahayaLabs />
      <Projects />
      <Contact />
    </>
  )
}
