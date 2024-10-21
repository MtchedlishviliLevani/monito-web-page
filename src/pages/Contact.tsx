import { useContext } from "react";
import ContactForm from "../components/contact/ContactForm";
import { globalContext } from "../context";
import NavigationModal from "../components/header/NavigationModal";
import Overlay from "../components/home/Overlay";



function Contact() {
    const { isBurgerMenuOpen } = useContext(globalContext)
    return (
        <>{isBurgerMenuOpen && (
            <>
                <Overlay />
                <div className="global-container absolute z-[99]">
                    <NavigationModal />
                </div>
            </>
        )}
            <section className="py-[40px]">

                <div className="global-container flex items-center gap-[40px] flex-col md:flex-row">
                    <div className=" flex-grow">
                        <ContactForm />
                    </div>
                    <iframe className="flex-grow w-[100%] h-[300px] md:h-[650px]"
                        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d15866.205704431597!2d106.80142709211852!3d-6.190725611916789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x2e69f69dbf3077c5%3A0x617afe28c3769a0f!2sKebon%20Kacang%2C%20Tanah%20Abang%2C%20Central%20Jakarta%20City%2C%20Jakarta%2C%20Indonesia!3m2!1d-6.1907271999999995!2d106.8163628!5e0!3m2!1sen!2sge!4v1729251635081!5m2!1sen!2sge" width="600" height="650" loading="lazy" ></iframe>
                </div>
            </section>
        </>
    );
}

export default Contact;
