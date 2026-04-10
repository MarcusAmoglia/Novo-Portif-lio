import FooterLink from "./FooterLink"
import SocialLink from "./SocialLinks"

const Footer = () => {
    return (
        <footer className="bg-black/70 py-6 text-center">
            <div className="grid grid-cols-3 items-baseline">
                <SocialLink/>
                <p className="text-grey-500 text-lm items-center text-center">Marcus Amoglia &copy; {new Date().getFullYear()}</p>
                </div>
        </footer>
    )
}

export default Footer