import Profile from '../../../../assets/Profile.jpeg';
import Logo from '../../../../assets/Logo.png';

const Hero = () => {
  

  return (

    <section id='hero-section'>
      <header id='header' className="flex justify-between items-center text-xs px-16 mt-4">
        <img id='logo' src={Logo} alt="Logo: </marcos.dev>" />
        <div id='header-buttons' className="flex justify-end items-center">
          <button className="border-1 rounded-lg px-6 py-2.5 mx-2 my-4 font-semibold">Sobre mim</button>
          <button className="bg-white text-black border-1 rounded-lg px-8 py-2.5 font-semibold">Contato</button>
        </div>
      </header>

      <div id='hero-content' className='flex flex-col items-center mt-20'>
        <img id='hero-pic' src={Profile} alt="Foto de perfil" className="h-50 rounded-full" />
        <h1 className = "text-6xl font-bold text-center mb-1 mt-3">Marcos do Valle!</h1>
        <h2 className="text-center text-lg font-semibold">Eu programo com foco e estilo 🍿</h2>

        <p className="text-center mt-4 inline-block">
          Olá, eu sou o Marcos do Valle, um desenvolvedor apaixonado por criar experiências digitais incríveis. <br /> 
          Aqui você encontrará meus projetos, habilidades e muito mais!
        </p>

        <div id='hero-buttons' className="flex justify-center mt-8">
          <button className="bg-black text-white border-1 px-6 py-2 rounded-full mr-8">Meu Curriculo</button>
          <button className="bg-black text-white border-1 px-6 py-2 rounded-full">Entre em Contato</button>
        </div>
      </div>
    </section>
    
  )
}

export default Hero
