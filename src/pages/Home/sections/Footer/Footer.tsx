import Linkedin from '../../../../assets/linkedin.png';
import Github from '../../../../assets/github.png';
import Instagram from '../../../../assets/instagram.png';

const FooterSection = () => {
  

  return (

    <section id="footer-section" className="flex flex-col justify-center items-center w-full h-10 mt-28 mb-18 bg-black">

      <div id='btns-social-network' className='flex justify-between gap-18 mb-18'>
          <a href="https://github.com/marcos-valle" className='w-10' id='github-link'>
            <img src={Github} alt="" className='' />
          </a>
          <a href="https://linkedin.com/in/marcos-do-valle" className='w-10' id='linkedin-link'>
            <img src={Linkedin} alt="" className='' />
          </a>
          <a href="https://instagram.com/valle.marcos/" className='w-10' id='instagram-link'>
            <img src={Instagram} alt="" className='' />
          </a>
        </div>

      <p className="text-gray-400 text-xs">Feito com 💜 por Marcos do Valle · © 2025</p>
      <p className="text-gray-400 text-xs">Desenvolvido com React.js, Typescript e Tailwind CSS. Deploy com Vercel.</p>
    </section>
    
  )
}

export default FooterSection
