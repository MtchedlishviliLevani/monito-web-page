import SubscribeButton from "../buttons/SubscribeButton"

function SubscirbeForm() {
    return (
        <div className="bg-primaryColors-primaryDark rounded-[16px] p-[16px] flex flex-col gap-[16px] md:flex-row md:items-center ">
            <div className="md:flex-row md:basis-[389px] md:flex-grow-0"> <h2 className="text-neutralColors-0 text-[20px] font-bold leading-[1.6]">Register Now So You Don't Miss Our Programs</h2></div>
            <div className="bg-[#FFF] p-[12px] rounded-[14px] flex flex-col gap-[12px] md:flex-row md:basis-[707px] md:flex-grow-0 md:justify-between md:w-[100%]">
                <input type="text" placeholder="Enter your Email" className="outline-none border-neutralColors-40 border-solid border-[1px] rounded-[8px] px-[28px] py-[14px] md:basis-3/4  placeholder:font-gilroy" />
                <div className="basis-1/4"><SubscribeButton style={{ width: "100%" }}>Subscribe Now</SubscribeButton></div>
            </div>
        </div>
    )
}

export default SubscirbeForm
