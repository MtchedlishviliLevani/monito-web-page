import googleIcon from "../../assets/images/icons/Google.png";

function SignInWithGoogle() {
    return (

        <button className="w-[100%] flex justify-center gap-[8px] rounded-[4px] py-[12px] px-[24px] border-[#B6B7BC] border-solid border-[1px] bg-white">
            <img src={googleIcon} alt="google icon" loading="lazy" />
            <span className="text-[14px] font-[500] text-[#5C5F6A]">
                Continue with Google
            </span>
        </button>
    );
}

export default SignInWithGoogle;
