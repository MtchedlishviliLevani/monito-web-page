import { Outlet, useLocation } from "react-router"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import HeaderReactangle from "../components/header/HeaderReactangle";


function Layout() {
    const location = useLocation();

    const isHomePage = location.pathname === "/";

    const isRegRecForgPassPages = location.pathname === "/recover" || location.pathname === "/register" || location.pathname === "/forget-password" || location.pathname === "/chat"


    return (
        <div>
            <div style={isHomePage ? {
                background: "linear-gradient(145deg, #fceed5 6%, #fceed5 78%, #ffe7ba 103%)"
            } : {}}>
                {isHomePage && <HeaderReactangle />}
                {isRegRecForgPassPages ? <></> : <div className="global-container"><Header /></div>}
            </div>

            <Outlet />
            {isRegRecForgPassPages ? <></> : <Footer />}
        </div>
    )
}

export default Layout
