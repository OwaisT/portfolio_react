import Spacer from "@/components/Spacer"
import WideCardsDisplay from "@/components/WideCardsDisplay"
import {nextProjectsData, reactProjectsData, pythonProjectsData, wordpressProjectsData} from "./data"
import Hero from "@/components/Hero"

// src/pages/Home.tsx
const Home = () => {
  return (
    <div className="bg-[#030221] text-white">
      <Hero />
      <Spacer />
      <WideCardsDisplay cards={nextProjectsData} heading="Projets Next" />
      <WideCardsDisplay cards={reactProjectsData} heading="Projets React" />
      <WideCardsDisplay cards={pythonProjectsData} heading="Projets Python" />
      <WideCardsDisplay cards={wordpressProjectsData} heading="Projets Wordpress" />
    </div>
  )
}

export default Home