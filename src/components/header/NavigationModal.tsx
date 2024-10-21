import { Link } from "react-router-dom";
import close from "../../assets/images/icons/close.png"
import PrimaryButton from "../buttons/PrimaryButton";
import logo from "../../assets/images/logos/logoMobile.png"
import LanguageSwitcher from "./LanguageSwitcher";
import UserMenu from "./UserMenu";
import { useContext } from "react";
import { globalContext } from "../../context";


function NavigationModal() {
    const { setIsBurgerMenuOpen, isBurgerMenuOpen } = useContext(globalContext);

    function handleLinkClick() {
        if (isBurgerMenuOpen) {
            setIsBurgerMenuOpen(false)
        }
    }
    // Close the burger menu
    const handleOverlayClick = () => {
        setIsBurgerMenuOpen(false);
    };
    const { user } = useContext(globalContext)
    return (
        <div className="p-[20px] rounded-[16px] bg-[#FFF]">
            <div><img className="cursor-pointer" onClick={handleOverlayClick} src={close} alt="close icon" loading="lazy" /></div>
            <div className="max-w-[214px] m-auto flex flex-col gap-[92px]">
                <div className="flex flex-col gap-[24px]">
                    <nav>
                        <ul className="text-primaryColors-primaryDark items-center text-[16px] flex flex-col gap-[24px]">
                            <Link onClick={handleLinkClick} to={"/"}>Home</Link>
                            <Link onClick={handleLinkClick} to={"/category"}>Category</Link>
                            <Link onClick={handleLinkClick} to={"/contact"}>Contact</Link>
                        </ul>
                    </nav>
                    <div> {user ? <UserMenu /> :
                        <Link to="/login"> <PrimaryButton
                            style={{ width: "100%", background: "#003459", color: "#fdfdfd" }}
                        >
                            join the community
                        </PrimaryButton></Link>}</div>
                    <div className="m-auto"><LanguageSwitcher /></div>
                </div>
                <div className="m-auto"><img src={logo} alt="company logo" loading="lazy" /> </div>
            </div>
        </div>
    );
}

export default NavigationModal;
