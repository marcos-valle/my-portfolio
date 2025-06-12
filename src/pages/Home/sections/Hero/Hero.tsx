import Profile from '../../../../assets/Profile.jpeg';

const Hero = () => {
  

  return (

    <section id='hero-section'>
      <div id='hero-content' className='grid grid-cols-1 px-15 sm:px-20 items-center justify-items-center mt-20'>
        <img id='hero-pic' src={Profile} alt="Foto de perfil" className="h-50 rounded-full" />
        <h1 className = "text-5xl font-bold text-center mb-1 mt-3">Marcos do Valle!</h1>
        
        <div id='hero-description' className='flex flex-row'>
          <h2 className="text-center text-lg text-gray-300 font-semibold">Eu programo com foco e{" "}
            <span className="bg-gradient-to-r from-violet-600 to-orange-400 bg-clip-text text-transparent">estilo</span>
            {" "}🍿
          </h2>
        </div>

        <p className="text-center mt-4 inline-block sm:px-10 md:px-20 xl:px-36">
          Olá, eu sou o Marcos do Valle, um desenvolvedor back-end apaixonado por criar experiências digitais incríveis. 
          Aqui você encontrará meus projetos, habilidades e muito mais!
        </p>

        <div id='hero-buttons' className="flex justify-between gap-6 mt-8">
          <button className="bg-black text-white border-1 border-gray-500 w-48 px-6 py-2 rounded-full">Meu Curriculo</button>
          <button className="bg-black text-white border-1 border-gray-500 w-48 px-6 py-2 rounded-full">Entre em Contato</button>
        </div>
      </div>
    </section>
    
  )
}

export default Hero
