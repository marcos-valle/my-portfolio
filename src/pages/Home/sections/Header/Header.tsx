import Logo from '../../../../assets/Logo.png';

const HeaderSection = () => {
  

  return (

    <section id="header-section" className='mb-40'>
        <header id='header' className="fixed top-0 left-0 right-0 z-50 h-18 w-full bg-black flex flex-row justify-center sm:justify-between items-center px-6 sm:px-22 xl:px-36">
            <img id='logo' src={Logo} alt="Logo: </marcos.dev>" className='w-34'/>
            <div id='header-buttons' className="flex justify-end items-center">
                <button className="border-1 rounded-lg bg-black px-4 py-1.5 sm:py-2.5 mx-2 my-4 font-semibold text-xs">Sobre mim</button>
                <button className="bg-white text-black border-1 rounded-lg px-6 py-1.5 sm:py-2.5 font-semibold text-xs">Contato</button>
            </div>
        </header>
    </section>
    
  )
}

export default HeaderSection