import { useContext, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { globalContext } from '../context';
import { useNavigate } from 'react-router';
import SignInWithGoogle from '../components/common_components/SignInWithGoogle';
import { Link } from 'react-router-dom';
import SubmitButton from '../components/buttons/SubmitButton';


interface LoginFormInputs {
    email: string;
    password: string;
}

function Login() {
    const { login } = useContext(globalContext);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleLogin: SubmitHandler<LoginFormInputs> = (data) => {
        const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

        if (storedUser && storedUser.email === data.email && storedUser.password === data.password) {
            login(storedUser);

            navigate('/');
        } else {
            setErrorMessage('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className='py-[70px] grid place-items-center font-SFPRO'>
            <div className='max-w-[320px] w-[90%]'>
                <SignInWithGoogle />
                <div className='flex items-center justify-between gap-[16px] my-[15px]'>
                    <div className='flex-grow bg-[#e6e7e8] h-[1px]'></div>
                    <span className='font-[500] text-primaryColors-primaryDark text-[12px]'>OR</span>
                    <div className='flex-grow bg-[#e6e7e8] h-[1px]'></div>
                </div>
                <form onSubmit={handleSubmit(handleLogin)} className='flex flex-col gap-[10px]'>
                    <div>
                        <label className='text-[14px] font-[700] text-primaryColors-primaryDark' htmlFor="email">Email</label>
                        <input
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    message: 'Enter a valid email address'
                                }
                            })}
                            className='w-[100%] block outline-none border-neutralColors-40 border-solid border-[1px] rounded-[8px] px-[5px] py-[14px] md:basis-3/4'
                            type="email"
                        />
                        {errors.email && <span className='text-red-500 text-[12px]'>{errors.email.message}</span>}
                    </div>
                    <div>
                        <label className='text-[14px] font-[700] text-primaryColors-primaryDark' htmlFor="password">Password</label>
                        <input
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters long'
                                }
                            })}
                            className='w-[100%] block outline-none border-neutralColors-40 border-solid border-[1px] rounded-[8px] px-[5px] py-[14px] md:basis-3/4'
                            type="password"
                        />
                        {errors.password && <span className='text-red-500 text-[12px]'>{errors.password.message}</span>}
                    </div>
                    {errorMessage && (
                        <p className="text-red-500 text-sm">{errorMessage}</p> // Use a utility class for red text
                    )}
                    <Link className="text-primaryColors-primaryDark text-[12px] text-right" to="/recover">Forget Password</Link>
                    <SubmitButton>Login</SubmitButton>
                    <Link to="/register" className='text-center text-primaryColors-primaryDark font-[12px]'>Don't have an account? Sign up</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
