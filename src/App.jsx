import NavBar from "./components/NavBar"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import TechStack from "./sections/TechStack"
import WorkExperience from "./sections/WorkExperience"

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Projects/>
      <TechStack/>
      <WorkExperience/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App