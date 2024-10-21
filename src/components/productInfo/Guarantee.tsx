import healthGuaranteeIcon from "../../assets/images/icons/healthGuaranteeIcon.png"
import identificationIcon from "../../assets/images/icons/petIdentificationIcon.png"
function Guarantee() {
    return (
        <div className="p-[10px] bg-secondaryColors-default rounded-[10px] gap-[15px] flex flex-col md:flex-row text-primaryColors-primaryDark text-[12px]">
            <div className="flex items-center gap-[10px]"> <img loading="lazy" src={healthGuaranteeIcon} alt="Health guarantee icon" /><h4>100% health guarantee for pets</h4></div>
            <div className="flex items-center gap-[10px]"><img loading="lazy" src={identificationIcon} alt="Identification Icon" /><h4>100% guarantee of pet identification</h4></div>
        </div>
    )
}

export default Guarantee
