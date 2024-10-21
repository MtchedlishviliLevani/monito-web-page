import { Link } from "react-router-dom";
import SubmitButton from "../components/buttons/SubmitButton";

function PasswordRecovery() {
    return (
        <div className="grid place-items-center py-[70px] h-[100vh]">
            <div className="max-w-[320px] w-[90%]">
                <p className="font-[500] text-[12px] text-primaryColors-primaryDark ">
                    Please enter the email address associated with your account. We'll
                    promptly send you a link to reset your password.
                </p>
                <div className="mt-[15px]">
                    <label
                        className="text-[14px] font-[700] text-primaryColors-primaryDark"
                        htmlFor=""
                    >
                        Email
                    </label>
                    <input
                        className="w-[100%] block outline-none border-neutralColors-40 border-solid border-[1px] rounded-[8px] px-[5px] py-[14px] md:basis-3/4  "
                        type="text"
                    />
                </div>
                <div className="mt-[15px]"><Link to="/forget-password"> <SubmitButton>Send reset link</SubmitButton></Link></div>
            </div></div >
    );
}

export default PasswordRecovery;
