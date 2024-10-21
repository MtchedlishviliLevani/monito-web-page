import PetsInfo from "../common_components/PetsInfo";
import girlWithDog from "../../assets/images/adult-girl-with-dog.png";
import rectangle9 from "../../assets/images/rectangles/rectangle9.png";
import rectangle1 from "../../assets/images/rectangles/Rectangle-1.png";
import banner from "../../assets/images/banners/Banner1.png";

import play from "../../assets/images/icons/Play.png"

import PrimaryButton from "../buttons/PrimaryButton";

function PetsBanner1() {
    return (
        <section>
            {/* Mobile */}
            <div className="rounded-[20px] overflow-hidden  xl:hidden">
                <div className="order-1 bg-secondaryColors-default py-[20px] px-[10px] relative z-[3]">
                    <div className="h-[253px] px-[20px]"> <PetsInfo /></div>
                    <img
                        className="absolute z-[-1]  right-0 top-[-33px] xs:top-[-12%]"
                        src={rectangle9}
                        alt="Rectangle"
                        loading="lazy"
                    />
                </div>

                <div className="bg-primaryColors-primaryDark relative ">
                    <img
                        className="m-auto relative z-[10]"
                        src={girlWithDog}
                        alt="Girl with Dog"
                        loading="lazy"
                    />
                    <img
                        className="absolute left-0 bottom-0 w-[100%] "
                        src={rectangle1}
                        alt="Rectangle"
                        loading="lazy"
                    />
                </div>
            </div>

            <div
                style={{
                    backgroundImage: `url(${banner})`,
                    width: "100%",
                    height: "378px",
                    backgroundRepeat: "no-repeat",
                }}
                className="hidden xl:inline-block relative xl:bg-cover 2xl:bg-contain"
            >

                <div className="2xl:max-w-[480px] xl:max-w-[393px] absolute left-[60%] 2xl:left-[55%] top-[30px]">
                    <div className="px-[10px]">
                        <h1 className={`text-primaryColors-primary_light  font-[800] xl:text-[40px] 2xl:text-right leading-[46px] 2xl:text-[50px]  `}>One more friend</h1>
                        <h2 className="text-primaryColors-primary_light text-[28px] xl:text-[24px] font-[700] 2xl:text-right leading-[38px] 2xl:text-[40px] 2xl:leading-[60px]">Thousands more fun!</h2>
                        <p className="mt-[12px] text-[12px] md:text-[16px] xl:text-[14px] 2xl:text-[12px] 2xl:text-right  text-neutralColors-60 font-[500]">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
                        <div className=" mt-[32px] flex gap-[14px] xl:gap-[8px] justify-center ">
                            <PrimaryButton style={{ border: "solid 1.5px #004559", background: "transparent", color: "#003459", display: "flex", gap: "6px" }}><span>View Intro</span> <img src={play} alt="Play icon" loading="lazy" /></PrimaryButton>
                            <PrimaryButton style={{ background: "#003459", color: "#FFF" }}>Explore Now</PrimaryButton>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default PetsBanner1;
