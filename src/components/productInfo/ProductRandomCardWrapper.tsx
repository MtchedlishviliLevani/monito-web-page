import { useContext } from "react";
import { globalContext } from "../../context";
import RandomProductCards from "./RandomProductCards";

export default function ProductRandomCardWrapper() {
    const { data } = useContext(globalContext)
    const getRandomCards = (array, count) => {
        const randomCards = [...array]
            .sort(() => 0.5 - Math.random())
            .slice(0, count);
        return randomCards;
    };
    const randomCards = getRandomCards(data?.pets, 4); // Get 3 random cards

    return (
        <section className="py-[40px]">
            <h2 className="font-700 text-[20px] font-SFPRO leading-[32px] text-primaryColors-primaryDark">See more puppies</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] mt-[30px]">
                {randomCards.map((item) => <div key={item?.id}> <RandomProductCards value={item} /></div>)}
            </div>
        </section>
    )
}
