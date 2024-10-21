import { useState, useEffect } from 'react';
import TimeCard from './TimeCard';

// Set the event date to December 31st at 00:00 (UTC)

const CountdownTimer = () => {
    const EVENT_DATE: Date = new Date('2024-12-31'); // Example event date

    // Initialize timeRemaining by calculating the difference in milliseconds
    const [timeRemaining, setTimeRemaining] = useState<number>(EVENT_DATE.getTime() - new Date().getTime());
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(EVENT_DATE.getTime() - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [EVENT_DATE]);

    const calculateTimeLeft = () => {
        const totalSeconds = Math.max(0, Math.floor(timeRemaining / 1000));
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return { days, hours, minutes, seconds };
    };
    const { days, hours, minutes, seconds } = calculateTimeLeft();

    return (
        <section className='py-[40px] mt-[20px]'>
            <h2 className=' text-primaryColors-primaryDark text-[30px] mb-[10px] xl:text-[48px]'>Big Summer Event</h2>
            <div className=" xl:grid-cols-4  xl:space-x-4 xl:p-4 xl:gap-[38px] grid grid-cols-2 gap-[20px]">
                <TimeCard label="Days" value={days} />
                <TimeCard label="Hours" value={hours} />
                <TimeCard label="Minutes" value={minutes} />
                <TimeCard label="Seconds" value={seconds} />
            </div>
        </section>
    );
};
export default CountdownTimer;
