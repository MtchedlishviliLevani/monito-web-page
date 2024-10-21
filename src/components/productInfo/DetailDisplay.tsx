interface Props {
    property: string;
    value: string
}
function DetailDisplay({ property, value }: Props) {
    return (
        <div className='text-neutralColors-60 font-[400] flex py-[5px] border-solid border-b-[1px] border-[#ebeeef]  text-[12px] font-SFPRO '>
            <div><span>{property}</span></div><div><span>: {value}</span></div>
        </div>
    )
}

export default DetailDisplay
