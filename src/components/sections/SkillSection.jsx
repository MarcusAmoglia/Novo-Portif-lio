import SkillCard from '../ui/Cards/SkillCard';

const SkillsSection = () => {
    return (
        <section id="skills" className="py-20 px-6 max-w-6xl mx-auto w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Habilidades Técnicas & Estratégicas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <SkillCard 
                    titulo="Tech & QA"
                    icone="</>" 
                    itens={[
                        "SQL (PostgreSQL) & Análise de Dados",
                        "Python (Automação/Scripting)",
                        "Testes Manuais e Planejamento de QA",
                        "Análise de Falhas Sistêmicas",
                        "Git & Versionamento",
                        "Java/Spring Boot (Aprendendo)"
                    ]}
                />
                <SkillCard 
                    titulo="Processos & Estratégia"
                    icone="♟️" 
                    itens={[
                        "Product Ownership (Visão de Produto)",
                        "Metodologias Ágeis (Scrum/Kanban)",
                        "Levantamento de Requisitos",
                        "Mapeamento de Processos (PDCA)",
                        "Comunicação Técnica/Estratégica"
                    ]}
                />
            </div>
        </section>
    )
}

export default SkillsSection;