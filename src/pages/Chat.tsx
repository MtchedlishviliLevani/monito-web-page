// 


import { useState } from "react";
import { chatData } from "../data/chatData"
import dog from "../assets/images/chat_image_dog.png"
import rightArrow from "../assets/images/icons/backPageIcon.svg";
import productInfoIcon from "../assets/images/icons/infoIcon.svg";
import { useNavigate } from "react-router";
import rectangle from "../assets/images/rectangles/yellow-rectsngule.png"
function Chat() {
    const navigate = useNavigate()
    function backToPreviousPage() {
        navigate(-1)
    }

    const [content, setContent] = useState(() => {
        const savedContent = localStorage.getItem("chatContent");
        return savedContent ? JSON.parse(savedContent) : [];
    });

    function handleClick(key: string) {
        if (chatData[key]) {
            setContent((prev) => {
                const updatedContent = [...prev, chatData[key]];
                localStorage.setItem("chatContent", JSON.stringify(updatedContent));
                return updatedContent;
            });
        }
    }


    return (
        <section>
            <div className="relative">
                <img className="w-[100%]" src={dog} alt="Dog" loading="lazy" />
                <div className="px-[14px] absolute w-[100%] xs:px-[25px] justify-between py-[6px] flex items-center  z-50 top-[20px]" >
                    <img onClick={backToPreviousPage} className="cursor-pointer" src={rightArrow} alt="Prevous page move icon" loading="lazy" />
                    <img className="cursor-pointer" src={productInfoIcon} loading="lazy" />
                </div>
            </div>
            <div className="my-[40px]">
                {/* Initial static chat bubble */}
                <div className="bg-primaryColors-primaryDark rounded-[10px_10px_10px_0] p-[10px_10px_15px_10px] text-[15px] text-white relative">
                    <p>
                        Rapidly build stunning Web Apps with Frest 🚀 Developer friendly,
                        Highly customizable & Carefully crafted HTML Admin Dashboard Template.
                    </p>
                    <div className="flex items-center gap-[7px] rounded-[10px] p-[5px] bg-primaryColors-primaryDark absolute bottom-[-10px] right-0">
                        {chatData.imgList.map((img, index) => (
                            <img key={index} src={img} alt="icon" loading="lazy" />
                        ))}
                    </div>
                    <div className="absolute flex gap-[6px] bottom-[-55px] left-0">
                        <img src={chatData.imgDog} alt="dog" loading="lazy" />
                        <span className="text-[8px] mt-[5px] text-[#888888]">7:20</span>
                    </div>
                </div>
                <div
                    className="bg-secondaryColors-moonYellow mt-[80px] w-[90%] ml-auto rounded-[10px_10px_0px_10px] p-[10px_10px_35px_10px] text-[15px] relative "><p>More no. of lines text and showing complete list of features like time stamp + check icon READ</p>
                    <img className="absolute  bottom-[-20px] right-0" src={rectangle} alt="Rectangle" loading="lazy" />
                    <div className="absolute bottom-[-20px] flex text-[#888888] gap-[5px] items-center"><span className="text-[8px]">7:20</span><img src={chatData?.deliveredImg} alt="" /></div>
                </div>

                {content.length > 0 &&
                    content.map((contentItem, index) => (
                        <div key={index} className="bg-primaryColors-primaryDark mt-[80px] rounded-[10px_10px_10px_0] p-[10px_10px_15px_10px] text-[15px] text-white relative">
                            <p>{contentItem[0]?.text}</p>
                            <div className="flex items-center gap-[7px] rounded-[10px] p-[5px] bg-primaryColors-primaryDark absolute bottom-[-10px] right-0">
                                {contentItem[0]?.imgList?.map((img, idx) => (
                                    <img key={idx} src={img} alt="icon" loading="lazy" />
                                ))}
                            </div>
                            <div className="absolute flex gap-[6px] bottom-[-55px] left-0">
                                <img src={chatData.imgDog} alt="dog" loading="lazy" />
                                <span className="text-[8px] mt-[5px] text-[#888888]">7:20</span>
                            </div>
                        </div>
                    ))
                }


                {/* Buttons to trigger dynamic content */}
                <div className="mt-[70px] flex gap-[10px]">
                    <div onClick={() => handleClick("wappChpt")} className="cursor-pointer flex-grow-[3] px-[8px] py-[4px] rounded-[12px] bg-[#f3f5f6] drop-shadow-[0.83]">
                        <span>🤔 What is WappGPT?</span>
                    </div>
                    <div onClick={() => handleClick("pricing")} className="cursor-pointer flex-grow-[1] px-[8px] py-[4px] rounded-[12px] bg-[#f3f5f6] drop-shadow-[0.83]">
                        <span>💰 Pricing</span>
                    </div>
                    <div onClick={() => handleClick("faq")} className="cursor-pointer flex-grow-[1] px-[8px] py-[4px] rounded-[12px] bg-[#f3f5f6] drop-shadow-[0.83]">
                        <span>🙋‍♂️ FAQs</span>
                    </div>
                </div>

                <input
                    className="py-[16px] px-[18px] mt-[20px] placeholder:font-SFPRO text-[14px] w-[100%] bg-[#f3f5f6] rounded-[10px] outline-none"
                    placeholder="Type your message here..."
                    type="text"
                />
            </div></section>
    );
}

export default Chat;
