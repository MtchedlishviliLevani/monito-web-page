import telephone from "../../assets/images/icons/telIco.png"
import fax from "../../assets/images/icons/faxIcon.png"
import email from "../../assets/images/icons/emailIcon.png"
function ContactInfo() {
    return (
        <address className="not-italic flex justify-between items-center">
            <div className="flex items-center gap-[10px]">
                <div >
                    <img src={telephone} alt="Telephone icon" loading="lazy" />
                </div>
                <div className="flex flex-col">
                    <span>Telephone:</span> <a className="font-[400] text-primaryColors-primaryDark" href="tel:+035432123">03 5432 123</a>
                </div>
            </div>

            <div className="flex items-center gap-[10px] mt-2">
                <div>
                    <img src={fax} alt="Fax icon" loading="lazy" />
                </div>
                <div className="flex flex-col">
                    <span>Fax:</span> <span className="font-[400] text-primaryColors-primaryDark">03 5432 123</span>
                </div>
            </div>

            <div className="flex items-center gap-[10px] mt-2">
                <div>
                    <img src={email} alt="Email icon" loading="lazy" />
                </div>
                <div className="flex flex-col">
                    <span>Email:</span> <a className="font-[400] text-primaryColors-primaryDark" href="mailto:info@example.com ">nfo@marcc.com.au</a>
                </div>
            </div>
        </address>
    )
}

export default ContactInfo
