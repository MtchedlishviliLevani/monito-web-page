import PrimaryButton from '../buttons/PrimaryButton'
import rightArrow from "../../assets/images/icons/rightArrow.png"
import { Link } from 'react-router-dom'
import { productPets } from '../../data/productsPetsData'
import PetsProductCard from './PetsProductCard'


function PetsProducts() {
    return (
        <section className='py-[40px]'>
            <div className="flex justify-between items-center">
                <div className="font-SFPRO">
                    <h4 className="font-[500] text-black text-[16px]">Whats new?</h4>
                    <h2 className="font-[700] text-[14px] text-primaryColors-primaryDark lg:text-[24px]">Take a look at some of our pets</h2>
                </div>
                <Link to="#"><PrimaryButton style={{ display: "flex", gap: "6px", alignItems: "center", color: "#003459", fontSize: "14px", border: "solid 1.5px #003459" }}><span>View More</span> <img src={rightArrow} alt='Right arrow' loading='lazy' /></PrimaryButton></Link>
            </div >
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-[20px]'>
                {productPets.map((product, index) => <div key={index}><PetsProductCard product={product} /> </div>)}
            </div>
        </section>
    )
}

export default PetsProducts
