import { FaLinkedin, FaGithub } from 'react-icons/fa'

const SocialIcons = ({ tamanho = "md", cor = "azul" }) => {
    const socialLinks = [
        { 
            href: "https://www.linkedin.com/in/marcus-amoglia-464071361", 
            icon: FaLinkedin, 
            label: "LinkedIn" 
        },
        { 
            href: "https://github.com/MarcusAmoglia", 
            icon: FaGithub, 
            label: "GitHub" 
        }
    ]
    
    const tamanhos = {
        sm: "w-8 h-8 text-base",
        md: "w-12 h-12 text-xl",
        lg: "w-14 h-14 text-2xl"
    }
    
    const coresEstilos = {
        azul: "text-gray-400 hover:text-[#00eeff]",
        branco: "text-gray-400 hover:text-white",
        preto: "text-gray-600 hover:text-black"
    }
    
    return (
        <div className="flex gap-4 pt-4">
            {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                    <a 
                        key={social.label}
                        href={social.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`
                            ${tamanhos[tamanho]} 
                            rounded-full bg-gray-800/50 
                            flex items-center justify-center 
                            ${coresEstilos[cor]}
                            transition-all duration-300 
                            hover:bg-gray-800 hover:scale-110
                        `}
                        aria-label={social.label}
                    >
                        <Icon />
                    </a>
                )
            })}
        </div>
    )
}

export default SocialIcons