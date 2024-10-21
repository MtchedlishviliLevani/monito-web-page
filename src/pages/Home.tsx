import { useContext } from "react";
import PetsInfo from "../components/common_components/PetsInfo";
import NavigationModal from "../components/header/NavigationModal";
import HeroSection from "../components/home/HeroSection";
import { globalContext } from "../context";
import Overlay from "../components/home/Overlay";

import PetsBanner1 from "../components/home/PetsBanner1";
import CountdownTimer from "../components/home/CountDownTimer";
import DogArticle from "../components/home/DogArticle";
import DogsWrapper from "../components/home/DogsWrapper";
import PetsProducts from "../components/home/PetsProducts";
import PetSellers from "../components/home/PetSellers";
import AdoptionBanner from "../components/home/AdoptionBanner";

function Home() {
    const { isBurgerMenuOpen, } = useContext(globalContext);


    return (
        <>
            <div
                style={{
                    background:
                        "linear-gradient(145deg, #fceed5 6%, #fceed5 78%, #ffe7ba 103%)",
                }}
                className="rounded-b-[20px]"
            >
                {isBurgerMenuOpen && (
                    <>
                        <Overlay />
                        <div className="global-container absolute z-[99]">
                            <NavigationModal />
                        </div>
                    </>
                )}
                <div className="flex flex-col gap-[30px] md:flex-row global-container md:items-center md:pt-[50px]">
                    <div className="w-full md:w-1/2">
                        <PetsInfo />
                    </div>

                    <div className="w-full md:w-1/2">
                        <HeroSection />
                    </div>
                </div>
            </div>
            <div className="global-container">
                <DogsWrapper />
                <PetsBanner1 />
                <PetsProducts />
                <PetSellers />
                <AdoptionBanner />
                <DogArticle />
                <CountdownTimer />
            </div>
        </>
    );
}

export default Home;
