import Spacer from "@/components/Spacer"
import ProjectCardsDisplay from "@/components/ProjectCardsDisplay"
import {nextProjectsData, reactProjectsData, pythonProjectsData, wordpressProjectsData} from "./data"
import Hero from "@/components/hero/Hero"

/**
 * Home component that serves the main page of the portfolio
 * Includes a hero section then a spacer and a series of project cards displays for each project category
 */

const Home = () => {
  return (
    <div className="bg-[#030221] text-white">
      <Hero />
      <Spacer />
      <ProjectCardsDisplay cards={nextProjectsData} heading="Projets Next" />
      <ProjectCardsDisplay cards={reactProjectsData} heading="Projets React" />
      <ProjectCardsDisplay cards={pythonProjectsData} heading="Projets Python" />
      <ProjectCardsDisplay cards={wordpressProjectsData} heading="Projets Wordpress" />
    </div>
  )
}

export default Home