import SocialLink from "./SocialLinks"

const Footer = () => {
    return (
        <footer className="bg-black/70 py-6 text-center">
            <div className="grid md:flex-row  items-baseline">
                <SocialLink/>
                <p className="text-gray-500 text- items-center text-center">Marcus Amoglia &copy; {new Date().getFullYear()}</p>
                </div>
        </footer>
    )
}

export default Footer