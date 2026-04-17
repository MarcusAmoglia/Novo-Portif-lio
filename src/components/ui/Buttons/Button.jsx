const Button = ({ 
    cores = "azul", 
    variante = "solid",   
    tamanho = "md",      
    aoClicar, 
    children,
    className = "",
    tipo = "button",
    icone = null,
    iconePosicao = "direita",  
    desabilitado = false,
    href = null  
}) => {
    
    const estilosBase = {
        azul: {
            solid: "bg-[#00eeff] text-black hover:bg-[#22E3FF]",
            outline: "border-2 border-[#00eeff] text-[#00eeff] hover:bg-[#00eeff]/10",
            ghost: "text-[#00eeff] hover:bg-[#00eeff]/10"
        },
        preto: {
            solid: "bg-[#111] text-white hover:bg-[#222]",
            outline: "border-2 border-gray-700 text-gray-300 hover:border-[#00eeff] hover:text-[#00eeff]",
            ghost: "text-gray-400 hover:text-[#00eeff] hover:bg-gray-800/50"
        },
        branco: {
            solid: "bg-white text-black hover:bg-gray-100",
            outline: "border-2 border-white text-white hover:bg-white/10",
            ghost: "text-white hover:bg-white/10"
        }
    }
    
    const tamanhos = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    }
    
    const estiloCor = estilosBase[cores]?.[variante] || estilosBase.azul.solid
    const estiloTamanho = tamanhos[tamanho] || tamanhos.md
    
    const classes = `
        ${estiloCor}
        ${estiloTamanho}
        rounded-lg font-bold
        flex gap-2 items-center justify-center
        transition-all duration-300
        ${desabilitado ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 hover:shadow-lg'}
        ${className}
    `.trim()
    
    const conteudo = (
        <>
            {icone && iconePosicao === "esquerda" && <span className="text-xl">{icone}</span>}
            {children}
            {icone && iconePosicao === "direita" && <span className="text-xl">{icone}</span>}
        </>
    )
    
    if (href) {
        return (
            <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
                {conteudo}
            </a>
        )
    }
    
    return (
        <button onClick={aoClicar} type={tipo} disabled={desabilitado} className={classes}>
            {conteudo}
        </button>
    )
}

export default Button