import Experiences from "./sections/Experiences/Experiences";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Bg from "../../assets/Bg.png";

const Home = () => {
  

  return (

    <section className="relative flex-col justify-center w-full">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center-40 -z-10" style={{ backgroundImage: `url(${Bg})` }} />
      <div className="relative justify-center z-10">
        <Hero />
        <Skills />
        <Projects />
        <Experiences />
      </div>
    </section>
    
  )
}

export default Home
