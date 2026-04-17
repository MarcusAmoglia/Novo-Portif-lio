const SkillCard = ({ titulo, icone, itens }) => {
    return (
        <div className="bg-[#14141e] rounded-2xl p-6 border border-[#00eeff]/10 hover:border-[#00eeff]/30 transition-all duration-300 w-full text-left">
            <div className="flex items-center gap-3 mb-6">
                <span className="text-[#8b5cf6] text-2xl">{icone}</span>
                <h3 className="text-xl font-bold text-white">{titulo}</h3>
            </div>
            
            <ul className="space-y-4">
                {itens.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                        <div className="w-1.5 h-1.5 bg-[#8b5cf6] rounded-full shrink-0 mt-1.5"></div>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SkillCard