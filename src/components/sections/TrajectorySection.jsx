import TimelineItem from '../ui/Timeline/TimelineItem';

const TrajectorySection = () => {
    return (
        <section id="trajectory" className="py-20 px-6 max-w-4xl mx-auto w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Formação Acadêmica
            </h2>
            
            <div className="ml-2 md:ml-8">
                <TimelineItem 
                    status="Em andamento"
                    titulo="Engenharia de Software"
                    instituicao="Estácio"
                    badge="Graduação"
                />
                <TimelineItem 
                    status="Em andamento"
                    titulo="Técnico em Desenvolvimento de Sistemas"
                    instituicao="Instituto Federal Fluminense (IF)"
                    badge="Técnico"
                />
                <TimelineItem 
                    status="Especialização"
                    titulo="Formação QA Tester"
                    instituicao="Qualidade de Software e Automação de Testes"
                    badge="Especialização"
                />
            </div>
        </section>
    )
}

export default TrajectorySection;