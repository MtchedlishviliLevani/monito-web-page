import arrowDown from "../../assets/images/icons/arrowDown.png"
type SortByPriceProps = {
    onSortChange: (value: string) => void;
};
function SortByPrice({ onSortChange }: SortByPriceProps) {
    return (
        <div className="relative flex items-center">
            <select onChange={(e) => onSortChange(e.target.value)} className=" text-[10px] border-solid border-[1px] appearance-none border-neutralColors-20 py-[15px] w-[172px] px-[20px] rounded-[20px] cursor-pointer outline-none">
                <option value="default">Sort by Price</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
            </select>
            <img className="ml-[-30px]" src={arrowDown} alt="arrow down icon" loading="lazy" />
        </div>

    )
}

export default SortByPrice
