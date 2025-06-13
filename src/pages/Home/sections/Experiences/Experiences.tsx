

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
            <h2 className="text-base font-semibold">Desenvolvedor e Educador -{" "} 
              <span className="text-gray-400">Mermãs Digitais</span>
            </h2>
            <span className="text-gray-500 text-sm">out 2024 - Presente</span>
          </div>
          <p className="text-gray-300 mt-2">
            No projeto Mermas Digitais, atuo como educador e desenvolvedor de software e conteúdos voltados para 
            inclusão tecnológica de meninas do ensino médio da rede pública. Minhas atividades incluem: Aulas e workshops, 
            Desenvolvimento de plataforma educacional.
          </p>
          <p className="text-purple-600 mt-2">Tecnologias: Figma, HTML, CSS, JavaScript, ferramentas de robótica e metodologias ágeis {"(Kanban)"}.</p>
        </div>
        
        <div id="experience-item" className="grid grid-cols-1 mb-4">
          <div id="item-header" className="flex flex-row justify-between items-center">
            <h2 className="text-base font-semibold">Diretor de Recursos Humanos / Desenvolvedor de Software -{" "} 
              <span className="text-gray-400">Tech Júnior</span>
            </h2>
            <span className="text-gray-500 text-sm">Jan 2024 - Presente</span>
          </div>
          <p className="text-gray-300 mt-2">
            Na Tech Junior, atuo no desenvolvimento de software. Além de já ter sido responsável pelo setor de Recursos Humanos,
            onde implementei melhorias significativas nos processos de recrutamento e integração de novos membros.
          </p>
          <p className="text-purple-600 mt-2">Tecnologias: JavaScript, HTML/CSS, React, Flutter, Java e metodologias ágeis (Kanban e Scrum).</p>
        </div>

        <div id="experience-item" className="grid grid-cols-1 mb-4">
          <div id="item-header" className="flex flex-row justify-between items-center">
            <h2 className="text-base font-semibold">Iniciação Científica -{" "} 
              <span className="text-gray-400">IFMA</span>
            </h2>
            <span className="text-gray-500 text-sm">Nov 2024 - Presente</span>
          </div>
          <p className="text-gray-300 mt-2">
            Liderança de equipe multidisciplinar em atividades de Engenharia de Software, desenvolvendo um protótipo de 
            uma plataforma web de gerenciamento de alunos egressos. Minhas atividades incluem: Coordenação de equipe, 
            Prototipação, Análise de Dados, Pesquisa e documentação.
          </p>
          <p className="text-purple-600 mt-2">Tecnologias: Figma, metodologias ágeis (Kanban e Scrum).</p>
        </div>
      </div>
    </section>

  )
}

export default Experiences
