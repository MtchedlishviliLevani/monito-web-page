import Card from "./Card";

interface Props {
    text: string;
    heading: string;
    imgSrc: string;
    tag: string;
}
function DogCardArticle({ text, heading, imgSrc, tag }: Props) {
    return (
        <Card>
            <div className="" >
                <img src={imgSrc} className="w-full rounded-[8px]" alt="On the card appeared dog image" loading="lazy" />
                <div className="flex flex-col gap-[10px] mt-[10px] px-[8px]">
                    <div className="bg-state_colors-blueSea py-[2px] px-[10px] rounded-[28px] w-[100px]"><span className="text-white">{tag}</span></div>
                    <h3 className="text-neutralColors-100 text-[12px] md:text-[16px] leading-[16px] md:leading-[24px] font-[700]">{heading}</h3>
                    <p className="text-[10px] md:text-[14px]  font-[400] text-neutralColors-80 leading-[20px] font-SFPRO">{text}</p>
                </div>
            </div>
        </Card>
    )
}

export default DogCardArticle
