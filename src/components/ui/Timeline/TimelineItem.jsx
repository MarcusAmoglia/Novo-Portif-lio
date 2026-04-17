const TimelineItem = ({ status, titulo, instituicao, badge }) => {
    return (
        <div className="relative pl-8 pb-10 last:pb-0 text-left">
            <div className="absolute left-[5px] top-2 bottom-0 w-[2px] bg-white/10"></div>
            
            <div className="absolute left-0 top-1.5 w-3 h-3 bg-[#00eeff] rounded-full shadow-[0_0_10px_#00eeff] z-10"></div>
            
            <div className="flex flex-col items-start">
                <span className="text-[#00eeff] text-xs font-semibold tracking-wider uppercase mb-2">
                    {status}
                </span>
                
                <div className="bg-[#14141e] rounded-xl p-5 border border-white/5 w-full hover:border-[#00eeff]/20 transition-colors">
                    <h3 className="text-white font-bold text-lg mb-1">{titulo}</h3>
                    <p className="text-gray-400 text-sm mb-4">{instituicao}</p>
                    
                    <span className="inline-block bg-[#8b5cf6]/20 text-[#a78bfa] text-[10px] font-bold px-3 py-1 rounded-md uppercase border border-[#8b5cf6]/30">
                        {badge}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TimelineItem