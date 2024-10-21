
function InputsWrapper() {
    return (
        <>
            <div className="relative">
                <input
                    placeholder="Name"
                    className="block w-[100%] outline-none border-neutralColors-40 border-solid border-[1px] rounded-[1px] px-[20px] py-[16px] placeholder:font-[400]"
                    type="text"
                />
                <span className="absolute left-[52px] top-[52%] translate-y-[-50%] text-red-500">*</span>
            </div>
            <input
                placeholder="Email"
                className="block w-[100%] outline-none border-neutralColors-40 border-solid border-[1px] rounded-[1px] px-[20px] py-[16px] placeholder:font-[400]"
                type="text"
            />
            <div className="relative">
                <input
                    placeholder="Phone Number"
                    className=" w-[100%] block outline-none border-neutralColors-40 border-solid border-[1px] rounded-[1px] px-[20px] py-[16px] placeholder:font-[400]"
                    type="text"
                />
                <span className="absolute translate-y-[-50%] top-[52%] text-red-500 left-[92px]">*</span>
            </div>
        </>
    )
}

export default InputsWrapper
