import notch from "../../assets/images/icons/Notch.png"
import signalIcon from "../../assets/images/icons/MobileSignal.svg"
import wifi from "../../assets/images/icons/Wifi.svg"
import battery from "../../assets/images/icons/_StatusBar-battery.svg"

function StatusBar() {
    return (
        <div className="flex items-center justify-between relative z-[10] pb-[12px] md:hidden">
            <div className="self-end font-[500] text-[1.7rem]">9:41</div>
            <div className="ml-[14px]"><img src={notch} alt="notch mobile" loading="lazy" /></div>
            <div className="flex gap-[8px] self-end">
                <img src={signalIcon} alt="Signal icon" loading="lazy" />
                <img src={wifi} alt="Wifi icon" loading="lazy" />
                <img src={battery} alt="Battery icon" loading="lazy" />
            </div>
        </div>
    )
}

export default StatusBar
