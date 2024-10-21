import { useContext, useState } from "react";
import en from "../../assets/images/countries/Flag_of_England.png";
import sp from "../../assets/images/countries/spain-flag-icon.png";
import fr from "../../assets/images/countries/france.png";
import arrow from "../../assets/images/icons/arrow.svg"
import { globalContext } from "../../context";

type Language = 'en' | 'es' | 'fr';

function LanguageSwitcher() {
    const { language, setLanguage } = useContext(globalContext)
    const [isOpen, setIsOpen] = useState(false);

    const handleLanguageChange = (lang: Language) => {
        setLanguage(lang);
        setIsOpen(false);
    };


    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="gap-[6px] text-sm font-medium text-gray-700  focus:outline-none"
                >
                    <div className="flex gap-[6px] items-center">
                        <img
                            className="w-[20px]"
                            src={language === "en" ? en : language === "es" ? sp : fr}
                            alt="active country flag"
                            loading="lazy"
                        />
                        <span> {language.toUpperCase()}</span>
                        <img src={arrow} alt="arrow icon" loading="lazy" />
                    </div>
                </button>
            </div>

            {isOpen && (
                <div className="absolute z-10 mt-2 w-[60px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        <button
                            onClick={() => handleLanguageChange("en")}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                        >
                            <img className="w-[16px] mr-2" src={en} alt="England flag" loading="lazy" /> EN
                        </button>
                        <button
                            onClick={() => handleLanguageChange("es")}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                        >
                            <img className="w-[16px] mr-2" src={sp} alt="Spain flag" loading="lazy" /> SP
                        </button>
                        <button
                            onClick={() => handleLanguageChange("fr")}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                        >
                            <img className="w-[16px] mr-2" src={fr} alt="France flag" loading="lazy" /> FR
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}

export default LanguageSwitcher;
