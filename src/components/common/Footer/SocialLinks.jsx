import { FaLinkedin, FaGithub, FaVoicemail } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const SocialLink = () => {
    return (
        <>
            <div className="px-4 flex gap-4 items-center ">
                <a href="https://www.linkedin.com/in/marcus-amoglia-464071361/" 
                target="_blank" 
                rel="noopener noreferrer"
                className='flex gap-1 justify-center items-center text-lg text-gray-400 hover:text-[#22E3FF]'><FaLinkedin/>Linkedin</a>
                
                <a href="https://github.com/MarcusAmoglia" 
                target="_blank" 
                rel="noopener noreferrer"
                className='flex gap-1 justify-center items-center text-lg text-gray-400 hover:text-[#22E3FF]'><FaGithub/>GitHub</a>
            
                <a href="mailto:marcus.amoglia7@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='flex gap-1 justify-center items-center text-lg text-gray-400 hover:text-[#22E3FF]'><MdEmail/>E-mail</a>

            </div>
        </>

    
    
    
    )
}

export default SocialLink

