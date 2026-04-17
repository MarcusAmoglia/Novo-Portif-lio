import { useState } from 'react'

const ProjectCards = ({ titulo, descricao, videoId, tags }) => {
    const [videoTocando, setVideoTocando] = useState(false)
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

    return (
        <div className="flex flex-col bg-[#14141e] rounded-2xl overflow-hidden border border-[#00eeff]/20 hover:border-[#00eeff]/50 transition-all duration-300 w-full">
            
            <div className="relative w-full h-40 sm:h-48 bg-black shrink-0">
                {!videoTocando ? (
                    <>
                        <img 
                            src={thumbnailUrl}
                            alt={titulo}
                            className="w-full h-full object-cover object-center"
                        />
                        <div 
                            onClick={() => setVideoTocando(true)}
                            className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-all duration-300 flex items-center justify-center cursor-pointer"
                        >
                            <div className="w-12 h-12 bg-[#00eeff]/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="black">
                                    <polygon points="5 3 19 12 5 21 5 3" />
                                </svg>
                            </div>
                        </div>
                    </>
                ) : (
                    <iframe 
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
                        title={titulo}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}
            </div>
            
            <div className="p-5 sm:p-6 flex flex-col flex-1 text-left items-start w-full">
                <h3 className="text-xl font-bold text-[#00eeff] mb-2">{titulo}</h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                    {descricao}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-[#1a2c34] text-[#00eeff] text-xs px-3 py-1 rounded-full font-medium border border-[#00eeff]/10">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCards