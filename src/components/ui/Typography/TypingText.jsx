import { useState, useEffect } from 'react'

const TypingText = () => {
    const [indice, setIndice] = useState(0)
    const [visivel, setVisivel] = useState(true)
    
    const frases = [
        "Product Owner",
        "QA Tester",
        "Engenheiro de Software"
    ]
    
    useEffect(() => {
        const ciclo = setTimeout(() => {
            setVisivel(false)
            
            setTimeout(() => {
                setIndice((anterior) => (anterior + 1) % frases.length)
                
                setTimeout(() => {
                    setVisivel(true)
                }, 500)
            }, 500)
        }, 3000)
        
        return () => clearTimeout(ciclo)
    }, [indice])
    
    return (
        <span className="inline-flex items-center">
            <span 
                className={`
                    text-[#00eeff] font-medium
                    transition-opacity duration-500
                    ${visivel ? 'opacity-100' : 'opacity-0'}
                `}
            >
                {frases[indice]}
            </span>
        
        </span>
    )
}

export default TypingText