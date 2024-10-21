
function TimeCard({ label, value }: { label: string; value: number }) {
    return (
        <div className="grid place-items-center bg-primaryColors-primaryDark rounded-[22px] py-[46px]">
            <div className=" text-white  bg-transparent rounded-lg cursor-pointer p-4 transform transition-transform duration-300 hover:scale-105">
                <h2 className="text-[64px]  font-bold">{value}</h2>
                <p className="text-[16px] text-center">{label}</p>
            </div>
        </div>
    )
}

export default TimeCard
