import PrimaryButton from "../buttons/PrimaryButton"
import play from "../../assets/images/icons/Play.png"

function AdoptionBanner() {

    return (
        <>
            <div style={{
                background: "url(/images/banners/home-banner-adoption.png) no-repeat center center",
                backgroundSize: "contain",
            }} className="w-[100%]  h-[379px] hidden lg:block">
                <div className="pt-[64px] pl-[85px]">
                    <h2 className="text-[52px] text-primaryColors-primaryDark leading-[68px] font-[700] font-gilroy">Adoption</h2>
                    <h3 className="text-primaryColors-primaryDark text-[36px] font-[700] font-gilroy">We need help. so do they.</h3>
                    <p className="font-[500] text-[12px] leading-[18px] max-w-[250px] text-neutralColors-80 font-gilroy">Adopt a pet and give it a home,
                        it will be love you back unconditionally.</p>
                    <div className="flex gap-[10px] mt-[20px]">
                        <PrimaryButton style={{ border: "solid 1.5px #004559", background: "transparent", color: "#003459", display: "flex", gap: "6px" }}><span>View Intro</span> <img src={play} alt="Play icon" loading="lazy" /></PrimaryButton>
                        <PrimaryButton style={{ background: "#003459", color: "#FFF" }}>Explore Now</PrimaryButton>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AdoptionBanner
