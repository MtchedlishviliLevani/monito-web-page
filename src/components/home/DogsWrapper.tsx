import { useContext } from "react"
import rightArrow from "../../assets/images/icons/rightArrow.png"
import PrimaryButton from "../buttons/PrimaryButton"
import { globalContext } from "../../context"
import ProductCard from "./ProductCard"
import { Link, useNavigate } from "react-router-dom"
function DogsWrapper() {
    const navigate = useNavigate()
    const { data } = useContext(globalContext)

    function cardDetailPageRedirect(id: string) {
        navigate(`/product/${id}`)
    }
    return (
        <section className="py-[40px]">
            <div className="flex justify-between items-center">
                <div className="font-SFPRO">
                    <h4 className="font-[500] text-primaryColors-primaryDark text-[16px]">Whats new?</h4>
                    <h2 className="font-[700] text-[12px] text-primaryColors-primaryDark md:text-[24px]">Take a look at some of our pets</h2>
                </div>
                <Link to="/category"><PrimaryButton style={{ display: "flex", gap: "6px", alignItems: "center", color: "#003459", fontSize: "14px", border: "solid 1.5px #003459" }}><span>View More</span> <img src={rightArrow} alt="Right arrow icon" /></PrimaryButton></Link>

            </div >
            <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
                {data?.pets?.slice(0, 8).map((value) => <div key={value?.id} onClick={() => cardDetailPageRedirect(value?.id)}> <ProductCard value={value} /></div>)}
            </div>

        </section >
    )
}

export default DogsWrapper
