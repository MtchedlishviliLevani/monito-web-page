import Card from './Card'
interface Product {
    imgSrc: string;
    title: string;
    product: string;
    size: string;
    price: string;
    category: string;
    giftIcon: string

}

function PetsProductCard({ product }: { product: Product }) {
    return (
        <Card>
            <img className="rounded-[8px] w-full" src={product?.imgSrc} alt='Product image' loading='lazy' />
            <div className="flex-col flex gap-[8px] mt-[8px] px-[8px] py-[12px]">
                <h3 className="text-neutralColors-100 text-[12px] md:text-[16px] font-SFPRO md:leading-[24px] font-[700] flex gap-[7px]">{product?.title}</h3>

                <div className="flex gap-[8px] text-neutralColors-60 text-[12px] md:leading-[18px]"><div><span className="font-[400] ">Product: </span><span className="font-[700]">{product?.product}</span></div> <div><span className="font-[400]">Size: </span><span className="font-[700]">{product?.size}</span></div></div>
                <h3 className="text-neutralColors-100 font-[700] text-[10px] md:text-[14px]">{product?.price}</h3>
                <div className='bg-secondaryColors-default rounded-[8px] flex items-center gap-[30px] px-[10px] py-[6px] mt-[10px]'><img src={product?.giftIcon} alt="gift icon" loading='lazy' /><span className='text-[10px] md:text-[12px] relative before:absolute before:w-[6px] before:h-[6px] before:rounded-[50%] before:bg-primaryColors-primaryDark before:translate-x-[-50%] before:translate-y-[-50%] before:top-[50%] before:left-[-10px] text-primaryColors-primaryDark'>{product.category}</span></div>
            </div>

        </Card>
    )
}

export default PetsProductCard
