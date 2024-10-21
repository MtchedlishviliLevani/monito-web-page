
function ProductImage({ imgSrc }: { imgSrc: string }) {
    return (
        <div className="w-[100%]  sm:w-[initial]    h-[400px] sm:h-[initial] z-[100] sm:max-h-[initial]">
            <img className="w-[100%] sm:max-w-[560px]   sm:rounded-[10px] absolute top-0 left-0 h-[70vh]  max-h-[410px]  sm:static sm:h-[initial] sm:max-h-[initial]" src={imgSrc} alt="Product Image" loading="lazy" />
        </div>
    )
}

export default ProductImage
