import SubmitButton from '../components/buttons/SubmitButton'

function ForgetPassword() {
    return (
        <div className='grid place-items-center justify-center h-[100vh]'>
            <div className='w-[320px]'>
                <form action="" className='flex flex-col gap-[10px]'>
                    <div>
                        <label className='text-[14px] font-[700] text-primaryColors-primaryDark' htmlFor="">New Password</label>
                        <input className='w-[100%] block outline-none border-neutralColors-40 border-solid border-[1px] rounded-[8px] px-[5px] py-[14px] md:basis-3/4 ' type="text" />
                    </div>
                    <div>
                        <label className='text-[14px] font-[700] text-primaryColors-primaryDark' htmlFor="">Confirm Password</label>
                        <input className='w-[100%] block outline-none border-neutralColors-40 border-solid border-[1px] rounded-[8px] px-[5px] py-[14px] md:basis-3/4  ' type="text" />
                    </div>
                    <SubmitButton>Reset Password</SubmitButton>
                </form>
            </div>
        </div>
    )
}

export default ForgetPassword
