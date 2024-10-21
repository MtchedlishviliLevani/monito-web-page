import play from "../../assets/images/icons/Play.png";
import groupOfDogs from "../../assets/images/group-portrait-adorable-puppies 1.png";
import bigBlueRectangle from "../../assets/images/rectangles/category-banner-rectange-blue-big.png";
import rectangleBlue from "../../assets/images/rectangles/rectangle_blue.png";
import BigRectanguleBlueDesktop from "../../assets/images/rectangles/category-big-rectangule-blue-desktop.png";
import mediaIconWhite from "../../assets/images/icons/mediaIcon.svg"

function IntroBanner() {
    return (
        <section className="pt-[10px]">
            <div className="overflow-hidden bg-secondaryColors-default rounded-[16px] relative md:gap-[30px]  md:flex md:justify-between">
                <div className="p-[20px] relative z-10 md:right-[5%] md:max-w-[450px]">
                    <h1
                        className={` md:text-white md:text-end text-primaryColors-primary_light text-[42px] md:text-[32px]  font-[800] xl:text-[40px] 2xl:text-right leading-[46px] 2xl:text-[50px]`}
                    >
                        One more friend
                    </h1>
                    <div className="relative">
                        <h2 className="md:text-white md:text-end text-primaryColors-primary_light text-[28px] md:text-[24px] xl:text-[24px] font-[700] 2xl:text-right leading-[38px] 2xl:text-[40px] 2xl:leading-[60px]">
                            Thousands more fun!
                        </h2>
                        <img
                            className="absolute left-[280px] xs:left-[300px] top-[10%] sm:top-[20%] md:hidden"
                            src={rectangleBlue}
                            alt="blue rectangle"
                            loading="lazy"
                        />
                    </div>
                    <p className="md:text-white mt-[12px] text-[12px] md:text-[10px] md:text-right  xl:text-[14px] 2xl:text-[12px] 2xl:text-right text-neutralColors-80 font-[500]">
                        Having a pet means you have more joy, a new friend, a happy person who
                        will always be with you to have fun. We have 200+ different pets that
                        can meet your needs!
                    </p>
                    <div className="mt-[32px]   flex gap-[14px] xl:gap-[8px] justify-center  md:justify-end">

                        <button className="border-[solid] border-[1.5px] border-[#003459] bg-transparent md:border-white text-[#003459] flex gap-[6px] rounded-[57px] px-[28px] py-[14px] text-[12px] sm:text-[16px] bg-primaryColors-primaryDark md:bg-[#003459] md:text-primaryColors-primaryDark">
                            <span className="md:text-white">View Intro</span>
                            <img className="md:hidden" src={play} alt="play icons" loading="lazy" />
                            <img className="hidden md:inline" src={mediaIconWhite} alt="media icon white color" loading="lazy" />
                        </button>
                        <button className="rounded-[57px] text-white px-[28px] py-[14px] text-[12px] sm:text-[16px] bg-primaryColors-primaryDark md:bg-white md:text-primaryColors-primaryDark">

                            Explore Now
                        </button>
                    </div>
                </div>
                <img
                    className="relative z-20 md:bottom-0  md:order-[-1]   md:w-[40%]"
                    src={groupOfDogs}
                    alt="group of dogs portrait"
                    loading="lazy"
                />

                <img
                    className="max-w-[initial] md:hidden absolute bottom-[-90px] md:self-end left-1/2 transform -translate-x-1/2 w-[120%] xl:w-[140%]"
                    src={bigBlueRectangle}
                    alt="Big Blue Rectangle Mobile photo"
                    loading="lazy"
                />
                <img
                    className=" absolute top-[-103px] lg:top-[-130px] left-[100%] transform -translate-x-1/2  xl:w-[140%] hidden md:inline"
                    src={BigRectanguleBlueDesktop}
                    alt="big blue rectangle"
                    loading="lazy"
                />
            </div>
        </section>
    );
}

export default IntroBanner;
