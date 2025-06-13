import Profile from '../../../../assets/Profile.jpeg';

const Hero = () => {
  

  return (

    <section id='hero-section'>
      <div id='hero-content' className='grid grid-cols-1 px-15 sm:px-20 items-center justify-items-center mt-20'>
        <div className='relative flex justify-center items-center mb-6 w-fit'>
          <div className="absolute inset-0 h-50 w-50 rounded-full bg-purple-600 blur-xl opacity-70 "></div>
          <img id='hero-pic' src={Profile} alt="Foto de perfil" className="h-50 relative z-10 rounded-full" />
        </div>
        
        <h1 className = "text-5xl font-bold text-center mb-1 mt-3">Marcos do Valle!</h1>
        
        <div id='hero-description' className='flex flex-row'>
          <h2 className="text-center text-lg text-gray-300 font-semibold">Eu programo com foco e{" "}
            <span className="bg-gradient-to-r from-violet-600 to-orange-400 bg-clip-text text-transparent">estilo</span>
            {" "}🍿
          </h2>
        </div>

        <p className="text-center mt-4 inline-block sm:px-10 md:px-20 xl:px-36">
          Olá! Atualmente, sou Desenvolvedor Back-End e graduando em Ciência da Computação
          que se diverte criando experiências digitais incríveis. Nesse meu cantinho você encontrará meus projetos, habilidades e mais!
        </p>

        <div id='hero-buttons' className="flex justify-between gap-6 mt-8">
          <a href='https://drive.google.com/file/d/1I8_Igjhs8rqpUHIVQ8_nUfAnGYeX4jUO/view?usp=sharing' className="bg-black text-white text-center border-1 border-gray-500 w-48 px-6 py-2 rounded-full hover:bg-violet-950">Meu Curriculo</a>
          <a href='mailto:marcos.vallesn@gmail.com' className="bg-black text-white text-center border-1 border-gray-500 w-48 px-6 py-2 rounded-full hover:bg-violet-950">Entre em Contato</a>
        </div>
      </div>
    </section>
    
  )
}

export default Hero
