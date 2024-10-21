import SubmitButton from "../components/buttons/SubmitButton";
import { Link, useNavigate } from "react-router-dom";
import SignInWithGoogle from "../components/common_components/SignInWithGoogle";
import { useForm, SubmitHandler } from "react-hook-form";

interface RegisterFormInputs {
    name: string;
    email: string;
    password: string;
}

function Register() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormInputs>();

    const signUp: SubmitHandler<RegisterFormInputs> = (data) => {
        const userData = { ...data };
        // Store the user data in localStorage
        localStorage.setItem('user', JSON.stringify(userData));



        // Redirect to login page after registration
        navigate('/login');
    };

    return (
        <div className="py-[70px] grid place-items-center font-SFPRO">
            <div className="max-w-[320px] w-[90%]">
                <SignInWithGoogle />
                <div className="flex items-center justify-between gap-[16px] my-[15px]">
                    <div className="flex-grow bg-[#e6e7e8] h-[1px]"></div>
                    <span className="font-[500] text-primaryColors-primaryDark text-[12px]">
                        OR
                    </span>
                    <div className="flex-grow bg-[#e6e7e8] h-[1px]"></div>
                </div>
                <form onSubmit={handleSubmit(signUp)} className="flex flex-col gap-[10px]">
                    <div>
                        <label className="text-[14px] font-[700] text-primaryColors-primaryDark" htmlFor="name">
                            Name
                        </label>
                        <input
                            {...register("name", { required: "Name is required" })}
                            className="w-[100%] block outline-none border-neutralColors-40 border-solid border-[1px] rounded-[8px] px-[5px] py-[14px] md:basis-3/4"
                            type="text"
                        />
                        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                    </div>
                    <div>
                        <label className="text-[14px] font-[700] text-primaryColors-primaryDark" htmlFor="email">
                            Email
                        </label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    message: "Enter a valid email address"
                                }
                            })}
                            className="w-[100%] block outline-none border-neutralColors-40 border-solid border-[1px] rounded-[8px] px-[5px] py-[14px] md:basis-3/4"
                            type="text"
                        />
                        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    </div>
                    <div>
                        <label className="text-[14px] font-[700] text-primaryColors-primaryDark" htmlFor="password">
                            Password
                        </label>
                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters long"
                                }
                            })}
                            className="w-[100%] block outline-none border-neutralColors-40 border-solid border-[1px] rounded-[8px] px-[5px] py-[14px] md:basis-3/4"
                            type="password"
                        />
                        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                    </div>
                    <span className="text-primaryColors-primaryDark text-[12px]">
                        By creating an account you agree with our Terms of Service, Privacy Policy.
                    </span>
                    <SubmitButton>Create Account</SubmitButton>
                    <Link to="/login" className="text-center text-primaryColors-primaryDark font-[12px]">
                        Already have an account? Log in
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Register;
