const HeroImage = ({ src, alt }) => {
    return (
        <div className="flex justify-center">
            <div className="relative">
                <div className="absolute inset-0 bg-[#00eeff]/20 rounded-full blur-3xl"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-[#00eeff]/30 overflow-hidden shadow-2xl shadow-[#00eeff]/20">
                    <img src={src} alt={alt} className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    )
}

export default HeroImage