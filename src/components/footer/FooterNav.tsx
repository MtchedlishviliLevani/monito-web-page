import { Link } from "react-router-dom"
function FooterNav() {
    return (
        <nav className="mt-[20px] md:mt-0">
            <ul className="flex justify-between items-center text-neutralColors-100 text-[16px] leading-[24px] md:gap-[60px] md:justofy-start">
                <Link to="/">Home</Link>
                <Link to="/category">Category</Link>
                <Link to="#">About</Link>
                <Link to="/contact">Contact</Link>
            </ul>
        </nav>
    )
}

export default FooterNav
