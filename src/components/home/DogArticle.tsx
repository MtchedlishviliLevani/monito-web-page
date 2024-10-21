import { useState } from "react";
import DogCardArticle from "./DogCardArticle"
import PrimaryButton from "../buttons/PrimaryButton";
import leftArrow from "../../assets/images/icons/leftArrow.png"
import rightArrow from "../../assets/images/icons/rightArrow.png"
import { dogInfoData } from "../../data/dogInfoData";
function DogArticle() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3; // Number of cards to show at a time

    const handleNext = () => {
        if (currentIndex + itemsPerPage < dogInfoData.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    return (
        <section className="">
            <div className="flex  justify-between">
                <div>
                    <h4 className="text-[10px] md:text-[14px] font-SFPRO leading-[20px] text-black">You already know ?</h4>
                    <h2 className="font-700 text-[14px] md:text-[20px] font-SFPRO leading-[32px] text-primaryColors-primaryDark">Useful pet knowledge</h2>
                </div>
                <div className="flex gap-[10px] align-bottom">
                    <div onClick={handlePrevious}>   <PrimaryButton style={{ background: "transparent", border: "solid 1.5px #003459" }}><img src={leftArrow} alt="Left Icon" loading="lazy" /></PrimaryButton></div>
                    <div onClick={handleNext}>   <PrimaryButton style={{ background: "transparent", border: "solid 1.5px #003459" }}><img src={rightArrow} alt="Right Icon" loading="lazy" /></PrimaryButton></div>

                </div>
            </div>


            <div className="grid grid-cols-2 md:grid-cols-3 gap-[20px]">
                {dogInfoData.slice(currentIndex, currentIndex + itemsPerPage).map((value) => (
                    <div key={value?.id}>
                        <DogCardArticle
                            text={value?.text}
                            heading={value?.heading}
                            tag={value?.tag}
                            imgSrc={value?.imgSrc}
                        /></div>
                ))}
            </div>
        </section>
    )
}

export default DogArticle
