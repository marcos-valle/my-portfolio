

const Skills = () => {
  

  return (

    <section id="skills-section" className="grid grid-cols-1 items-center mt-28 w-full">

        <div id="skills-header" className="flex flex-col items-center">
            <h1 className="text-4xl font-extrabold">HABILIDADES</h1>
            <h3 className="text-sm font-semibold tracking-widest bg-gradient-to-r from-violet-600 to-orange-400 bg-clip-text text-transparent inline-block">TECNOLOGIAS</h3>
        </div>  

        <div id="skills-content" className="grid grid-cols-1 items-center w-full px-10">
            <div id="row-1" className="grid grid-cols-2 sm:flex sm:flex-row justify-center items-center gap-4 mt-8">
                <p className="border-1 border-indigo-700 w-46 rounded-full px-8 py-2 bg-black text-gray-300 text-center">Typescript</p>
                <p className="border-1 border-indigo-700 w-46 rounded-full px-8 py-2 bg-black text-gray-300 text-center">Node.js</p>
                <p className="border-1 border-indigo-700 w-46 rounded-full px-8 py-2 bg-black text-gray-300 text-center">Javascript</p>
                <p className="border-1 border-indigo-700 w-46 rounded-full px-8 py-2 bg-black text-gray-300 text-center">JAVA</p>
                <p className="border-1 border-indigo-700 w-46 rounded-full px-8 py-2 bg-black text-gray-300 text-center">React.js</p>
                <p className="border-1 border-indigo-700 w-46 rounded-full px-8 py-2 bg-black text-gray-300 text-center">PostgreSQL</p>
            </div>
            <div id="row-2" className="grid grid-cols-2 sm:flex sm:flex-row justify-center items-center gap-4 mt-4">
                <p className="border-1 border-indigo-700 w-46 rounded-full px-8 py-2 bg-black text-gray-300 text-center">Tailwind CSS</p>
                <p className="border-1 border-indigo-700 w-46 rounded-full px-8 py-2 bg-black text-gray-300 text-center">MongoDB</p>
                <p className="border-1 border-indigo-700 w-46 rounded-full px-8 py-2 bg-black text-gray-300 text-center">Git</p>
                <p className="border-1 border-indigo-700 w-46 rounded-full px-8 py-2 bg-black text-gray-300 text-center">GitHub</p>
            </div>
        </div>
    </section>
    
  )
}

export default Skills
