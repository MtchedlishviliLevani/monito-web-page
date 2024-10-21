import { Link } from "react-router-dom"
import logoMobile from "../../assets/images/logos/logoMobile.png"
import logoDesktop from "../../assets/images/logos/logoDesktop.png"

function FooterLegalInfo() {
    return (
        <div className="m-auto flex flex-col gap-[10px] md:flex-row md:justify-between md:items-center">
            <div className="pb-[20px] md:pb-0">
                <img className="hidden md:block m-auto" src={logoDesktop} alt="company logo" loading="lazy" />
                <img className="md:hidden m-auto" src={logoMobile} alt=" company logo" loading="lazy" />
            </div>
            <div className="flex gap-[10px] text-neutralColors-60 text-[12px] font-[500] justify-center">
                <Link to="#">Terms of Service</Link>
                <Link to="#">Privacy Policy</Link>
            </div>
            <p className="text-neutralColors-60 font-[400] text-center">© 2022 Monito. All rights reserved.</p>
        </div>
    )
}

export default FooterLegalInfo
