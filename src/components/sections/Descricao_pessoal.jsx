import HeroBadge from './HeroBadge'
import SocialIcons from './SocialIcons'
import ContactButton from '../ui/Buttons/Contact_button'
import TypingText from '../ui/Typography/TypingText'

const Descricao_Pessoal = () => {
    return (
        <section className="bg-gray-900 min-h-screen pt-32 md:pt-40 pb-32 md:pb-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                    
                    <div className="w-full md:w-1/2 text-left space-y-6">
                        <HeroBadge />
                        
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                            <span className="text-white">Marcus</span>
                            <span className="text-[#00eeff] drop-shadow-[0_0_10px_#22E3FF]"> Amoglia</span>
                        </h1>
                        
                        <h3 className="text-xl md:text-2xl text-gray-300">
                            Atuando como{' '}
                            <TypingText/>
                        </h3>
                        
                        <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                            Graduando em Engenharia de Software e Desenvolvimento de Sistemas (IF Fluminense), 
                            com formação complementar em QA Testing. Profissional com visão híbrida, focado na 
                            interseção entre estratégia de produto (PO), análise de processos e a garantia da 
                            excelência técnica.
                        </p>
                        
                        <SocialIcons tamanho="md" cor="azul" />
                        <ContactButton texto="Entre em Contato" variante="solid" tamanho="lg" />
                    </div>
    
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <div className="relative w-full max-w-sm md:max-w-lg lg:max-w-lg h-56 sm:h-64 md:h-72 lg:h-80 rounded-2xl border-4 border-[#00eeff]/30 overflow-hidden shadow-2xl shadow-[#00eeff]/20">
                            <iframe 
                                className="w-full h-full object-cover"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1"
                                title="Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Descricao_Pessoal