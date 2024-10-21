import { useContext, useState } from "react"
import PrimaryButton from "../buttons/PrimaryButton"
import { globalContext } from "../../context";
import logOutIcon from "../../assets/images/icons/log-out.png"
import userIcon from "../../assets/images/icons/user.png"

function UserMenu() {
    const [isOpenLoggout, setIsOpenLoggout] = useState(false);
    const { logout, user } = useContext(globalContext);
    function handleUserMenu() {
        setIsOpenLoggout((prev) => !prev)
    }
    return (
        <div className="relative">
            <div onClick={handleUserMenu}>
                <PrimaryButton
                    style={{ width: "100%", background: "#003459", color: "#fdfdfd" }}
                >
                    My Profile
                </PrimaryButton></div>
            {isOpenLoggout &&
                <div className={`py-[16px] w-full z-20 absolute top-[57px] px-[8px] bg-white rounded-[10px] flex flex-col gap-[10px] text-primaryColors-primaryDark font-SFPRO text-[12px]`}>
                    <div className="border-b-[1.5px] border-solid border-primaryColors-primaryDark pb-[5px]"> <button>{user?.name}</button></div>
                    <div className="flex-col flex gap-[8px]">
                        <div className="cursor-pointer flex gap-[5px] items-center" ><img src={userIcon} alt="Profile icon" loading="lazy" /><span>Profile</span></div>
                        <div onClick={logout} className="cursor-pointer flex gap-[5px] items-center"><img src={logOutIcon} alt="Log out icon" loading="lazy" /><h5>Log out</h5></div>
                    </div>
                </div>}
        </div>
    )
}

export default UserMenu
