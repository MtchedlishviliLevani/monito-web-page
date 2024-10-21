import { useContext } from "react";
import { globalContext } from "../../context";

function Overlay() {
    const { setIsBurgerMenuOpen } = useContext(globalContext);
    const handleOverlayClick = () => {
        setIsBurgerMenuOpen(false);
    };
    return (
        <div
            onClick={handleOverlayClick}
            className="fixed inset-0 bg-black opacity-50 z-40"
        />
    )
}

export default Overlay
