import logoMobile from "../../assets/images/logos/logoMobile.png";
import burgerMenu from "../../assets/images/icons/burgerMenu.svg";
import { Link } from "react-router-dom";
import PrimaryButton from "../buttons/PrimaryButton";
import logoDesktop from "../../assets/images/logos/logoDesktop.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { useContext } from "react";
import { globalContext } from "../../context";
import UserMenu from "./UserMenu";
function NavBar() {
    const { isBurgerMenuOpen, setIsBurgerMenuOpen, user } = useContext(globalContext)
    function openNavigation() {
        setIsBurgerMenuOpen((prev) => !prev)
    }
    console.log(isBurgerMenuOpen)
    return (
        <div className="flex justify-between py-[12px]">
            <div className="md:flex md:gap-[30px] lg:gap-[60px] md:items-center">
                <Link className="md:hidden" to="/"> <img className="cursor-pointer " src={logoMobile} alt="company logo" /></Link>
                <Link className="hidden md:block" to="/"> <img
                    className="cursor-pointer"
                    src={logoDesktop}
                    alt="company logo"
                    loading="lazy"
                /></Link>
                <ul className="hidden md:text-[16px] md:flex md:text-primaryColors-primaryDark md:font-bold  md:justify-between md:gap-[30px] lg:gap-[48px]">
                    <Link to="/">Home</Link>
                    <Link to="/category">Category</Link>
                    <Link to="/contact">Contact</Link>
                </ul>
            </div>
            <div>
                <img onClick={openNavigation} className="cursor-pointer md:hidden" src={burgerMenu} loading="lazy" />
                <div className="flex items-center gap-[22px]">

                    <div className="hidden md:block w-[214px] ">
                        {user ? <UserMenu /> :
                            <Link to="/login"> <PrimaryButton
                                style={{ width: "100%", background: "#003459", color: "#fdfdfd" }}
                            >
                                join the community
                            </PrimaryButton></Link>}
                    </div>

                    <div className="hidden md:inline-block"><LanguageSwitcher /></div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
