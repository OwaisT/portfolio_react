import WideCard from "../components/WideCard"
import ProjectOrbWeber from "../assets/images/projects/project-orb-weber.png"

// src/pages/Home.tsx
const Home = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome to My Portfolio</h1>
      <WideCard
        image={ProjectOrbWeber}
        imgAlt="Project 1"
        head="Project 1"
        desc="This is a description of Project 1. It showcases my skills in web development."
        link="/projects/project1"
      />
    </div>
  )
}

export default Home