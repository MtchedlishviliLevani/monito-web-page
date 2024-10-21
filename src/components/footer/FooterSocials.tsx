import instagram from "../../assets/images/icons/instagram.svg"
import twitter from "../../assets/images/icons/twitter.svg"
import youtube from "../../assets/images/icons/youtube.svg"
import facebook from "../../assets/images/icons/facebook.svg"
function FooterSocials() {
    return (
        <div className="flex justify-center gap-[40px] md:justify-end mb-[20px] md:mb-[40px]">
            <img src={instagram} alt="instagram logo" loading="lazy" />
            <img src={twitter} alt="instagram logo" loading="lazy" />
            <img src={youtube} alt="instagram logo" loading="lazy" />
            <img src={facebook} alt="instagram logo" loading="lazy" />
        </div>
    )
}

export default FooterSocials
