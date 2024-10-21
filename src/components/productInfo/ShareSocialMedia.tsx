function ShareSocialMedia() {
    return (
        <div className="sm:flex sm:gap-[10px] sm:items-center">
            <div className="flex items-center gap-[8px]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m7.5 11.25 5 2.5m0-7.5-5 2.5M15 17.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-10-5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm10-5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" stroke="#002A48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="sm:text-[16px] md:text-[20px] text-primaryColors-primaryDark">Share</span>
                <span className="ml-[-8px] hidden sm:inline text-primaryColors-primaryDark sm:text-[16px] md:text-[20px]" >:</span>
            </div>
        </div>
    )
}

export default ShareSocialMedia
