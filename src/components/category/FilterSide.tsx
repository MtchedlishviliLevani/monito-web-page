import { useContext, useState, useEffect, useCallback } from "react";
import CheckMarkInput from "./CheckMarkInput";
import { globalContext } from "../../context";
import { colorsList } from "../../data/colorList";
import { Data } from "../../context";

const sizeList = ["Small", "Medium", "Large"];

interface Props {
    setFilterData: React.Dispatch<React.SetStateAction<Data>>;
    sortOrder: string
}

function FilterSide({ setFilterData, sortOrder }: Props) {
    const { data } = useContext(globalContext);
    const [selectedGender, setSelectedGender] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedsize, setSelectedsize] = useState<string | null>(null);
    const [minPrice, setMinPrice] = useState<number | null>(null);
    const [maxPrice, setMaxPrice] = useState<number | null>(null);

    // This useEffect will run when any filter changes (gender, color, size, price)
    // Memoize applyFilters using useCallback
    const applyFilters = useCallback(() => {
        let filtered = data?.pets?.filter((pet) => {
            const petPrice = parseFloat(pet.price.replace(/,/g, ""));

            return (
                (!selectedGender || pet.gender === selectedGender) &&
                (!selectedColor || pet.color === selectedColor) &&
                (!selectedsize || pet.size === selectedsize) &&
                (!minPrice || petPrice >= minPrice) &&
                (!maxPrice || petPrice <= maxPrice)
            );
        });

        // Sorting logic
        if (sortOrder === "low-to-high") {
            filtered = filtered?.sort((a, b) => parseFloat(a.price.replace(/,/g, "")) - parseFloat(b.price.replace(/,/g, "")));
        } else if (sortOrder === "high-to-low") {
            filtered = filtered?.sort((a, b) => parseFloat(b.price.replace(/,/g, "")) - parseFloat(a.price.replace(/,/g, "")));
        }

        setFilterData((prev) => ({
            ...prev,
            pets: filtered,
        }));
    }, [data, selectedGender, selectedColor, selectedsize, minPrice, maxPrice, sortOrder, setFilterData]);

    useEffect(() => {
        applyFilters();
    }, [applyFilters]);

    function handleMinPriceChange(event: React.ChangeEvent<HTMLInputElement>) {
        setMinPrice(event.target.value ? parseFloat(event.target.value) : null);
    }

    function handleMaxPriceChange(event: React.ChangeEvent<HTMLInputElement>) {
        setMaxPrice(event.target.value ? parseFloat(event.target.value) : null);
    }


    return (
        <aside>
            <div className="flex flex-col gap-[6px]">
                <h3 className="text-[24px] text-primaryColors-primaryDark">Filter</h3>

                {/* Gender Filter */}
                <div>
                    <h4 className="text-[14px] text-neutralColors-100">Gender</h4>
                    <div>
                        {["Male", "Female"].map((gender) => (
                            <div key={gender} className="flex gap-[10px] items-center">
                                <CheckMarkInput
                                    value={gender}
                                    checked={selectedGender == gender}
                                    onChange={() => setSelectedGender(gender === selectedGender ? null : gender)}
                                />
                                <label className="text-[14px]">{gender}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-[14px] text-neutralColors-100">Color</h4>
                    {colorsList.map((color, index) => (
                        <div key={index} className="flex items-center gap-[10px]">
                            <CheckMarkInput
                                value={color.title}
                                checked={selectedColor === color.title}
                                onChange={() => setSelectedColor(selectedColor === color.title ? null : color.title)}
                            />
                            <div
                                className="w-[10px] h-[10px] rounded-[50%]"
                                style={{ background: color.color_code }}
                            ></div>
                            <label className="text-[14px]">{color.title}</label>
                        </div>
                    ))}
                </div>

                {/* size Filter */}
                <div>
                    <h4 className="text-[14px] text-neutralColors-100">Size</h4>
                    <div className="flex flex-col gap-[5px]">
                        {sizeList.map((size, index) => (
                            <div key={index} className="flex gap-[5px] items-center">
                                <CheckMarkInput
                                    value={size}
                                    checked={selectedsize === size}
                                    onChange={() => setSelectedsize(selectedsize == size ? null : size)}
                                />
                                <label className="text-[14px]">{size}</label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Price Range Filter */}
                <div>
                    <h4 className="text-[14px] text-neutralColors-100">Price</h4>
                    <div className="flex gap-[10px] items-center">

                        <input
                            type="number"
                            placeholder="Min"
                            className="border py-[5px] outline-none text-[10px] px-[10px] rounded-md w-[135px] placeholder:text-[10px] h-[40px]"
                            value={minPrice || ""}
                            onChange={handleMinPriceChange}
                        />


                        <input
                            type="number"
                            placeholder="Max"
                            className="border px-[10px] py-[5px] outline-none rounded-md w-[135px] text-[10px] placeholder:text-[10px] h-[40px]"
                            value={maxPrice || ""}
                            onChange={handleMaxPriceChange}
                        />

                    </div>
                </div>
            </div>
        </aside>
    );
}

export default FilterSide;
