import Hero from "@/components/hero/Hero"
import About from "@/components/about/About"
import PitahayaLabs from "@/components/pitahaya-labs/PitahayaLabs"
import Projects from "@/components/projects/Projects"
import Contact from "@/components/contact/Contact"
import NavigationScreen from "@/components/navigation-screen/NavigationScreen"
import NavigationButton from "@/components/nav-button/NavigationButton"

export default function Home() {
  return (
    <>
      <NavigationButton />
      <Hero />
      <NavigationScreen />
      <About />
      <PitahayaLabs />
      <Projects />
      <Contact />
    </>
  )
}
