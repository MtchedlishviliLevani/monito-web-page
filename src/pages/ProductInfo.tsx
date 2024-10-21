import { useNavigate, useParams } from "react-router-dom";
import { globalContext } from "../context"; // Adjust the path as necessary
import { useContext } from "react";
import rightArrow from "../assets/images/icons/backPageIcon.svg";
import productInfoIcon from "../assets/images/icons/infoIcon.svg";
import ProductImage from "../components/productInfo/ProductImage";
import Guarantee from "../components/productInfo/Guarantee";
import Description from "../components/productInfo/Description";
import ProductRandomCardWrapper from "../components/productInfo/ProductRandomCardWrapper";
import ShareSocialMedia from "../components/productInfo/ShareSocialMedia";
import ImageSlider from "../components/productInfo/ImageSlider";
import SocialMediaWrapper from "../components/productInfo/SocialMediaWrapper";
const CardDetail = () => {

    const { id } = useParams(); // Get the ID from the URL
    const { data } = useContext(globalContext); // Access the global context
    const cardDetails = data?.pets?.find((item) => item.id === id);  // Fetch card details based on the ID
    const navigate = useNavigate();
    if (!cardDetails) {
        return <div>Loading...</div>;
    }


    function backToPreviousPage() {
        navigate(-1)
    }

    return (
        <div>
            <div className="flex flex-col ">
                <div className="px-[14px] xs:px-[25px] justify-between py-[6px] flex items-center  z-50 top-[90px]">
                    <img onClick={backToPreviousPage} className="cursor-pointer" src={rightArrow} alt="Prevous page move icon" loading="lazy" />
                    <img className="cursor-pointer" src={productInfoIcon} loading="lazy" />
                </div>
                <div>
                    <div className=" sm:global-container">
                        <div className={`sm:flex sm:justify-between sm:gap-[20px] sm:p-[20px] border-solid border-neutralColors-10 rounded-[10px] border-[1px]`}>
                            <div className="sm:flex sm:flex-col sm:gap-[20px] ">
                                <ProductImage imgSrc={cardDetails?.imgSrc} />
                                <div className="hidden sm:flex sm:flex-col sm:gap-[25px]">

                                    <Guarantee />
                                    <div className="flex items-center gap-[15px]">
                                        <ShareSocialMedia />
                                        <SocialMediaWrapper />
                                    </div>
                                </div>
                            </div>
                            <Description cardDetails={cardDetails} />
                        </div>
                    </div>
                </div>
            </div>


            <div className="global-container">
                <ImageSlider />
                <ProductRandomCardWrapper />
            </div>

        </div >
    );
};

export default CardDetail;
