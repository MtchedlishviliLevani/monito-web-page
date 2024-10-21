import { useContext } from "react"
import translations from "../../data/translations"
import { globalContext } from "../../context"
import PrimaryButton from "../buttons/PrimaryButton";
import play from "../../assets/images/icons/Play.png"
type Language = 'en' | 'es' | 'fr';

function PetsInfo({ align = "left" }) {
    const { language } = useContext(globalContext)
    const translation = translations[language as Language];

    return (
        <div className="relative">
            <h1 className={`text-primaryColors-primary_light text-[30px] md:text-[46px]  font-[800] leading-[46px] xl:text-[60px] xl:leading-[68px] ${align === 'center' ? 'text-center' : 'text-left'}`}>{translation.friendHeading}</h1>
            <h2 className="text-primaryColors-primary_light text-[24px] md:text-[28px] font-[700] leading-[38px] xl:text-[46px] xl:leading-[60px]">{translation.funHeading}</h2>
            <p className="mt-[12px] line-clamp-3 text-[12px] sm:text-[16px] md:text-[16px] text-neutralColors-60 font-[500]">{translation.description}</p>
            <div className=" mt-[32px] flex items-center gap-[14px] justify-center md:justify-start"><PrimaryButton style={{ border: "solid 1.5px #004559", background: "transparent", color: "#003459", display: "flex", gap: "6px", alignItems: "center" }}><span className="text-[12px] sm:text-[14px] md:text-[18px]">{translation.viewIntro}</span> <img src={play} alt="play icon" loading="lazy" /></PrimaryButton>
                <PrimaryButton style={{ background: "#003459", color: "#FFF" }}>{translation.exploreNow}</PrimaryButton>
            </div>
        </div>
    )
}

export default PetsInfo
