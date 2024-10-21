import Card from "./Card"
interface PropsObj {
    gender: string;
    price: string;
    age: string;
    id: string;
    imgSrc: string;
    breed: string
}
interface Props {
    value: PropsObj
}

function ProductCard({ value }: Props) {
    return (
        <div className="cursor-pointer">
            <Card>
                <img className="rounded-[8px] w-full" src={value?.imgSrc} alt="On the card dog image" loading="lazy" />

                <div className="flex-col flex gap-[8px] mt-[8px] p-[8px]">
                    <h3 className="text-neutralColors-100 text-[12px] md:text-[16px] font-SFPRO md:leading-[24px] font-[700] flex gap-[7px]"><span>{value?.id}</span><span>{value?.breed}</span></h3>

                    <div className="flex gap-[8px] text-neutralColors-60 text-[10px] md:text-[12px] leading-[18px]"><div><span className="font-[400]">Gene:</span><span className="font-[700]">{value?.gender}</span></div> <div><span className="font-[400]">Age:</span><span className="font-[700]">{value?.age}</span></div></div>
                    <h3 className="text-neutralColors-100 font-[700] text-[10px] md:text-[14px]">{value?.price} VND</h3>
                </div>
            </Card></div>
    )
}

export default ProductCard
