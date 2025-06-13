import Blog from '../../../../assets/blog.png';
import Gastos from '../../../../assets/gastos.png';
import Crud from '../../../../assets/crud.png';
import Tech from '../../../../assets/tech.png';

const Projects = () => {
  

  return (

    <section id="projects-section" className="grid grid-cols-1 items-center mt-28 w-full">

      <div id="projects-header" className="flex flex-col items-center">
        <h1 className="text-4xl font-extrabold">PROJETOS</h1>
        <h3 className="text-sm font-semibold tracking-widest bg-gradient-to-r from-violet-600 to-orange-400 bg-clip-text text-transparent inline-block">EXPLORE</h3>
      </div>

      <div id="projects-content" className="grid grid-cols-1 sm:grid-cols-2 sm:px-10 md:px-20 lg:px-50 xl:px-60 items-center w-full px-10 mt-8">
        <div className="border-1 border-gray-700 rounded-lg p-4 m-4 bg-black text-white">
          <img src={Gastos} alt="" className='rounded-md w-full h-38 mb-4' />
          <h2 className="text-xl font-bold">Gerenciador de Finanças Familiar</h2>
          <p className="mt-2 text-gray-300">React.js, Typescript, Node.js, MongoDB</p>
          <a href="https://github.com/marcos-valle/transacoes-frontend" className="border-1 border-gray-700 rounded-md mt-4 w-full text-center text-gray-300 py-1 inline-block hover:bg-violet-950">Acessar</a>
        </div>
        
        <div className="border-1 border-gray-700 rounded-lg p-4 m-4 bg-black text-white">
          <img src={Crud} alt="" className='rounded-md w-full h-38 mb-4' />
          <h2 className="text-xl font-bold">CRUD</h2>
          <p className="mt-2 text-gray-300">JavaScript, Node.js, PostgreSQL</p>
          <a href="#" className="border-1 border-gray-700 rounded-md mt-4 w-full text-center text-gray-300 py-1 inline-block hover:bg-violet-950">Acessar</a>
        </div>
        
        <div className="border-1 border-gray-700 rounded-lg p-4 m-4 bg-black text-white">
          <img src={Tech} alt="" className='rounded-md w-full h-38 mb-4' />
          <h2 className="text-xl font-bold">Aprimore Hub</h2>
          <p className="mt-2 text-gray-300">Dart, Flutter</p>
          <a href="https://github.com/ifma-techjr/checkin_app" className="border-1 border-gray-700 rounded-md mt-4 w-full text-center text-gray-300 py-1 inline-block hover:bg-violet-950">Acessar</a>
        </div>
        
        <div className="border-1 border-gray-700 rounded-lg p-4 m-4 bg-black text-white">
          <img src={Blog} alt="" className='rounded-md w-full h-38 mb-4' />
          <h2 className="text-xl font-bold">Blog de Filmes</h2>
          <p className="mt-2 text-gray-300">Ruby on Rails, PostgreSQL</p>
          <a href="https://github.com/marcos-valle/blog_app" className="border-1 border-gray-700 rounded-md mt-4 w-full text-center text-gray-300 py-1 inline-block hover:bg-violet-950">Acessar</a>
        </div>

      </div>
    </section>
    
  )
}

export default Projects
