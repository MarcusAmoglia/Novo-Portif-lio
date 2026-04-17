import ProjectCards from '../ui/Cards/ProjectsCards'

const ProjectsSection = () => {
    const projetos = [
        {
            id: 1,
            titulo: "Simulador Corporativo",
            descricao: "Simulador de gestão empresarial com foco em análise de mercado e tomada de decisão estratégica.",
            videoId: "dQw4w9WgXcQ",
            tags: ["Product Owner", "QA Testing", "Análise de Dados"]
        },
        {
            id: 2,
            titulo: "Educa Sustenta",
            descricao: "Plataforma educacional com trilhas de conhecimento interativas para aprendizado sustentável.",
            videoId: "dQw4w9WgXcQ",
            tags: ["Desenvolvimento", "Educação", "UX/UI"]
        }

        
    ]

    return (
        <section className="py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    <span className="text-white uppercase">
                        Projetos em Destaque
                    </span>
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                    {projetos.map((projeto) => (
                        <ProjectCards 
                            key={projeto.id}
                            titulo={projeto.titulo}
                            descricao={projeto.descricao}
                            videoId={projeto.videoId}
                            tags={projeto.tags}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection