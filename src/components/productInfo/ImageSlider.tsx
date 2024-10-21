import { useEffect, useRef, useState } from "react";
import { dogsWithCostumers } from "../../data/dogsWithCostumersData";

function ImageSlider() {



    const divRef = useRef(null);
    const [sliderBulletsAmount, setSliderBulletsAmount] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const [activeBulletIndex, setActiveBulletIndex] = useState(0)

    useEffect(() => {
        if (divRef.current) {
            const calculatedWidth = divRef.current.offsetWidth;
            const entireSlideWidth = (240 + 20) * dogsWithCostumers.length; // 240px image width + 20px gap
            const bullets = Math.ceil(entireSlideWidth / calculatedWidth);
            setSliderBulletsAmount(bullets);
        }
    }, [divRef]);

    function handleBullet(i: number) {
        setTranslateX(i * (-260));
        setActiveBulletIndex(i)
        // Adjust as necessary depending on actual slide width
    }

    return (
        <section className="py-[40px]">
            <h2 className="text-[24px]">Our lovely customer</h2>
            <div className="relative w-[100%] overflow-hidden mt-[10px]">
                <div
                    style={{ transform: `translateX(${translateX}px)` }}  // Corrected the transform syntax
                    ref={divRef}
                    className="flex gap-[20px] w-[100%] h-[230px] transition-transform duration-300"  // Added smooth transition
                >
                    {dogsWithCostumers?.map((image, index) => (
                        <img
                            key={index}
                            className="w-[240px] rounded-[10px]"
                            src={image.imgSrc}
                            alt={`dog ${index}`}
                            loading="lazy"
                        />
                    ))}
                </div>

                {/* Slider bullets rendered below the images */}
                <div className="flex justify-center mt-4">
                    {Array.from({ length: sliderBulletsAmount + 1 }).map((_, index) => (
                        <div
                            onClick={() => handleBullet(index)}
                            key={index}
                            className={`${activeBulletIndex === index ? "w-[22px] h-[9px] bg-primaryColors-primaryDark rounded-[7.5px]" : "w-[9px] h-[9px] bg-neutralColors-20 rounded-[50%]"}  cursor-pointer  mx-[5px]`}
                        ></div>
                    ))}
                </div>
            </div></section>
    );
}

export default ImageSlider;
