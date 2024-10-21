
function SelectDropDown() {
    return (
        <select
            className="cursor-pointer font-[400] block w-full border border-solid border-neutral-300 rounded-md px-4 py-[16px] text-neutral-700 bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 hover:bg-neutral-100"
        >
            <option className="cursor-pointer">How Did You Find Us?</option>
            <option>Google Search</option>
            <option>Social Media</option>
            <option>Friend Recommendation</option>
            <option>Advertisement</option>
        </select>
    )
}

export default SelectDropDown
