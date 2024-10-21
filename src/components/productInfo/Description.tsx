import PrimaryButton from "../buttons/PrimaryButton"
import DetailDisplayWrapper from "./DetailDisplayWrapper"
import Guarantee from "./Guarantee"
import chat from "../../assets/images/icons/chatIcon.png"
import arrowRight from "../../assets/images/icons/arrow_right.png";
import ShareSocialMedia from "./ShareSocialMedia";
import { Link, } from "react-router-dom";
import { DataObj, } from "../../context";

interface Props {
    cardDetails: DataObj
}

function Description({ cardDetails }: Props) {

    return (
        <div className="flex-col sm:flex-grow flex gap-[45px] box-shadow-product  sm:shadow-none rounded-[10px] px-[14px] sm:pl-[15px] py-[15px] sm:pt-[initial]">
            <div className="flex flex-col gap-[8px] sm:gap-[4px] lg:gap-[8px]">
                <div className="flex items-center text-[12px] text-[#667479] font-[400] sm:text-[9px] lg:text-[12px]">
                    <span>Home </span> <img src={arrowRight} alt="Arrow right" loading="lazy" />
                    <span>Dog</span> <img src={arrowRight} alt="Arrow right" loading="lazy" />
                    <span>{cardDetails.size} Dog</span>
                    <img src={arrowRight} alt="Arrow right" loading="lazy" />
                    <span>{cardDetails?.breed}</span>
                </div>
                <h2 className="text-[#00171F] text-[24px] font-[700] font-SFPRO">
                    {cardDetails?.breed}
                </h2>
                <h2 className="text-primaryColors-primaryDark text-[20px]">
                    {cardDetails?.price} VND
                </h2>
                <div className="flex items-center gap-[10px] mt-[14px] sm:flex-col xl:flex-row">
                    <Link to="/contact">
                        <PrimaryButton
                            style={{

                                background: "#003459",
                                color: "#fdfdfd",
                            }}
                        >
                            Contact Us
                        </PrimaryButton></Link>
                    <div >
                        <Link to="/chat">
                            <PrimaryButton
                                style={{
                                    background: "transparent",
                                    border: "solid 1.5px #003459",
                                    display: "flex",
                                    gap: "6px",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <img src={chat} alt="Chat Icon" loading="lazy" />
                                <span className="text-[15px] md:text-[18px]"> Chat With Monito</span>
                            </PrimaryButton></Link></div>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-between sm:hidden">
                    <h3 className="text-[18px] font-[700]">Information</h3>
                    <div className=""><ShareSocialMedia /></div>
                </div>
                <DetailDisplayWrapper cardDetails={cardDetails} />
            </div>
            <div className="sm:hidden">
                <Guarantee />
            </div>

        </div>
    )
}

export default Description
