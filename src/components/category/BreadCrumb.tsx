import arrowRight from "../../assets/images/icons/arrow_right.png";

export default function BreadCrumb() {
    return (
        <div className="flex items-center text-[12px] text-[#667479] font-[400] sm:text-[9px] lg:text-[12px]">
            <span>Home </span> <img src={arrowRight} alt="right arrow" loading="lazy" />
            <span>Dog</span>
        </div>
    )
}
