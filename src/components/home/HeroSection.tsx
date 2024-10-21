import banner from "../../assets/images/woman-with-dog.png"
import rectangle from "../../assets/images/rectangles/Rectangle 2.png"
import rectangle1 from "../../assets/images/rectangles/Rectangle 1.png"
import redctangle2Desk from "../../assets/images/rectangles/Rectangle2desktop.png"
import rectangle1Desk from "../../assets/images/rectangles/Rectangle1Desk.png"
function HeroSection() {
    return (

        <section className="relative flex-grow overflow-hidden right-[-10px] xs:right-[-25px] sm:right-[-35px]">
            <img className="relative z-[3] m-auto max-w-full" src={banner} alt="Banner" loading="lazy" />
            <img className="absolute z-[2] top-[17px] left-0 w-[200%] sm:top-[40px] md:hidden" src={rectangle} alt="Rectangle" />
            <img src={redctangle2Desk} className="hidden md:inline md:absolute md:z-[2]  md:left-0 md:h-[310px] md:w-[620px] md:top-[84px]" alt="" loading="lazy" />
            <img className="absolute z-[1] top-[96px] left-[4%] xs:left-[10%] sm:left-[18%] md:hidden" src={rectangle1} alt="Rectangle 1" loading="lazy" />
            <img className="md:absolute md:z-[1] md:top-[163px] md:left-[-6px] rotate-[6deg] md:w-[85%] hidden   md:inline" src={rectangle1Desk} alt="Rectangle 1" loading="lazy" />
        </section>

    )
}

export default HeroSection
