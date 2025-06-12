

const Experiences = () => {
  

  return (

    <section id="experiences-section" className="grid grid-cols-1 items-center mt-28 w-full">
      <div id="experiences-header" className="flex flex-col items-center">
        <h1 className="text-4xl font-extrabold">EXPERIÊNCIA</h1>
        <h3 className="text-sm font-semibold tracking-widest bg-gradient-to-r from-violet-600 to-orange-400 bg-clip-text text-transparent inline-block">ATIVIDADES E LIDERANÇAS</h3>
      </div>

      <div id="experiences-content" className="grid grid-cols-1 sm:px-10 md:px-20 lg:px-50 xl:px-60 items-center w-full px-10 mt-8">
        <div id="experience-item" className="grid grid-cols-1 mb-4">
          <div id="item-header" className="flex flex-row justify-between items-center">
            <h2 className="text-base font-semibold">Desenvolvedor Back-end -{" "} 
              <span className="text-gray-400">IFMA</span>
            </h2>
            <span className="text-gray-500 text-sm">Jan 2023 - Presente</span>
          </div>
          <p className="text-gray-300 mt-2">
            Atuo como desenvolvedor back-end no IFMA, onde sou responsável por desenvolver e manter sistemas internos, 
            garantindo a eficiência e segurança dos dados. Utilizo tecnologias como Node.js, Express e MongoDB para criar APIs robustas.
          </p>
          <p className="text-purple-600 mt-2">Tecnologias: React, Typescript.</p>
        </div>
        
        <div id="experience-item" className="grid grid-cols-1 mb-4">
          <div id="item-header" className="flex flex-row justify-between items-center">
            <h2 className="text-base font-semibold">Desenvolvedor Back-end -{" "} 
              <span className="text-gray-400">IFMA</span>
            </h2>
            <span className="text-gray-500 text-sm">Jan 2023 - Presente</span>
          </div>
          <p className="text-gray-300 mt-2">
            Atuo como desenvolvedor back-end no IFMA, onde sou responsável por desenvolver e manter sistemas internos, 
            garantindo a eficiência e segurança dos dados. Utilizo tecnologias como Node.js, Express e MongoDB para criar APIs robustas.
          </p>
          <p className="text-purple-600 mt-2">Tecnologias: React, Typescript.</p>
        </div>
      </div>
    </section>

  )
}

export default Experiences
