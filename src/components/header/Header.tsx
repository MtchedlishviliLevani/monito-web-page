import { useLocation } from "react-router"
import NavBar from "./NavBar"
import StatusBar from "./StatusBar"
import { useEffect, useState } from "react";



function Header() {
    const [isMobileSize, setIsMobileSize] = useState(window.innerWidth < 768);

    useEffect(() => {
        function handleResize() {
            setIsMobileSize(window.innerWidth < 768);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const location = useLocation();
    const isProductPage = location.pathname.includes("/product");


    return (
        <header className="relative ">
            <StatusBar />
            {isProductPage && isMobileSize ? <></> : <NavBar />}
        </header>


    )
}

export default Header
