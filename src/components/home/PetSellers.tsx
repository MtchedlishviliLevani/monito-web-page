import { petSellersData } from "../../data/petsSellersData"
import PrimaryButton from "../buttons/PrimaryButton";
import rightArrow from "../../assets/images/icons/rightArrow.png";
import { Link } from "react-router-dom";

function PetSellers() {
    return (
        <section className=" py-[40px] my-[20px]">
            <div className="flex justify-between items-center">
                <div className="font-SFPRO flex gap-[8px] items-center">
                    <h4 className="font-[500] text-black text-[12px] md:text-[16px]">Proud to be part of
                    </h4>
                    <h2 className="font-[700] text-[16px] md:text-[24px] text-primaryColors-primaryDark">
                        Pet Sellers
                    </h2>
                </div>
                <Link to="#">
                    <PrimaryButton
                        style={{
                            display: "flex",
                            gap: "6px",
                            alignItems: "center",
                            color: "#003459",
                            fontSize: "14px",
                            border: "solid 1.5px #003459"
                        }}
                    >
                        <span>View all our sellers</span> <img src={rightArrow} alt="Right icon" loading="lazy" />
                    </PrimaryButton>
                </Link>
            </div>

            <div>
                <div className="grid grid-cols-3 mt-[20px] md:grid-cols-4 lg:grid-cols-7 justify-between gap-[20px] g items-center">
                    {petSellersData?.map((image, index) => (
                        <div key={index}>  <img src={image.imgSrc} alt="Seller company logo" loading="lazy" /> </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PetSellers;
