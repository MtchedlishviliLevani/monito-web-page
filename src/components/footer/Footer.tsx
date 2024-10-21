import FooterLegalInfo from "./FooterLegalInfo";
import FooterNav from "./FooterNav";
import FooterSocials from "./FooterSocials";
import SubscirbeForm from "./SubscirbeForm";


function Footer() {
    return (
        <div
            style={{
                background:
                    "linear-gradient(145deg, #fceed5 6%, #fceed5 78%, #ffe7ba 103%)",
            }}
            className="rounded-t-[20px] pt-[40px]"
        >
            <div className="flex-col gap-[40px] flex">
                <div className="global-container">
                    <SubscirbeForm />

                    <div className="flex flex-col gap-[20px] md:flex-row md:justify-between md:mt-[40px]">
                        <FooterNav />
                        <FooterSocials />
                    </div>

                    <div className="line"></div>
                </div>
            </div>
            <div className="global-container">
                <div className="pt-[35px] pb-[20px]">
                    <FooterLegalInfo />
                </div>
            </div>
        </div>

    );
}

export default Footer;
