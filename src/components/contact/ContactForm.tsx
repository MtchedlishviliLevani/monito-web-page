import SubmitButton from "../buttons/SubmitButton"
import ContactInfo from "./ContactInfo"
import InputsWrapper from "./InputsWrapper"
import SelectDropDown from "./SelectDropDown"

function ContactForm() {
    return (
        <form >
            <div className="flex flex-col gap-[20px]">
                <h2 className="text-[54px] font-[700] font-SFPRO">
                    <span className="text-black">Get In</span>
                    <span className="text-primaryColors-primaryDark"> Touch</span>
                </h2>
                <p className="text-[16px]">
                    Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
                    leo molestie vel, ornare non id blandit netus.
                </p>
                <InputsWrapper />
                <SelectDropDown />
                <SubmitButton>Send</SubmitButton>
                <div className="mt-[40px]">
                    <ContactInfo />
                </div>
            </div>


        </form>
    )
}

export default ContactForm
